const db = require("../config");
const User = require("../models/userModel");
const {registerValidation} = require('../helpers/validation')


db.once("open",  () => {
    console.log("connected")
})

db.on("error", () => console.log("disconnected"));

module.exports = {
    Signup: async (req, res) => {
        const {error} = registerValidation(req.body)
        if(error) return res.status(400).send(error.details[0].message);

        const emailExists = await User.findOne({email: req.body.email});
        if(emailExists) return res.status(200).send("email already exists")

        const Users =  new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
        });
        try{
            const savedUser = await Users.save();
            res.send(savedUser)
        }catch (err) {
            res.status(400).send(err);
        }

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
