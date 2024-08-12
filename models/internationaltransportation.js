const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const internationaltrans_Info = mongoose.model('internationaltransInfo', secondInfoSchema);

module.exports = internationaltrans_Info;
