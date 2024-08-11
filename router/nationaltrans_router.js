const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/nationaltransprotation');
router.post('/addnationaltrans',addInfo);
router.get('/getnationaltrans', getInfo);

module.exports = router;