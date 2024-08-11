const mongoose = require('mongoose');

const nationaldormsSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const nationaldorms = mongoose.model('nationaldorms', nationaldormsSchema);

module.exports = nationaldorms;
