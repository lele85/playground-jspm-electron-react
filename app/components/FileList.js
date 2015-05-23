import React from 'react';
import File from './File';

class FileList extends React.Component {
	render() {
		var files = this.props.files.map((filename) => {
			return (<li key={filename}><File raw={filename} /></li>);
		})
		return <ul>{files}</ul>;
	}
};

export default FileList;