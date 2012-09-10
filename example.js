
/**
 * Module dependencies.
 */

var connect = require('connect');
var logger = require('./index');
var jog = require('jog');
var log = jog(new jog.FileStore('/tmp/log'));

var app = connect();

app.use(logger(log));

app.use(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello' }));
});

app.listen(3000);
