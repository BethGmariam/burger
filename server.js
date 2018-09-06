const express = require("express");
const bodyParser = require("body-parser");
const app=express();

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

// Import routes and give the server access to them.
var router=require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
})
