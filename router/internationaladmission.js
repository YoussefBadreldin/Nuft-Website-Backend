const express = require('express');
const router = express.Router();
const { postinternationalAdmission, getinternationalAdmission  } = require('../controller/internationaladmissionStatus');
router.post('/add', postinternationalAdmission);
router.get('/get', getinternationalAdmission);

module.exports = router;