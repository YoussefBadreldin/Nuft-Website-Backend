const mongoose = require('mongoose');

const specialdormsSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String 
});

const specialdorms = mongoose.model('specialdorms', specialdormsSchema);

module.exports = specialdorms;
