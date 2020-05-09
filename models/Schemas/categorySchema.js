const {Schema} = require('mongoose')

const CategoriesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    desccription:{
        type: String,
        required:true
    }
})

module.exports = CategoriesSchema;

const {Schema} = require('mongoose');
