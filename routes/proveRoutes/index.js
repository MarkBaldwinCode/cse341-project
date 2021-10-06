const proveRoutes = require('express').Router()


proveRoutes
    .use('/prove02AddProduct', require('./prove02AddProduct'))
    .use('/prove02Shop', require('./prove02Shop'))
    //.use('/03', require('./ta03'))
    //.use('/04', require('./ta04'))
    .get('/', (req, res, next) => {
        res.render('pages/proveActivities/', {
            pageTitle: 'Prove Activities',
            path: '/proveActivities'});
    });

module.exports = proveRoutes;