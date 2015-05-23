import React from 'react';
import App from './components/App';
import { getFiles, getDirectories } from './api';


getFiles(".").then((files) => console.log(files));
getDirectories(".").then((directories) => console.log(directories));
React.render(<App />, document.body);