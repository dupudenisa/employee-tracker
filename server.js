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

function promptFunc(teams){

    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "question",
                choices: ["Add departments", "View departments", "Update departments"]
            }
        

    ]).then(function(response){
        console.log(response.question){
            switch (response.question) {
                case "add departments" :
                    console.log("add departments");
                    connection.query("SELECT * FROM department JOIN deprole on department.id = deprole.department_id",function(err,res) {
                            
                    })
                break;

                case "add roles" :
                    console.log("add roles");
                    connection.query(" SELECT * FROM deprole JOIN on ", function(err,res){
                        
                    })
                    break;

                case "add employees":
                    console.log("add employees");
                    connection.query("", function(err,res){

                    })
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
            
        }

    })
}
      
