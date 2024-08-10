require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
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

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Visitor schema and model
const visitorSchema = new mongoose.Schema({
  count: Number
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.get('/ab', () => {
    console.log("hello");
});

// API endpoint to get and update visitor count
app.get('/api/visitor-count', async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    res.json({ count: visitor.count });
  } catch (error) {
    console.error('Error fetching/updating visitor count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
