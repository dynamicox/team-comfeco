import React from "react";
import register_img from "../../assets/images/register_img.svg";
import { Image, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RegisterForm } from "../Forms/RegisterForm";

export const Register = () => {
  return (
    <>
      <Row>
        <Col md="6" className="d-flex responsiveLogin">
          <div className="text-center pt-5 mt-5">
            <Image src={register_img} fluid className="pt-5 mt-5" />
              <h5 className="text_label mt-3">¿Ya estas registrado?</h5>
            <Link to="/auth/login">
            <Button className="register_button">Ingresar</Button>
            </Link>
          </div>
          <hr className="loginForm" style={{height:'600px'}} />
        </Col>
        <Col sm="12" md="6">
          <RegisterForm />
        </Col>
      </Row>
    </>
  );
};
