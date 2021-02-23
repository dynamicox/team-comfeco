import React from "react";
import img_error_404 from "../../assets/images/404.png";
import { Link } from "react-router-dom";
import { Image, Container, Button, Row, Col } from "react-bootstrap";
import { Navigation } from "../auth/Navbar";

export const Error404 = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0 p-0 mt-3">
        <Col xs={12} sm={12} xl={12} md={9} className="text-center">
          <Image src={img_error_404} fluid />
        </Col>
        <Col xs={12} sm={12} xl={12} md={12} lg={12} className="text-center">
          <Link to="/auth/login">
            <Button className="register_button">Ir al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
