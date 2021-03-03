import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";
import { Insignias } from "./Insignias";
import { RecentActivity } from "./RecentActivity";
import { Eventos } from "./Eventos";

export const Profile = () => {
  return (
    <Container fluid style={{height:"100vh"}}>
      <Row>
              {/* ------------PROFILE CARD------------- */}
            <Col lg={3} md={12}>
              <section id="profile" >
                <ProfileCard />
              </section>
            </Col>
               {/* ------------INSIGNIAS-------------- */}
            <Col lg={6} md={12} sm={12} xs={12}>
              <section id="insiginias" >
                <Insignias />
                <RecentActivity />
              </section>
            </Col>
               {/* ------------EVENTOS-------------- */}
            <Col lg={3} md={12} sm={12} xs={12}>
              <section id="eventos" >
                <Eventos />
              </section>
            </Col>
      </Row>
    </Container>
  );
};
