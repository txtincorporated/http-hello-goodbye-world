var server = require('./lib/server');
var router = require('./lib/router');
var requestHandlers = require('./lib/requestHandlers');

var handle = {};
handle['/'] = requestHandlers.hello;
handle['/hello'] = requestHandlers.hello;
handle['/goodbye'] = requestHandlers.goodbye;

server.hello(router.route, handle);