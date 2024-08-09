const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env file

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use('/auth', require('./api/auth'));

module.exports = app;
