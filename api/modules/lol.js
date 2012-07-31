var util = require('util');

function lol (req, res, args, vars) {
	res.send({method: 'ble'});
};

function echofunc (req, res, args, vars) {
	res.send({'args':args, 'vars': vars});
}

exports.registerExports = function(registerCallback) {
	registerCallback('lol',lol)
	registerCallback('echo',echofunc)
}


