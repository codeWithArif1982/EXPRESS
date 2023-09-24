
var express = require('express');

app= express();

//Simple String Response
//res.send() --> response body
//res.end()--> end of the body
app.get("/one", function(req,res){
    res.send("This is simple string response one");
});

app.post("/two", function(req,res){
    res.end("This is simple string response two");
});

app.get("/three", function(req,res){
   res.status(401).end('Unauthorized');
});

app.listen(8000, function(){
    console.log("Server run Success");
})