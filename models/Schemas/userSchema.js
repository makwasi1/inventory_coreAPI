const {Schema} = require('mongoose')
const UsersSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true
    }
})


module.exports = UsersSchema;