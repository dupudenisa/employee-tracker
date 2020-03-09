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

    })



}
