import React from 'react';
import FileList from './FileList';
import { AppStore } from '../stores/AppStore';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { files : AppStore.getAll() };
	}
	_onChange(){
		this.setState({ files : AppStore.getAll() });
	}
	componentDidMount() {
    	AppStore.addChangeListener(this._onChange.bind(this));
  	}
  	componentWillUnmount(){
    	AppStore.removeChangeListener(this._onChange);
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