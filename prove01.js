const http = require('http');
const prove01Routes = require('./prove01-routes.js');

const routes = require('./prove01-routes.js');

const server = http.createServer(prove01Routes.handler);
server.listen(3000);