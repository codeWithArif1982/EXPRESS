
var express = require('express');

app= express();


app.get("/eight", function(req,res){
  res.cookie("name","Chowdhuary");
  res.cookie("city","Pembroke Pines");
  res.cookie("age","40 Years olds");
  res.end("Cookie set success");
});

app.listen(8000, function(){
    console.log("Server run Success");
})