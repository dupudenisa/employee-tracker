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


INSERT INTO deprole(title,salary,department_id)
VALUES("sample",1,2);

INSERT INTO deprole(title,salary,department_id)
VALUES("sample2",3,4);

INSERT INTO deprole(title,salary,department_id)
VALUES("sample3",4,5);

INSERT INTO employee(first_name,last_name,role_id,manager_id,department_id)
VALUES("empname","lastname",2,1,1);

INSERT INTO employee(first_name,last_name,role_id,manager_id,department_id)
VALUES("empname2","lastname2",2,1,1);

INSERT INTO employee(first_name,last_name,role_id,manager_id,department_id)
VALUES("empname3","lastname3",2,1,2);

INSERT INTO employee(first_name,last_name,role_id,manager_id,department_id)
VALUES("empname4","lastname4",2,1,3);

