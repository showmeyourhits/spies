import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Settings from 'client/js/components/Settings';
import GamesList from 'client/js/components/GamesList';

const CustomComponent = ({someFukenProp, color}) => {
	return (
		<div style={{color}}>
			{someFukenProp}
		</div>
	);
}

const App = () => (<BrowserRouter>
	<div>
		<ul>
			<li>
				<Link to="/games">Play</Link>
			</li>
			<li>
				<Link to="/settings">Settings</Link>
			</li>
		</ul>
		<Route path="/games" component={GamesList}/>
		<Route path="/settings" component={Settings}/>
	</div>
</BrowserRouter>);

export default App;