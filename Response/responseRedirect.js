
var express = require('express');

app= express();


app.get("/Bangladesh", function(req,res){
  res.redirect("http://localhost:8000/USA");
});
app.get("/USA", function(req,res){
 res.send("This is USA");
});

app.listen(8000, function(){
    console.log("Server run Success");
})