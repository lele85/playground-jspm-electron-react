import React from 'react';

class File extends React.Component {
	render() {
		return (
			<div>
				<h3>{ this.props.raw }</h3>
			</div>
		);
	}
};

export default File;