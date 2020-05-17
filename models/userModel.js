const mongoose = require('mongoose')

const UserSchema = require('./Schemas/userSchema')

const User = mongoose.model('users',UserSchema)

module.exports = User;