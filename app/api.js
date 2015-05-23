import glob from 'glob';

var getFiles = function(cwd) {
	var p = new Promise((resolve, reject) => {
		glob("*/", {cwd :cwd}, (err, obj) => {
			if (err) {
				reject();
			} else {
				resolve(obj);
			}
		});
	});
	return p;
};

export { getFiles };
