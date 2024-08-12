const express = require('express');
const router = express.Router();
const {addinternationalFacility,deleteFacility,getAllfacilities} = require('../controller/internationalController');
router.post('/addinternational', addinternationalFacility);
router.get('/getinternational',getAllfacilities)
router.delete('/deleteinternational',deleteFacility);

module.exports = router