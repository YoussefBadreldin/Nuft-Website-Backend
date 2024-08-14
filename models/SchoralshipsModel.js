const mongoose = require('mongoose');

const SchoralshipsSchema = new mongoose.Schema({
     scholarship_title: {
    type: String,
    required: true
  },
  scholarship_details: {
    type: String,
    required: true
  },
  scholarship_photo: {
    type: String,
    required: false
  },
  scholarship_type: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  scholarship_link: {
    type: String,
    required: true
  }
});

const SchoralshipsModel = mongoose.model('Schoralships', SchoralshipsSchema);

module.exports = SchoralshipsModel;
