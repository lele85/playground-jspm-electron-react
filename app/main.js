import React from 'react';
import App from './components/App';
import { getFiles, getDirectories } from './api';
import { AppActions } from './actions/AppActions';


getFiles(".").then((files) => console.log(files));
getDirectories(".").then((directories) => console.log(directories));

setTimeout(AppActions.changeDirectorySuccess,3000);
React.render(<App />, document.body);