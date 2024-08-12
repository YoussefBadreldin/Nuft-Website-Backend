const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String
});

const nationaltrans_Info = mongoose.model('nationaltransInfo', secondInfoSchema);

module.exports = nationaltrans_Info;
