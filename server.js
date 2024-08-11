require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./router/userRouter');
const news = require('./router/newsRouter');
const contact = require('./router/contactRouter');
const national = require('./router/nationalRouter');
const national_Links = require('./router/national_links_router');
const nationaldorms = require('./router/nationalinfoDormsRouter');
const nationaltrans = require('./router/nationaltrans_router');
const nationaladmission = require('./router/nationaladmission');
const private = require('./router/privateRouter');
const private_Links = require('./router/private_links_router');
const privatedorms = require('./router/privateinfoDormsRouter');
const privatetrans = require('./router/privatetrans_router');
const privateadmission = require('./router/privateadmission');
const visitorRouter = require('./router/visitorRouter'); // Adjusted path


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

// API endpoint to get and update visitor count
app.use('/api', visitorRouter); // Use the visitorRouter for the /api routes

// Routes
app.use('/auth', authRoutes);
app.use('/news', news);
app.use('/contact', contact);
app.use('/nationalfaclity', national);
app.use('/nationallinks', national_Links);
app.use('/nationaldorms', nationaldorms);
app.use('/nationaltrans', nationaltrans);
app.use('/nationaladmission', nationaladmission);
app.use('/privatefaclity', private);
app.use('/privatelinks', private_Links);
app.use('/privatedorms', privatedorms);
app.use('/privatetrans', privatetrans);
app.use('/privateadmission', privateadmission);


// CORS OPTIONS preflight handler
app.options('/auth/signup', cors());

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
