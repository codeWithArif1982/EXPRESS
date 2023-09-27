var express = require('express');
var app = express();

app.use('/about',function(req,res,sd){
console.log("I am route level middleware")
sd();
});

app.get('/',function(req,res){
    res.send("This is home page");
    console.log("This is home page");
});

app.get('/contact',function(req, res){
    res.send("This is contact page");
    console.log("This is contact page");
});

app.get('/about',function(req, res){
    res.send("This is about page");
    console.log("This is about page");
});


app.listen(8000, function(){
    console.log("Server is running on port 8000");
})