const mongoose = require("mongoose");
const CatergorySchema = require("./schemas/CatergorySchema");

const Catergory = mongoose.model("catergory", CatergorySchema);

module.exports = Catergory;