
var express = require('express');

app= express();


app.get("/seven", function(req,res){
  res.append("name","Chowdhuary");
  res.append("city","Pembroke Pines");
  res.append("age","40 Years olds");
  res.status(201);
  res.send("Hello world");
});

app.listen(8000, function(){
    console.log("Server run Success");
})