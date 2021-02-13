import React from "react";
import { Route, Switch } from "react-router-dom";

import "../../styles/components/auth.css";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { Navigation } from "./Navbar";
import { Register } from "./Register";
import { Container, Card, Row, Col } from "react-bootstrap";
import { ForgottenPass } from "./ForgottenPass";

export const authComponent = () => {
  return (
    <>
    <div className="auth_container">
      <Navigation />
      <Container fluid="sm">
        <Row className="d-flex justify-content-center align-items-center pt-4">
        <Col xs="12" md="12" lg="10">
          <Card className="shadow">
            <Card.Body>
              <Switch>
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/reset" component={ForgottenPass} />
              </Switch>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div >
          <Footer />
    </>
    //////////////////Wilcox
/*     <Container fluid className="p-0">
      <Navbar />
      <div className="row m-0 p-0 d-flex justify-content-center align-items-center auth_container">
        <div className="col-lg-8 py-2">
          <Card className="shadow">
            <Card.Body>
              <Switch>
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/reset" />
              </Switch>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 my-2">
          <Footer />
        </div>
      </div>
    </Container> */

    ////////////////////Fernando
    // <div className="auth_container">
    // 	<Navbar />
    // 	<div className="auth_main">
    // 		<div className="login_main_container">
    // 			<Switch>
    // 				<Route exact path="/auth/login" component={Login} />
    // 				<Route exact path="/auth/register" component={Register} />
    // 				<Route exact path="/auth/reset" />
    // 			</Switch>
    // 		</div>
    // 		<Footer />
    // 	</div>
    // </div>
  );
};
