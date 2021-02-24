import React from "react";
import { Container } from "react-bootstrap";
import { Navigation } from "../auth/Navbar";

export const TC = () => {
  return (
    <Container fluid className="p-0">
      <Navigation />
    </Container>
  );
};
