var express = require('express');

app= express();

app.get("/", function(req,res){
    res.send("Hello Express Js");
});
app.get("/about", function(req,res){
    res.send("About Page");
});
app.get("/Contact", function(req,res){
    res.send("Contact Page");
});
app.get("/Term", function(req,res){
    res.send("Term Page");
});

app.listen(8000, function(){
    console.log("Server run Success");
})