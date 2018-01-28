var express = require("express");
var app = express();
var path = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/private/index.html'));
});

app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/private/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8081);

console.log("Running at Port 8081");
