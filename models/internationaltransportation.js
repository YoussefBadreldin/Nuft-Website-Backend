const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String
});

const internationaltrans_Info = mongoose.model('internationaltransInfo', secondInfoSchema);

module.exports = internationaltrans_Info;
