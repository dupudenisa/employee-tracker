DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE IF NOT EXISTS employee_tracker;

USE employee_tracker;

CREATE TABLE IF NOT EXISTS department(
  id INT AUTO_INCREMENT
 ,department_name VARCHAR(30) NOT NULL 
 ,PRIMARY KEY(id)
 );
SELECT * FROM department;

CREATE TABLE IF NOT EXISTS deprole (
  id INT AUTO_INCREMENT  
, title VARCHAR(30) NOT NULL
, salary DECIMAL(10,2) NOT NULL 
, department_id INT NOT NULL 
, PRIMARY KEY(id)
);
SELECT * FROM deprole;

CREATE TABLE IF NOT EXISTS employee (
  id INT AUTO_INCREMENT 
, first_name VARCHAR(30) NOT NULL 
, last_name VARCHAR(30)
, role_id INT NOT NULL 
, manager_id INT 
, PRIMARY KEY (id) 
);
SELECT * FROM employee;

