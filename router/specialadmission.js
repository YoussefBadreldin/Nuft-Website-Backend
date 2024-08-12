const express = require('express');
const router = express.Router();
const { postspecialAdmission, getspecialAdmission  } = require('../controller/specialadmissionStatus');
router.post('/add', postspecialAdmission);
router.get('/get', getspecialAdmission);

module.exports = router;