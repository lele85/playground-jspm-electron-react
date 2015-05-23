import React from 'react';

class Directory extends React.Component {
	render() {
		return (
			<div>
				<h3> ++ { this.props.name }</h3>
			</div>
		);
	}
};

export default Directory;