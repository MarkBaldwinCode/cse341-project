const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');


eShopRoutes
    
    .get('/cart', eshopController.getCart )
    .get('/add-products', eshopController.getAddProducts )
    .post('/add-products', eshopController.postAddProducts)
    .get('/', eshopController.getEshopHome)
    .get('/:productId', eshopController.getProduct);

module.exports = eShopRoutes;