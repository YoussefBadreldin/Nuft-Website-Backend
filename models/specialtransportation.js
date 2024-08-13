const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String
});

const specialtrans_Info = mongoose.model('specialtransInfo', secondInfoSchema);

module.exports = specialtrans_Info;
