const db = require('../config/conf');
const catgory = require('../models/Category.js');

db.once("open", () => {
    console.log("In category successful");
    
})
db.on("error", () =>{
    console.log("error logging to category");
})

module.exports = {
    Category: (req, res) => {
       catgory.find({}).then( category => {
            console.log("Successfully retervied", category);
            return res.status(200).json({message: "found all categories"})
       })
       .catch( error => {
           console.log("error occured")
           return res.status(400).json({message: "error"})
       }
       )
    },
    SpecifiyCategory: (req, res) => {
        catgory.findById(req.params.id)
        .then(doc => {
            if(!doc){
                return res.status(400).end()
            }else{
                return res.status(200).json(doc)
            }
        })
        .catch( err => console.log("error")
        )
}
}