import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';
import ToDo from '../pages/todo';
import SignIn from '../pages/signIn';

class Routes extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/todo' component={ToDo} />
					<Route exact path='/sign-in' component={SignIn} />
				</Switch>
			</>
		);
	}
}

export default Routes;
