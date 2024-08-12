const mongoose = require('mongoose');

const SchoralshipsSchema = new mongoose.Schema({
    text: String,
});

const SchoralshipsModel = mongoose.model('Schoralships', SchoralshipsSchema);

module.exports = SchoralshipsModel;
