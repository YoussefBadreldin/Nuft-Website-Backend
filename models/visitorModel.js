const mongoose = require('mongoose');

// Define the Visitor schema
const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  }
});

// Create the Visitor model
const Visitor = mongoose.model('Visitor', visitorSchema);

module.exports = Visitor;
