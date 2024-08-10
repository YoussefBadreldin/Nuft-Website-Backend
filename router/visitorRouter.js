const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// Define route to get and update visitor count
router.get('/visitor-count', visitorController.getVisitorCount);

module.exports = router;
