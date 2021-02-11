import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../../styles/components/auth.css';
import { Footer } from './Footer';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Register } from './Register';

export const authComponent = () => {
	return (
		<div className="auth_container">
			<Navbar />
			<div className="auth_main">
				<div className="login_main_container">
					<Switch>
						<Route exact path="/auth/login" component={Login} />
						<Route exact path="/auth/register" component={Register} />
						<Route exact path="/auth/reset" />
					</Switch>
				</div>
				<Footer />
			</div>
		</div>
	);
};
