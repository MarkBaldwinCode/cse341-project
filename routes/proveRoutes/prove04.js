//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const prove04Controller = require('../../controllers/proveControllers/prove04');

router.get('/', prove04Controller.getProve04);


module.exports = router;