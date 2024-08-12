const express = require('express');
const router = express.Router();
const {add_specialLinks,getspecialLinks} = require('../controller/speciallinksController');
router.post('/add_speciallinks', add_specialLinks);
router.get('/get_speciallinks', getspecialLinks);
module.exports = router;