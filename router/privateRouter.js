const express = require('express');
const router = express.Router();
const {addprivatefaculty,deletefaculty,getAllfaculty} = require('../controller/privateController');
router.post('/addprivate', addprivatefaculty);
router.get('/getprivate',getAllfaculty)
router.delete('/deleteprivate',deletefaculty);

module.exports = router