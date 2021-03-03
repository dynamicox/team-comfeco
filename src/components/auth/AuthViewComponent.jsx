import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "../../styles/components/auth.css";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { LoginNavigation } from "./Navbar";
import { Register } from "./Register";
import { Container, Card, Row, Col } from "react-bootstrap";
import { ForgottenPass } from "./ForgottenPass";
import { TC } from "./TerminosCondiciones";
import { useAuth } from "../../contexts/AuthContext";

export const AuthViewComponent = () => {

  return (
    <>
      <div className="auth_container">
        <LoginNavigation />
        <Container fluid="sm">
          <Row className="d-flex justify-content-center align-items-center pt-4">
            <Col xs="12" md="12" lg="10">
              <Card className="shadow">
                <Card.Body>
                  <Switch>
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/auth/register" component={Register} />
                    <Route exact path="/auth/reset" component={ForgottenPass} />
                    <Route exact path="/termino-condiciones" component={TC} />
                  </Switch>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
