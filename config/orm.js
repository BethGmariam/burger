const connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

var orm = {

    selectAll:function(tableName,cb){

        var queryString="SELECT * FROM " +tableName + ";";

        connection.query(queryString,function(err,result){
            if(err) throw err;
            cb(result);
            // console.log(result);
        })

    },
    insertOne:function(tableName,colToUse,valOfCol,cb){
        var queryString = "INSERT INTO " + tableName; 
        queryString += " (";
        queryString += colToUse.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(valOfCol.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString,valOfCol,function(err,result){
            if(err) throw err;
            cb(result);
        })

},

updateOne: function(burgerId, cb){
    var queryString="UPDATE burgers SET ? WHERE ?"
    connection.query(queryString, [{devoured: true}, {id: burgerId}], function (err, result) {
        if (err) throw err;
        cb(result);
      });

}

}

module.exports = orm;