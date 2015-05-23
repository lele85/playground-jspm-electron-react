import React from 'react';
import File from './File';
import Directory from './Directory';

class FileList extends React.Component {
	render() {
		var elements = this.props.files.map((file) => {
			if (file.directory) {
				return (<li key={file.name}><Directory name={file.name} /></li>);
			}
			return (<li key={file.name}><File name={file.name} /></li>);
		})
		return <ul>{elements}</ul>;
	}
};

export default FileList;