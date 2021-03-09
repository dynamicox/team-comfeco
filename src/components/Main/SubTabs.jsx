import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { MainProfile } from "./Tabs/profile/MainProfile";
import { MainBadges } from "./Tabs/badge/MainBadges";
import { MainEvents } from "./Tabs/events/MainEvents";
import { MainGroups } from "./Tabs/groups/MainGroups";
import { EditProfile } from "./Tabs/profile/EditProfile";

export const SubTabs = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="px-0">
        <Row className="py-3 px-5 border-bottom m-0">
              <Col className="text-center">
                <Link to={"/sub/profile"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-user mr-2"}></i>Mi Perfil
                </Link>
                <Link to={"/sub/badges"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-lightbulb mr-2"}></i>Insignias
                </Link>
                <Link to={"/sub/groups"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-users mr-2"}></i>Grupos
                </Link>
                <Link to={"/sub/events"} className={"btn btn-outline-comfeco mx-2"}>
                  <i className={"fa fa-calendar-day mr-2"}></i>Eventos
                </Link>
              </Col>
        </Row>
          <Switch> 
          <Route exact path="/sub" >
            <Redirect to="/sub/profile"/>
          </Route>
          <Route exact path="/sub/update/profile" component={EditProfile} />
          <Route exact path="/sub/profile" component={MainProfile} />
          <Route exact path="/sub/badges" component={MainBadges} />
          <Route exact path="/sub/groups" component={MainGroups} />
          <Route exact path="/sub/events" component={MainEvents} />
        </Switch>
      <Footer />
      </Container>
    </>
  );
};
