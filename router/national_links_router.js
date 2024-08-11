const express = require('express');
const router = express.Router();
const {add_nationalLinks,getnationalLinks} = require('../controller/nationallinksController');
router.post('/add_nationallinks', add_nationalLinks);
router.get('/get_nationallinks', getnationalLinks);
module.exports = router;