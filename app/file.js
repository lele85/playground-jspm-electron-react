import React from 'react';

export default class File extends React.Component {
	render() {
		return (
			<div>
				<h3>{ this.props.raw }</h3>
			</div>
		);
	}
};