const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const privatetrans_Info = mongoose.model('privatetransInfo', secondInfoSchema);

module.exports = privatetrans_Info;
