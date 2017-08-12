var express = require("express"),
    router = express.Router(),
    tasks = require("../models/tasks.js");

// create the router for the app

router.get("/", function(req,res){
    tasks.selectAll(function(data){
        var hbsObject = {
            tasks: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req,res){
    tasks.insertOne(req.body.taskinput, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req,res) {
    tasks.updateOne(req.body.completed,req.params.id, function(){
        res.redirect("/");
    });
});

module.exports = router;





// export the router 

