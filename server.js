/**
 * Created by cyang6 on 10/12/15.
 */
var express = require('express'),
    app = express(),
    compression = require('compression'),
    server;

app.use(compression());
app.use('/', express.static('build/app'));

server = app.listen(8080, function () {
  'use strict';
  var host = server.address().address,
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
