const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('Hello from Auth!');
});

module.exports = router;
