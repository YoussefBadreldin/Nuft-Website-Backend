const express = require('express');
const router = express.Router();
const { postnationalAdmission, getnationalAdmission  } = require('../controller/nationaladmissionStatus');
router.post('/add', postnationalAdmission);
router.get('/get', getnationalAdmission);

module.exports = router;