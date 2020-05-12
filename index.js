//import express into your project using the require command 
const express = require('express');
 require('./config')

//define the port number
const port = process.env.PORT||3000;

//create app which is an instance of express
const app = express();



//make the app listen to the server
app.listen(port, function(){
    console.log("Welcome");
})

//server side routing
app.get('../controllers/itemsController',function(req, res){
    res.send('<h1>Purcase item<h1>')
})