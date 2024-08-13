const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/privatedormsinfo');
router.post('/addprivatedorms',addInfo);
router.get('/getprivatedorms', getInfo);

module.exports = router;