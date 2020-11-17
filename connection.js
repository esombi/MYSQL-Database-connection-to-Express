const mysql = require('mysql');

var con = mysql.createConnection ({
    host:"localhost",
    user: "root",
    password: "root",
    multipleStatements: true
});

con.connect(function(err) {
    if(err) 
        throw err;
    console.log("Connected to database");
    con.query("CREATE DATABASE IF NOT EXISTS crudNode", function(err, result){
        if(err)
            throw err;
        console.log("Database Created");
    });
});

module.exports = con;