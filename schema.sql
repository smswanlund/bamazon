DROP DATABASE IF EXISTS bamazonDB;

CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    itemID INT(4) AUTO_INCREMENT NOT NULL,
    product VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT(50) NOT NULL,
    PRIMARY KEY (itemID)
);

SELECT * FROM products;

INSERT INTO products (itemID, product, price, stock)
VALUES (111, "poptarts", 1.99, 50),
        (222, "seagull heart", 50.99, 25),
        (333, "sending stone", 149.99, 2),
        (444, "climbing rope", 24.99, 7),
        (555, "barn", 0.01, 42),
        (666, "the number of the beast", 6.66, 666),
        (777, "jackpot", 999.99, 1),
        (888, "some old guy", 1.99, 1),
        (999, "the friends we made along the way", 0.20, 3),
        (420, "Mary Jane", 3.50, 34)