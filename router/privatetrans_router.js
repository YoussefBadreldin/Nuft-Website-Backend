const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/privatetransprotation');
router.post('/addprivatetrans',addInfo);
router.get('/getprivatetrans', getInfo);

module.exports = router;