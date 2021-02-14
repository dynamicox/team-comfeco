import React from "react";
import login_img from "../../assets/images/login_img.svg";
import { Image, Col, Row, Button } from "react-bootstrap"; 
import { Link } from "react-router-dom"
import { LoginForm } from "../Forms/LoginForm";

export const Login = () => {
  return (
    <>
      <Row>
        <Col md="6" className="d-flex responsiveLogin">
          <div className="text-center pt-5">
            <Image src={login_img} fluid className="mt-5" />
              <span className="text_label ">¿Todavia no tienes cuenta?</span> <br />
            <Link to="/auth/register">
            <Button className="register_button">Registrarse</Button>
            </Link>
          </div>
          <hr className="loginForm" />
        </Col>
        <Col sm="12" md="6">
          <LoginForm />
        </Col>
      </Row>
    </>
  );
};
