drop database if exists bamazonDB;
create database bamazonDB;

use bamazonDB;

create table products (
    itemID int(4) not null,
    product varchar(100) not null,
    price decimal(10,2) not null,
    stock int(50) not null,
    primary key (itemID)
);

select * from products;

insert into products(itemID, product, price, stock)
values (111, "poptarts", 1.99, 50),
        (222, "seagull heart", 50.99, 25),
        (333, "sending stone", 149.99, 2),
        (444, "climbing rope", 24.99, 7),
        (555, "barn", 0.01, 42),
        (666, "the number of the beast", 6.66, 666),
        (777, "jackpot", 999.99, 1),
        (888, "some old guy", 1.99, 1),
        (999, "the friends we made along the way", 0.20, 3),
        (420, "Mary Jane", 3.50, 34)