var fs = require('fs'),
	modulesDir = 'modules',
	modules = [];
	
function getModule(moduleFileName) {
	return require('./' + modulesDir + '/' + moduleFileName);
}	

fs.readdir('./api/' + modulesDir, function(err, files) {
	var file, m;
	
	if(err) {
		throw err;
	}
	
	console.log("Found " + files.length + " potential modules");
	
	for(file in files) {		
		if(!files.hasOwnProperty(file)) {
			continue;
		}
		
		console.log("Getting module from " + files[file]);
		
		/* Instantiate the module */
		try
		{
			m = getModule(files[file]);		
			
			/* Register the exports */
			m.registerExports( function (funcname, funcobj) {
				console.log(' - Module ' + modulesDir + '/' + files[file] + ': registering ' + funcname);
				exports[funcname] = funcobj;
			});		
			
			/* Remember the module */
			modules.push(module);		
		}
		catch(e)
		{
			console.log(" - ERROR loading from " + modulesDir + '/' + files[file] + ": " + e);
		}
	}
});