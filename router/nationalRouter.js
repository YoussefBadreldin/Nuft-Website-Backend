const express = require('express');
const router = express.Router();
const {addnationalfaculty,deletefaculty,getAllfaculty} = require('../controller/nationalController');
router.post('/addnational', addnationalfaculty);
router.get('/getnational',getAllfaculty)
router.delete('/deletenational',deletefaculty);

module.exports = router