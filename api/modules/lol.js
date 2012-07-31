var util = require('util');

function lol (req, res, args, vars) {
	res.send({method: 'ble'});
};

function bla (req, res, args, vars) {
	res.send({'args':args, 'vars': vars});
}

function register(e, name, func) {
	console.log('Module ' + module.id + ': registering ' + name);
	e[name] = func;
}

exports.registerExports = function(e) {
	register(e,'lol',lol)
	register(e,'bla',bla)
}


