
var express = require('express');

app= express();


app.get("/five", function(req,res){
   res.download("../uploads/Ayat Birthday.jpeg"); 
   
});

app.listen(8000, function(){
    console.log("Server run Success");
})