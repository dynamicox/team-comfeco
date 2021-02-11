import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { authComponent } from '../components/auth/authComponent';
export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/auth" component={authComponent} />
				<Route path="/app" />
				<Redirect to="/auth" />
			</Switch>
		</Router>
	);
};
