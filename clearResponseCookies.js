
var express = require('express');

app= express();


app.get("/nine", function(req,res){
  res.cookie("name","Chowdhuary");
  res.cookie("city","Pembroke Pines");
  res.cookie("age","40 Years olds");
  res.clearCookie("name");
  res.clearCookie("age")
  res.end("Cookie clear success");
});

app.listen(8000, function(){
    console.log("Server run Success");
})