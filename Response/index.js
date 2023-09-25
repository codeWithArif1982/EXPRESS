var express = require('express');

app= express();

app.get("/", function(req,res){
    res.send("Hello Express Js");
});
app.post("/about", function(req,res){
    res.send("About Page");
});
app.put("/Contact", function(req,res){
    res.send("Contact Page");
});
app.delete("/Term", function(req,res){
    res.send("Term Page");
});

app.listen(8000, function(){
    console.log("Server run Success");
})