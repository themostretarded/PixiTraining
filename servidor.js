 var express = require('express');
 var app = express();

 app.use(express.static('public'));
 
 app.get('/', function (req, res) {
     
 });


 app.listen(3000, function () {
     console.log("escuchando puerto 3000");
 });