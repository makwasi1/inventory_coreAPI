const mongoose = require("mongoose");
const ItemSchema = require("./schemas/ItemSchema");

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;