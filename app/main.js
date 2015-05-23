import React from 'react';
import App from './components/App';
import { getFiles } from './api';

getFiles(".").then((files) => console.log(files));
React.render(<App />, document.body);