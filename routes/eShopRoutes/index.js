const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');


eShopRoutes
    
    .get('/cart', eshopController.getCart )
    .get('/add-products', eshopController.getAddProducts )
    .post('/add-products', eshopController.postAddProducts)
    .get('/', eshopController.getEshopHome)
    .get('/product-details', eshopController.getProductDetails)
    .get('/edit-product/:productId', eshopController.getEditProduct)
    .post('/edit-product', eshopController.postEditProduct)
    .get('/:productId', eshopController.getProduct);

module.exports = eShopRoutes;