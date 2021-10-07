//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const taController = require('../../controllers/taControllers/ta');

router.get('/', taController.getTA04);


module.exports = router;
