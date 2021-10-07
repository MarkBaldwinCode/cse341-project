const proveRoutes = require('express').Router()


proveRoutes
    .use('/prove02AddProduct', require('./prove02AddProduct'))
    .use('/prove02Shop', require('./prove02Shop'))
    .use('/prove03', require('./prove03'))
    .use('/prove04', require('./prove04'))
    .get('/', (req, res, next) => {
        res.render('pages/proveActivities/', {
            pageTitle: 'Prove Activities',
            path: '/proveActivities'});
    });

module.exports = proveRoutes;