var express = require('express');
var app     = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var port    = 3000;


// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views')
app.set('view engine', 'jade')

require('./app/routes')(app);

app.listen(port);
console.log('App is runnng on port ' + port);// shoutout to the user
exports = module.exports = app;
