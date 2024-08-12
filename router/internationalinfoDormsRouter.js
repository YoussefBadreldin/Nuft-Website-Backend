const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/internationaldormsinfo');
router.post('/addinternationaldorms',addInfo);
router.get('/getinternationaldorms', getInfo);

module.exports = router;