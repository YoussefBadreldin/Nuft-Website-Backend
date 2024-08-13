const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/specialtransprotation');
router.post('/addspecialtrans',addInfo);
router.get('/getspecialtrans', getInfo);

module.exports = router;