const mongoose = require('mongoose')

//data model
const dataSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    currency: String,
    category: String,
    rating: Number,
    image: String,
});

module.exports = mongoose.model('storeData',dataSchema)