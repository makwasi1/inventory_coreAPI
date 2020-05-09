const db = require("./config/conf");
const User = require("./models/User");

db.once("open",  () => {
    console.log("connected")
})

db.on("error", () => console.log("disconnected"));

const NewUser = new User({
    username: 'jane@gmail.com',
    password: 'expleor',
    firstname: 'jane',
    lastname: 'Zawalngo',
    email: 'jenny@gmail.com'
})

NewUser.save();