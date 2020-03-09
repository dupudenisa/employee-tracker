USE employee_tracker;

INSERT INTO department(department_name)
VALUES("sample");

SELECT * FROM department;


INSERT INTO deprole(roletitle,title,salary,department_id)
VALUES("sample","sample",5,6);

SELECT * FROM deprole; 

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("sample","sample",8,9);

SELECT * FROM employee;
