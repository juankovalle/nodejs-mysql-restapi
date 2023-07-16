CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;
 CREATE TABLE employee (
     id INT(11) NOT NULL AUTO_INCREMENT,
     name VARCHAR(45) DEFAULT NULL,
     salary INT DEFAULT NULL,
    PRIMARY KEY (id)
 );

SHOW tables;
DESCRIBE employee;

insert into employee (name,salary) values
    ('Juank',1000),
    ('Migue',2000),
    ('Mati',3000);
