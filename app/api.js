import fs from 'fs';

var getFiles = function() {
	var p = new Promise((resolve, reject) => {
		fs.readdir("./", (err, obj) => {
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
