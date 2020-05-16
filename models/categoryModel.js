const mongoose = require('mongoose')

const categorySchema = require('./Schemas/categorySchema')

const category = mongoose.model('categories',categorySchema)

module.exports = category