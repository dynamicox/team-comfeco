import { Layout } from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthViewComponent } from './components/Auth/AuthViewComponent';
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePageView } from "./components/Main/HomePageView";
import './styles/index.scss';

function App() {
	return (
		<>
			<Layout>
				<Switch>
					<PrivateRoute exact path="/home" component={HomePageView}/>
					<Route path="/auth" component={AuthViewComponent} />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
