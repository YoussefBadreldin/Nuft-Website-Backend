const express = require('express');
const router = express.Router();
const {add_privateLinks,getprivateLinks} = require('../controller/privatelinksController');
router.post('/add_privatelinks', add_privateLinks);
router.get('/get_privatelinks', getprivateLinks);
module.exports = router;