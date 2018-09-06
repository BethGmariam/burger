
const express = require("express");
const router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function (req, res, next) {
    res.render('index', {layout: false});
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
      // Send back the ID of the new quote
            res.json({ id: result.insertId });
   
    });

router.post('/burgers/devour/:id', function (req, res) {
    burgers.updateOne(req.params.id, function() {
        res.json({ id: result.insertId });
        res.redirect("/index");

    });
    });
});
  


module.exports = router;