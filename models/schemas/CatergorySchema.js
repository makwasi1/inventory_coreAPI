const { Schema } = require("mongoose");

const CatergorySchema = new Schema({
    catergoryname: {
        type: String,
        required: true
    },
    catergorydescription: {
        type: String,
        required: true
    } 
});

module.exports = CatergorySchema;