const express = require('express');
const router = express.Router();
const {addprivateFacility,deleteFacility,getAllfacilities} = require('../controller/privateController');
router.post('/addprivate', addprivateFacility);
router.get('/getprivate',getAllfacilities)
router.delete('/deleteprivate',deleteFacility);

module.exports = router