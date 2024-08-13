const express = require('express');
const router = express.Router();
const {addspecialfaculty,deletefaculty,getAllfaculty} = require('../controller/specialController');
router.post('/addspecial', addspecialfaculty);
router.get('/getspecial',getAllfaculty)
router.delete('/deletespecial',deletefaculty);

module.exports = router