const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');


eShopRoutes
    .get('/cart', eshopController.getCart )
    .get('/add-products', eshopController.getAddProducts )
    .post('/add-products', eshopController.postAddProducts)
    .get('/', eshopController.getEshopHome);

module.exports = eShopRoutes;