const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const specialtrans_Info = mongoose.model('specialtransInfo', secondInfoSchema);

module.exports = specialtrans_Info;
