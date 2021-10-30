const eShopRoutes = require('express').Router()
const eshopController = require('../../controllers/eshopControllers/eshopController');
const isAuth = require('../../middleware/is-Auth');

eShopRoutes
    .get('/login',  eshopController.getLogin)
    .post('/login', eshopController.postLogin)
    .get('/sign-up', eshopController.getSignUp)
    .post('/sign-up',eshopController.postSignUp)
    .post('/logout', isAuth, eshopController.postLogout)
    .get('/cart', isAuth, eshopController.getCart )
    .post('/cart',isAuth, eshopController.postCart)
    .post('/cart-delete-item', isAuth, eshopController.postCartDeleteProduct)
    .get('/add-products', isAuth, eshopController.getAddProducts )
    .post('/add-products', isAuth, eshopController.postAddProducts)
    .get('/', eshopController.getEshopHome)
    .get('/product-details', eshopController.getProductDetails)
    .get('/edit-product/:productId', isAuth, eshopController.getEditProduct)
    .post('/edit-product/:productId', isAuth, eshopController.postEditProduct)
    .get('/:productId', eshopController.getProduct)
    .post('/delete-product/:productId', isAuth, eshopController.postDeleteProduct)
    .post('/create-order', isAuth, eshopController.postOrder)
    .get('/orders', isAuth, eshopController.getOrder);
    

module.exports = eShopRoutes;