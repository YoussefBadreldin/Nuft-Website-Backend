const express = require('express');
const router = express.Router();
const {addnationalFacility,deleteFacility,getAllfacilities} = require('../controller/nationalController');
router.post('/addnational', addnationalFacility);
router.get('/getnational',getAllfacilities)
router.delete('/deletenational',deleteFacility);

module.exports = router