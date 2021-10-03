const routes = require('express').Router();
const teamActivities = require('./teamRoutes');
const proveActivites = require('./proveRoutes');

routes
    .use('/teamActivities', teamActivities)
    .use('/proveActivities', proveActivites)

    .get('/', (req, res, next) => {
        res.render('pages/index', {title: 'Welcome to CSE341 repo', path: '/'});
    })
    .use((req, res, next) => {
        res.render('pages/404', { title: '404 - Page Not Found', path: req.url });
    })

module.exports = routes;