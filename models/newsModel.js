const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  news_title: {
    type: String,
    required: true
  },
  news_photo: {
    type: String,
    required: false
  },
  news_day: {
    type: Number,
    min: 1,
    max: 31,
    required: true
  },
  news_month: {
    type: String,
    required: true
  },
  news_year: {
    type: Number,
    min: 1900,
    max: 2099,
    required: true
  },
  news_link: {
    type: String,
    required: true
  },
  news_details: {
    type: String,
    required: false
  }
});

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;
