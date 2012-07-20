var fs = require('fs'),
	modulesDir = 'modules',
	modules = [];
	
function getModule(moduleFileName) {
	return require('./' + modulesDir + '/' + moduleFileName);
}	

fs.readdir('./api/' + modulesDir, function(err, files) {
	var file, module;
	
	if(err) {
		throw err;
	}
	
	for(file in files) {
		if(!files.hasOwnProperty(file)) {
			continue;
		}
		
		console.log("Getting module from " + files[file]);
		
		/* Instantiate the module */
		module = getModule(files[file]);		
		
		/* Register the exports */
		module.registerExports(exports);		
		
		/* Remember the module */
		modules.push(module);		
	}
});