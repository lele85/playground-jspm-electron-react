import React from 'react';
import { getFiles } from './api';
import File from './file';

export default class FileList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { files : [] };
	}

	componentDidMount() {
		getFiles().then(files => {
			this.setState({files : files})
		});
	}

	render() {
		var files = this.state.files.map((filename) => {
			return (<li key={filename}><File raw={filename} /></li>);
		})
		return <ul>{files}</ul>;
	}
};