const proveRoutes = require('express').Router()


proveRoutes
    //.use('/01', require('./ta01'))
    //.use('/02', require('./ta02'))
    //.use('/03', require('./ta03'))
    //.use('/04', require('./ta04'))
    .get('/', (req, res, next) => {
        res.render('pages/proveActivities/', {
            pageTitle: 'Prove Activities',
            path: '/proveActivites'});
    });

module.exports = proveRoutes;