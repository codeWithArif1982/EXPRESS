var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/',function(req, res){
    let JSONdata = req.body;
    let JSONSting = JSON.stringify(JSONdata);
    res.send(JSONSting);



})

app.listen(8000, function(){
    console.log("Server is running successfully")
})
