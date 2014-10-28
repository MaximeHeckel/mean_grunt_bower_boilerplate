var express = require('express');
var app     = express();
var port    = 3000;

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);
console.log('App is runnng on port ' + port);// shoutout to the user
exports = module.exports = app;
