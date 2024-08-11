require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./router/userRouter');
const national = require('./router/nationalRouter');
const national_Links = require('./router/national_links_router');
const nationaldorms = require('./router/nationalinfoDormsRouter');
const nationaltrans = require('./router/nationaltrans_router');
const news = require('./router/newsRouter');
const nationaladmission = require('./router/nationaladmission');
const contact = require('./router/contactRouter');

app.use(cors());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.get('/ab', () => {
    console.log("hello");
});

// Routes
app.use('/auth', authRoutes);
app.use('/nationalfaclity', national);
app.use('/nationallinks', national_Links);
app.use('/nationaldorms', nationaldorms);
app.use('/nationaltrans', nationaltrans);
app.use('/news', news);
app.use('/nationaladmission', nationaladmission);
app.use('/contact', contact);

// CORS OPTIONS preflight handler
app.options('/auth/signup', cors());

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
