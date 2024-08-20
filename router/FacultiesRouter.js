const express = require('express');
const router = express.Router();
const {addFacultiesfaculty,deletefaculty,getAllfaculty} = require('../controller/FacultiesController');
router.post('/addFaculties', addFacultiesfaculty);
router.get('/getFaculties',getAllfaculty)
router.delete('/deleteFaculties',deletefaculty);

module.exports = router