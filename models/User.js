const mongoose = require("mongoose");
const UserSchema = require("./schemas/UserSchema");

const User = mongoose.model("users", UserSchema);

module.exports = User;