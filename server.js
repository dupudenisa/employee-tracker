const inquirer = require("inquirer")
const mysql = require("mysql")

var PORT = process.env.PORT || 3000;

const num = 0;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_tracker"
})


connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

});

function promptFunc(num){

    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "question",
                choices: ["Add departments","Add roles","Add employees", "View departments","View roles","View employees", "Update departments"]
            }
        

    ]).then(function(response){
        console.log(response.question);
            switch (response.question) {
                case "Add departments" :
                    
                    inquirer.prompt([
                        {
                            type: "list",
                            message: "What department would you like to add?",
                            name: "departments",
                            choices: ["sales","marketing","it"]
                        }

                    ]).then(function(response){
                        var sql = "INSERT INTO department (department_name) VALUES ('" + response.departments + "')";
                        connection.query(sql,function(err,res) {
                            if (err) throw err;
                            console.log("department record inserted");
                        })
                    })
                    num = 0;
                break;
                    
                case "Add roles" :
                    
                    inquirer.prompt([
                        {
                            type: "list",
                            message: "What role would you like to add?",
                            name: "roles",
                            choices: ["CEO","CFO","Manager"]
                        }

                    ]).then(function(response){
                        var sql = "INSERT INTO deprole (title, salary, department_id) VALUES ('" + response.roles + "', 1.00, 1)";
                        connection.query(sql,function(err,res) {
                            if (err) throw err;
                            console.log("role record inserted");
                        })
                    })
                    num = 0;
                    break;

                case "Add employees":
                    
                    inquirer.prompt([
                        {
                            type:"message",
                            message: "What is the first name of your employee?",
                            name: "firstname",
                           
                        },
                        {
                            type: "message",
                            message: "What is the last name of your employee?",
                            name: "lastname",
                        },
                        {
                            type: "message",
                            message: "What is the role of your employee?",
                            name: "role",
                            //choices: ["CEO","CFO","Manager"]
                        },
                        {
                            type: "message",
                            message: "What is the manager of the employee?",
                            name:"manager",
                        },
                        {
                            type: "message",
                            message: "what department is your employee in?",
                            name: "dep",
                            //choices: ["sale0s","marketing","it"]
                        },
                    ]).then(function(response){

                        var sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id) VALUES ('" + response.firstname + "', '" + response.lastname + "','" + response.dep + "', '" + response.manager + "','" + response.dep + "')";


                        connection.query(sql,function(err,res) {
                            if (err) throw err;
                            console.log("employee record inserted");
                        })

                    })

                    num = 0;
                    break;

                case "View departments":
                    
                
                    var sql = "SELECT * FROM department";

                    connection.query(sql,function(err,res) {
                        if (err) throw err;
                        console.table(res);
                    })
                    break;
                case "View roles":
                    
                    var sql = "SELECT * FROM deprole";

                    connection.query(sql,function(err,res) {
                        if (err) throw err;
                        console.table(res);
                    })
                    num = 0;
                    break;

                case "View employees":
                    

                    var sql = "SELECT * FROM employee";

                        connection.query(sql,function(err,res) {
                            if (err) throw err;
                            console.table(res);
                        })
                    num= 0; 
                    break;

                case "update employee roles":
                    
                    connection.query("", function(err,res){
    
                    })
                    num = 0; 
                    break;
    
                    
                case "Done":
                {
                    num = 1;
                }
    
                default: 
                    num = 0; 
                break;
                
            }
            
            
        

    })
    
}

/*
trying to make prompt reset every time prompt is awnsered 

function promptReset(num){
    while(num != 1)
    {
        promptFunc(num);
    }
}
*/

promptFunc(num);

