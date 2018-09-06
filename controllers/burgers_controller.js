
const express = require("express");
const router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(err,res){
    burgers.selectAll(function(data){
        var hbsObj = {
            burgers:data
        }
        res.render("index",hbsObj);
    })
});

router.get("/index", function(err,res){
    burgers.selectAll(function(data){
        var hbsObj = {
            burgers:data
        }
        res.render("index",hbsObj);
    })
});

router.post("/burgers/create", function(req, res) {
    burgers.insertOne(["burger_name","devoured"], [req.body.burgerName,false], function(result) {
            // res.json({ id: result.insertId });
            res.redirect("/index");
   
    });

router.post('/burgers/devour/:id', function (req, res) {
    burgers.updateOne(req.params.id, function() {
        // res.json({ id: result.changedRows });
        res.redirect("/index");

    });
    });
});
  


module.exports = router;