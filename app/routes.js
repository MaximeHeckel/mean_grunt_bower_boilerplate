module.exports = function(app) {

  app.get('/', function(req, res) {
  	res.render('index.jade');
  });

  app.get('/dashboard', function(req, res) {
    res.render('dashboard.jade');
  });

}
