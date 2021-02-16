import { Layout } from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authComponent } from './components/auth/authComponent';
import './styles/index.scss';

function App() {
	return (
		<>
			<Layout>
				<Switch>
					<Route path="/auth" component={authComponent} />
					<Redirect to="/auth/login" />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
