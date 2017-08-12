var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err
            };
            cb(result);
            // console.log(result);
        });
    },
    selectOne: function(table, val, cb) {
        var queryString = "SELECT ?? FROM " + table 
        connection.query(queryString, [val], function(err, result){
            if (err) {
                throw err
            }; 
            cb(result);
        })
    },
    insertOne: function(table, col, val, cb) {
        // console.log(val);
        var queryString = "INSERT INTO ?? (??) VALUES (?) ";
        connection.query(queryString, [table, col, val], function(err, result){
            if (err) {
                throw err;
            }
            cb (result);
        });
    },
    updateOne: function(table, col1, val1, col2, val2, cb) {
        // console.log(val1, val2)
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result){
            if (err) {
                throw err;
            };
            cb(result)
        })
    }
}

module.exports = orm;