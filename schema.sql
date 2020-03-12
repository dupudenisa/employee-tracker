DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE IF NOT EXISTS employee_tracker;

USE employee_tracker;

CREATE TABLE IF NOT EXISTS department(
  department_id INT AUTO_INCREMENT
 ,department_name VARCHAR(30) NOT NULL 
 ,PRIMARY KEY(department_id)
 );
SELECT * FROM department;

CREATE TABLE IF NOT EXISTS deprole (
  deprole_id INT AUTO_INCREMENT  
, title VARCHAR(30) NOT NULL
, salary DECIMAL(10,2) NOT NULL 
, department_id INT NOT NULL 
, PRIMARY KEY(deprole_id)
,FOREIGN KEY (department_id) REFERENCES department (department_id)
);
SELECT * FROM deprole;

CREATE TABLE IF NOT EXISTS employee (
  employee_id INT AUTO_INCREMENT 
, first_name VARCHAR(30) NOT NULL 
, last_name VARCHAR(30)
, role_id INT NOT NULL 
, manager_id INT 
, department_id INT NOT NULL
, PRIMARY KEY (employee_id) 
,FOREIGN KEY (role_id) REFERENCES deprole (deprole_id)
,FOREIGN KEY (manager_id) REFERENCES employee (employee_id)
,FOREIGN KEY (department_id) REFERENCES deprole (department_id)
);
SELECT * FROM employee;

