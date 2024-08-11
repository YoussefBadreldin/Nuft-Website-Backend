const mongoose = require('mongoose');

const privatedormsSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const privatedorms = mongoose.model('privatedorms', privatedormsSchema);

module.exports = privatedorms;
