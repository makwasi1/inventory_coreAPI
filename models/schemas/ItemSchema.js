const { Schema } = require("mongoose");

const ItemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    }
});

module.exports = ItemSchema;