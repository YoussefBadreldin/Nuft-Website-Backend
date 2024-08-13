const express = require('express');
const router = express.Router();
const {addinternationalfaculty,deletefaculty,getAllfaculty} = require('../controller/internationalController');
router.post('/addinternational', addinternationalfaculty);
router.get('/getinternational',getAllfaculty)
router.delete('/deleteinternational',deletefaculty);

module.exports = router