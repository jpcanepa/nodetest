var util = require('util');

function lol (req, res, args, vars) {
	res.send({method: 'ble'});
};

exports.registerExports = function(e) {
	console.log("Module lol registering function lol");
	e.lol = lol;
}


