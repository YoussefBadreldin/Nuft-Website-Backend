const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const nationaltrans_Info = mongoose.model('nationaltransInfo', secondInfoSchema);

module.exports = nationaltrans_Info;
