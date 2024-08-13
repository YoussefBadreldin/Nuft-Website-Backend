const express = require('express');
const router = express.Router();
const { postprivateAdmission, getprivateAdmission  } = require('../controller/privateadmissionStatus');
router.post('/add', postprivateAdmission);
router.get('/get', getprivateAdmission);

module.exports = router;