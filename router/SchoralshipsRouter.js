const express = require('express');
const router = express();
const {addSchoralships, getSchoralships} = require('../controller/SchoralshipsController');

router.post('/addSchoralships', addSchoralships);
router.get('/getSchoralships', getSchoralships);
module.exports = router;