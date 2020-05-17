const {Schema} = require('mongoose');

const itemsSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    availableStock:{
        type: Number,
        required: true
    },
    belongs:{
        type: Schema.Types.ObjectId,
        ref : 'category'
    }
});


module.exports = itemsSchema;