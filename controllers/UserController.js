const db = require("../config/conf");
const User = require("../models/User");

db.once("open",  () => {
    console.log("connected")
})

db.on("error", () => console.log("disconnected"));

module.exports = {
    Signup: (req, res) => {
        const userName = req.body.username;
        const Password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastname;
        const email = req.body.email;

        User.findOne({ email: email}).then( user => {
            if(user){
                res.status(400).json({ message: "User already exists"})
            } else{
                const NewUser = new User({
                    username: userName,
                    password: Password,
                    firstname: firstName,
                    lastname: lastName,
                    email: email
                });
                NewUser.save()
                    .then( saved => {
                        console.log("New user Saved", saved);
                        return res.status(200).json({message:"save was sucessful"})
                    })
                    .catch( error => {
                        console.log("error saving new user");
                        return res.status(400).json({message: "error occured"})
                    })
            }
        })
    },
    logIn: (req, res) =>{
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({username: username, password: password}).then( loged => {
            if(loged){
                console.log("login successfully", loged);
                return res.status(200).json({message: "yeah your login!"})
            }else{
                return res.status(400).json({message: "No such User exists!"})
            }
        })
        .catch( error => {
            console.log("access denied", error);
            return res.status(400).json({message: "access denied"})
        })
    }
};

 