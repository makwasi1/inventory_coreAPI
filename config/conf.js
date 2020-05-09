const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/Inventory", {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("success");
    
})
.catch((error) => {
    console.log("failed");
    
})

const db = mongoose.connection;

module.exports = db;