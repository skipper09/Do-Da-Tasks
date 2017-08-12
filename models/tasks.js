var orm = require("../config/orm.js");


var tasks = {
    selectAll: function(cb) {
        orm.selectAll("tasks", function(res) {
            cb(res);
            // console.log(result);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("tasks", "task_name", val, function(res) {
            cb(res)
        });

    },
    updateOne: function(val1, val2, cb) {
        var toggle = req.body.incomplete;
        orm.updateOne("tasks", "complete", toggle, "id", val2, function(res){
            cb(res);
        });
    }
}

module.exports = tasks;


// tasks.selectAll(function(result){});