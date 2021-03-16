import { Layout } from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import { AuthViewComponent } from './components/auth/AuthViewComponent';
import { PrivateRoute, AuthRoute } from './components/PrivateRoute';
import { HomePageView } from './components/main/HomePageView';
import { Error404 } from './components/Errors/Error404';
import './styles/index.scss';
import { SubTabs } from './components/main/SubTabs';

function App() {
	return (
		<>
			<Layout>
				<Switch>
					<PrivateRoute exact path='/' component={HomePageView} />
					<PrivateRoute path='/sub' component={SubTabs} />
					<AuthRoute path='/auth' component={AuthViewComponent} />
					<Route path='*' component={Error404} />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
