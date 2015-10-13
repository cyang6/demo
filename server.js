/**
 * Created by cyang6 on 10/12/15.
 */
var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use('/', express.static('build/app'));

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
