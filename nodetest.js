var express = require('express'),
	api = require('./api'),
	util = require('util'),
	url = require('url'),
	app;
	
app = express.createServer();
app.configure(function(){
	app.set('view engine', 'jade');
});
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index.jade');
});

app.get('/api/:method*', function (req, res) {
	var method = req.params.method,
		vars, args;
		
	if(method) {
	
		/* Method positional parameters */
		args = req.url.split('?')[0].split('/').splice(3);
		
		/* Method named paramers (query string) */		
		vars = url.parse(req.url, true);
		
		api[method](req, res, args, vars.query);
	} else {
		next();
	}
});

app.get('/api', function (req, res) {
	res.redirect('/');
});

app.listen(3000);