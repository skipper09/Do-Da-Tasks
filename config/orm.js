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
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, result){
            if (err) {
                throw err;
            }
            cb (result);
        });
    },
    updateOne: function(table, col1, val1, col2, val2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result){
            if (err) {
                throw err;
            };
            cb(result)
        })
    }
}

// orm.selectAll("tasks", function(err, result){})
// orm.insertOne("tasks", "task_name", "Drink wine", function(err, result){});
// orm.updateOne("tasks", "complete", false, "id", 9, function(err,result){});

module.exports = orm;