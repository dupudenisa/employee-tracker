const inquirer = require("inquirer")
const mysql = require("mysql")

var PORT = process.env.PORT || 3000;

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

function promptFunc(){

    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "question",
                choices: ["Add roles", "View departments", "Update departments"]
            }
        

    ]).then(function(response){
        console.log(response.question);
            switch (response.question) {
                case "Add departments" :
                    console.log("add departments");
                    
                break;
                    
                case "Add roles" :
                    console.log("Add roles");
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
                    
                    break;

                case "add employees":
                    console.log("add employees");
                    inquirer.prompt([
                        {
                            type:"list",
                            message: "What is the first name of your employee?",
                            name: "firstname",
                           
                        },
                        {
                            type: "list",
                            message: "What is the last name of your employee?",
                            name: "lastname",
                        },
                        {
                            type: "list",
                            message: "What is the role of your employee?",
                            name: "role",
                        },
                        {
                            type: "list",
                            message: "What is the manager of the employee?",
                            name:"manager",
                        },
                        {
                            type: "list",
                            message: "what department is your employee in?",
                            name: "dep",
                        },
                    ])

                    
                    break;

                case "view departments":
                    console.log("view departments");
                    connection.query("", function(err,res){
    
                     })
                    break;
                case "view roles":
                    console.log("view roles");
                    connection.query("", function(err,res){
    
                    })
                    break;

                case "view employees":
                    console.log("view employees");
                    connection.query("", function(err,res){

                    })
                    break;

                case "update employee roles":
                    console.log("update employee roles");
                    connection.query("", function(err,res){
    
                    })
                    break;
    
    
    
                default: 
                    {
                        if(err){
                            throw err;
                        }
                    }
                break;
                
            }
            
        

    })
}
      
promptFunc();
