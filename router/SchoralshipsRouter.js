const express = require('express');
const router = express.Router(); // Corrected here
const { addScholarships, getScholarships } = require('../controller/ScholarshipsController'); // Make sure this path is correct

// Define routes
router.post('/add', addScholarships); // Adjusted endpoint path
router.get('/all', getScholarships);  // Adjusted endpoint path

module.exports = router;
