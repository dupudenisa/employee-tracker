USE employee_tracker;

INSERT INTO department(department_name)
VALUES("dep1");

INSERT INTO department(department_name)
VALUES("dep2");

INSERT INTO department(department_name)
VALUES("dep3");

INSERT INTO department(department_name)
VALUES("dep4");

INSERT INTO department(department_name)
VALUES("dep5");

SELECT * FROM department;

INSERT INTO deprole(title,salary,department_id)
VALUES("sample",5,6);

INSERT INTO deprole(title,salary,department_id)
VALUES("sample2",4,7);

INSERT INTO deprole(title,salary,department_id)
VALUES("sample3",9,8);

SELECT * FROM deprole; 

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("empname","lastname",8,9);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("empname2","lastname2",8,9);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("empname3","lastname3",8,9);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("empname4","lastname4",8,9);



SELECT * FROM employee;
