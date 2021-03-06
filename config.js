//connecting to mongodb database
//import the mongoose module
var mongoose = require('mongoose');
require("dotenv").config();


//set up default mongoose connection
var mongodb = process.env.URL;
mongoose.connect(mongodb, {useNewUrlParser: true,useUnifiedTopology:true});

//get default connection
var db = mongoose.connection;

//Bind connection to error event(to get notification of connection errors)
db.once("open",()=>{
    console.log('Connection successful')
})

db.on("error",()=>{
    console.log('Connection failed')
})

module.exports = db;