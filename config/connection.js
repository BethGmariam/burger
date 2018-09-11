var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){

    connection = mysql.createConnection(process.env.JAWSDB_URL)

}
else{
connection = mysql.createConnection({

    host:"localhost",
    port:8889,
    user:"root",
    password:"root",// add your password here
    database:"burgers_db"

});

}

connection.connect();



module.exports = connection;