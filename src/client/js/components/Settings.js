import React from 'react';
import {Link} from 'react-router-dom';

export default class Settings extends React.PureComponent {
	render() {
		return (
			<div>
				<Link to="/">Go home</Link>
				<div>Settings list will be here</div>
			</div>
		);
	}
}