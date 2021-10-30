const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');


eShopRoutes
    .get('/login', eshopController.getLogin)
    .post('/login', eshopController.postLogin)
    .get('/sign-up', eshopController.getSignUp)
    .post('/sign-up',eshopController.postSignUp)
    .post('/logout', eshopController.postLogout)
    .get('/cart', eshopController.getCart )
    .post('/cart', eshopController.postCart)
    .post('/cart-delete-item',eshopController.postCartDeleteProduct)
    .get('/add-products', eshopController.getAddProducts )
    .post('/add-products', eshopController.postAddProducts)
    .get('/', eshopController.getEshopHome)
    .get('/product-details', eshopController.getProductDetails)
    .get('/edit-product/:productId', eshopController.getEditProduct)
    .post('/edit-product/:productId', eshopController.postEditProduct)
    .get('/:productId', eshopController.getProduct)
    .post('/delete-product/:productId', eshopController.postDeleteProduct)
    .post('/create-order', eshopController.postOrder)
    .get('/orders', eshopController.getOrder);
    

module.exports = eShopRoutes;