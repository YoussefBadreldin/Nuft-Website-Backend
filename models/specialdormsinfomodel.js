const mongoose = require('mongoose');

const specialdormsSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const specialdorms = mongoose.model('specialdorms', specialdormsSchema);

module.exports = specialdorms;
