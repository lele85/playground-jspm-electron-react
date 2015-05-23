import React from 'react';
import FileList from './FileList';
import { AppStore } from '../stores/AppStore';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { files : AppStore.getAll() };
	}
	render() {
		return (
			<div>
				<h2>JSPM Playground</h2>
				<FileList files={this.state.files} />
			</div>
		)
	}
};

export default App;