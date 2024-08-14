const mongoose = require('mongoose');

const ScholarshipsSchema = new mongoose.Schema({
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
      type: String,
      required: true
    },
    scholarship_link: {
        type: String,
        required: true
    }
});

const ScholarshipsModel = mongoose.model('Scholarships', ScholarshipsSchema);

module.exports = ScholarshipsModel;
