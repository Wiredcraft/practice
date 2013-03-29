var debug = require('debug')('practice:index');

var http = require('http');
var express = require('express');

var app = express();

app.use(require('./app'));

var server = http.createServer(app).listen(3000, function() {
    debug('server started.');
});
