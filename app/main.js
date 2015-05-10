import React from 'react';
import FileList from './file-list';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h2>JSPM Playground</h2>
				<FileList />
			</div>
		)
	}
};

React.render(<HelloWorld />, document.body);