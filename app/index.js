var debug = require('debug')('practice:app');

var express = require('express');

var app = module.exports = express();

app.use(express.logger());
app.use(express.bodyParser());

app.get('/', function(req, res, next) {
    res.json(200, 'index');
});
