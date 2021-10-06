//TA03 PLACEHOLDER
const path = require('path');
const express = require('express');
const fs = require('fs');

const router = express.Router();
const taController = require('../../controllers/taControllers/ta');

router.get('/', taController.getTA03);
 
module.exports = router;
