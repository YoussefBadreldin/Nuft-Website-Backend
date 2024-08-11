const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/nationaldormsinfo');
router.post('/addnationaldorms',addInfo);
router.get('/getnationaldorms', getInfo);

module.exports = router;