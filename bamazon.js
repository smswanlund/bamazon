//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"0074",
    database:"bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected to bamazon");
})

var displayProducts = function(){

    var query = "select * from products"
    connection.query(query, function(err, res){
        if (err) throw err;
        var displayTable = new Table({
            head:["Item ID", "Product", "Price", "Stock"],
            colWidths:[10,10,10,10]
        });
        for(var i = 0; i<res.length; i++){
            displayTable.push(res[i].itemID, res[i].product, res[i].price, res[i].stock);
        }
        console.log(displayTable.toString());
        purchaseInquiry();
    });
}

function purchaseInquiry() {

    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter ID of item you would like to purchase.",
            filter:Number
        },
        {
            name:"quantity",
            type: "input",
            message:"how many would you like to purchase?",
            filter:Number
        },

    ]).then(function(answer){
        var quantityreq = answer.quantity;
        var IDreq = answer.ID;
        purchaseProcessing(IDreq, quantityreq);
    });
};

function purchaseProcessing(ID, quantity) {

    connection.query("select * from products where itemID = " + ID, function(err, res){

        if(err) throw err;

        if(quantity <= res[0].stock) {

            var totalCost = res[0].price * quantity;

            console.log("Your Order is Available for Purchase");
            console.log("The cost for " + quantity + " " + res[0].product + " is " + totalCost);

            connection.query("update products set stock = stock - " + quantity + "where itemID = " + ID);

        } else{
            console.log("sorry, we do not have enough of " + res[0].product + "in stock to complete your order.")
        };

    });

};

displayProducts();