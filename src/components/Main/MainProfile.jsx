import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Profile } from "./TabsProfile/Profile";
import { EditProfile } from "./TabsProfile/EditProfile";

export const MainProfile = () => {
  return (
    <>
      <Navigation />
      <Container fluid className={"p-0"}>
        <Row className={"py-3 px-5 border-bottom m-0 "}>
              <Col className="text-center">
                <Link to={"/sub/profile"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-user mr-2"}></i>Mi Perfil
                </Link>
                <Link to={"/sub/profile"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-user mr-2"}></i>Mi Perfil
                </Link>
                <Link to={"/sub/profile"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-user mr-2"}></i>Mi Perfil
                </Link>
                <Link to={"/sub/profile"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-user mr-2"}></i>Mi Perfil
                </Link>
              </Col>
        </Row>
        <Switch> 
          <Route exact path="/sub" >
            <Redirect to="/sub/profile"/>
          </Route>
          <Route exact path="/sub/update/profile" component={EditProfile} />
          <Route exact path="/sub/profile" component={Profile} />
        </Switch>
      <Footer />
      </Container>
    </>
  );
};
