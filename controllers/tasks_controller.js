var express = require("express"),
    router = express.Router(),
    tasks = require("../models/tasks.js");

// create the router for the app

router.get("/", function(req,res){
    tasks.selectAll(function(data){
        var dickButt = {
            tasks: data
        };
        console.log(dickButt);
        res.render("index", dickButt);
    });
});

router.post("/", function(req,res){
    tasks.insertOne(req.param.task, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req,res) {
    tasks.updateOne(req.params.id, function(){
        res.redirect("/");
    });
});

module.exports = router;





// export the router 

