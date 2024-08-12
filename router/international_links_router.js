const express = require('express');
const router = express.Router();
const {add_internationalLinks,getinternationalLinks} = require('../controller/internationallinksController');
router.post('/add_internationallinks', add_internationalLinks);
router.get('/get_internationallinks', getinternationalLinks);
module.exports = router;