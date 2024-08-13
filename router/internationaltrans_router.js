const express = require('express');
const router = express.Router();
const {addInfo , getInfo } = require('../controller/internationaltransprotation');
router.post('/addinternationaltrans',addInfo);
router.get('/getinternationaltrans', getInfo);

module.exports = router;