const mongoose = require('mongoose');

const privatedormsSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String 
});

const privatedorms = mongoose.model('privatedorms', privatedormsSchema);

module.exports = privatedorms;
