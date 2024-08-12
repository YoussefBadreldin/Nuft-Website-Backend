const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/specialdormsinfo');
router.post('/addspecialdorms',addInfo);
router.get('/getspecialdorms', getInfo);

module.exports = router;