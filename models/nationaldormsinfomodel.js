const mongoose = require('mongoose');

const nationaldormsSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String 
});

const nationaldorms = mongoose.model('nationaldorms', nationaldormsSchema);

module.exports = nationaldorms;
