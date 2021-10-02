const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');


// /admin/add-product => GET
router.get('/add-products', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-products', productsController.postAddProduct);

module.exports = router;