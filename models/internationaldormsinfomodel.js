const mongoose = require('mongoose');

const internationaldormsSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String 
});

const internationaldorms = mongoose.model('internationaldorms', internationaldormsSchema);

module.exports = internationaldorms;
