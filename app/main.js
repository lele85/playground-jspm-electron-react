import 'babel/polyfill';
import React from 'react';
import App from './components/App';
import { getFiles, getDirectories } from './api';
import { AppActions } from './actions/AppActions';


//getFiles(".").then((files) => console.log(files));
//getDirectories(".").then((directories) => console.log(directories));

Promise.all([getFiles("."), getDirectories(".")]).then((result) => {

  let transform = function(name, directory) {
    return {
      name: name,
      directory: directory
    };
  };

  let files = result[0].map((filename => transform(filename, false)));
  let directories = result[1].map(dirname => transform(dirname, true));
  setTimeout(() => AppActions.changeDirectorySuccess(directories.concat(files)),1000)
//AppActions.changeDirectorySuccess(directories.concat(files));
});

React.render(<App />, document.body);