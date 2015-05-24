import glob from 'glob';

var get = function(cwd, type) {
  var dirPattern = type === "DIRECTORIES" ? "/" : "";
  var p = new Promise((resolve, reject) => {
    glob("*" + dirPattern, {
      cwd: cwd
    }, (err, obj) => {
      if (err) {
        reject();
      } else {
        resolve(obj);
      }
    });
  });
  return p;
}

var getFiles = function(cwd) {
  return get(cwd, "FILES");
};

var getDirectories = function(cwd) {
  return get(cwd, "DIRECTORIES");
};

export { getFiles };
export { getDirectories };