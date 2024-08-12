const express = require('express');
const router = express.Router();
const {addspecialFacility,deleteFacility,getAllfacilities} = require('../controller/specialController');
router.post('/addspecial', addspecialFacility);
router.get('/getspecial',getAllfacilities)
router.delete('/deletespecial',deleteFacility);

module.exports = router