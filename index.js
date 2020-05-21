//import express into your project using the require command 
const express = require('express');
const bodyParser = require('body-parser')
const catRouter = require('./routes/catRouter')
const itemRouter = require('./routes/itemsRouter')
const userRouter = require('./routes/routers')
 require('./config')

//define the port number
const port = process.env.PORT|| 5454;


//create app which is an instance of express
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//middlewares
app.use('/api/v1/auth',userRouter)
app.use('/api/v1',catRouter)
app.use('/inventory',itemRouter)

//make the app listen to the server
app.listen(port, function(){
    console.log(`Welcome listening on port ${port}`);
})

