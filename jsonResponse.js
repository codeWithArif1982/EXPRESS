
var express = require('express');

app= express();


app.get("/four", function(req,res){
    let MyJSONArray =[
        {
        name : "Arif",
        city : "Pembroke Pines",
        occupation : "Developer",
        age : 40
    },
    {
        name : "Ashraf",
        city : "Chiba",
        occupation : "Engineer",
        age : 38
    },
    {
        name : "Ajgar",
        city : "Dhaka",
        occupation : "Businessman",
        age : 35
    }
    ]
   res.json(MyJSONArray);
});

app.listen(8000, function(){
    console.log("Server run Success");
})