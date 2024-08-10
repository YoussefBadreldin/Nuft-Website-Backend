const express = require('express');
const router = express.Router();
const { getallvisitors } = require('../controller/visitorController'); // Adjust the path as needed

router.get('/getallvisitors', getallvisitors)
module.exports = router;
