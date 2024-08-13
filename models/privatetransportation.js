const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    spec: String,
    type: String,
    price: String
});

const privatetrans_Info = mongoose.model('privatetransInfo', secondInfoSchema);

module.exports = privatetrans_Info;
