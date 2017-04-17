import React from 'react';
import {Link} from 'react-router-dom';

export default class GamesList extends React.PureComponent {
	render() {
		return (
			<div>
				<Link to="/">Go home</Link>
				<div>Games list will be here</div>
			</div>
		);
	}
}