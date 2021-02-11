import { Layout } from './components/Layout';
import { AppRouter } from './routers/AppRouter';
import './styles/index.scss';
function App() {
	return (
		<>
			<Layout>
				<AppRouter />
			</Layout>
		</>
	);
}

export default App;
