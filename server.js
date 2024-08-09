require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./router/userRouter');
const international = require('./router/internationalRouter');
const international_Links = require('./router/inter_links_router');
const dorms = require('./router/infoDormsRouter');
const trans = require('./router/trans_router');
const news = require('./router/newsRouter');
const admission = require('./router/admission');
const contact = require('./router/contactRouter');

const app = express();

// CORS middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/auth', authRoutes);
app.use('/faclity', international);
app.use('/links', international_Links);
app.use('/info', dorms);
app.use('/trans', trans);
app.use('/news', news);
app.use('/admission', admission);
app.use('/contact', contact);

// CORS OPTIONS preflight handler
app.options('/auth/signup', cors());

// Export the Express app
module.exports = app;
