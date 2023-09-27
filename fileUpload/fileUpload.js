var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null, '../uploads');
    },
    filename:function(req,file,callback){
        callback(null,file.originalname);
    }
});

var upload = multer({storage:storage}).single('myfile');

app.post('/',function(req,res){
    upload(req,res,function(err){
        if(err){
            res.send("File upload fail")
        }
        else{
            res.send("File upload success");
        }
    })
});

app.listen(8000, function(){
    console.log("Server is ready for upload");
})