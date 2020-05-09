const mongoose = require('mongoose')

const itemsSchema = require('./Schemas/itemsSchema')

const items = mongoose.model('items',itemsSchema)

module.exports = items