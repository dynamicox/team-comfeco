import { Layout } from "./components/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthViewComponent } from "./components/Auth/AuthViewComponent";
import { PrivateRoute } from "./components/PrivateRoute";
import { HomePageView } from "./components/Main/HomePageView";
import { Error404 } from "./components/Errors/Error404";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={HomePageView} />
          <Route path="/auth" component={AuthViewComponent} />
          <Route path="*" component={Error404} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
