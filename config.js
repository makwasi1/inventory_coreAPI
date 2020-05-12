//connecting to mongodb database
//import the mongoose module
var mongoose = require('mongoose');

//set up default mongoose connection
var mongodb = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true});

//get default connection
var db = mongoose.connection;

//Bind connection to error event(to get notification of connection errors)
db.on('error',console.error.bind(console,'MongoDB connection error:'));
