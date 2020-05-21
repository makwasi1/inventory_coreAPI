//connecting to mongodb database
//import the mongoose module
var mongoose = require('mongoose');
require("dotenv").config();


//set up default mongoose connection
var mongodb = process.env.URL;
mongoose.connect(mongodb, {useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false});

//get default connection
var db = mongoose.connection;
const mongoDB = process.env.MONGO_URI || db 

//Bind connection to error event(to get notification of connection errors)
db.once("open",()=>{
    console.log('Connection successful')
})

db.on("error",()=>{
    console.log('Connection failed')
})

module.exports = mongoDB;