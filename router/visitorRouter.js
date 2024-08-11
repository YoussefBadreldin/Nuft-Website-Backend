const express = require('express');
const router = express.Router();
const { getVisitorCount } = require('../controller/visitorController'); // Adjusted path

// Define the route to get and update the visitor count
router.get('/visitor-count', getVisitorCount);

module.exports = router;
