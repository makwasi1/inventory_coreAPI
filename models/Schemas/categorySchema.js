const {Schema} = require('mongoose')

const CategoriesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref : 'items'
    }]
})

module.exports = CategoriesSchema;

