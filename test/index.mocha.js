var debug = require('debug')('practice:index');

var should = require('should');
var request = require('request');

var http = require('http');
var express = require('express');

var app = express();
app.use(require('../app'));

var server = http.createServer(app);

describe('Basic', function() {
    before(function(done) {
        server.listen(3000, done);
    });

    after(function(done) {
        server.close(done);
    });

    it('should ...', function() {
        Error.should.be.a('function');
    });

    it('should ...', function(done) {
        request.get({
            uri: 'http://127.0.0.1:3000/',
            json: true
        }, function(err, res, body) {
            should.not.exist(err);
            res.should.be.a('object');
            res.should.have.property('statusCode', 200);
            debug('res.headers', res.headers);
            debug('body', body);
            done();
        });
    });
});
