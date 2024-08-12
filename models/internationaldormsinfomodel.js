const mongoose = require('mongoose');

const internationaldormsSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const internationaldorms = mongoose.model('internationaldorms', internationaldormsSchema);

module.exports = internationaldorms;
