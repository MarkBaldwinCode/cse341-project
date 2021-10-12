const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');


eShopRoutes
    .get('/cart', eshopController.getCart )
    .get('/add-products', eshopController.getAddProducts )
    .get('/', eshopController.getEshopHome);

module.exports = eShopRoutes;