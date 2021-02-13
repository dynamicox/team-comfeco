import React from "react";
import login_img from "../../assets/images/login_img.svg";
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Image, Form, Col, Row, Button, FormCheck } from "react-bootstrap"; 
import { Link } from "react-router-dom"

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
          <Form >
            <h1 className="text_label text-center pt-3 pb-4">Iniciar sesión</h1>
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Correo:</Form.Label>
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Contraseña:</Form.Label>
              <Form.Control  type="password" />
              <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
            </Form.Group>
              <Row >
                <Col xs="8" md="7" lg="8">
                  <Link to="/auth/reset">
                    <p className="text_label">¿Olvidaste tu contraseña?</p>
                  </Link>
                </Col>
                <Col xs="4"  md="5"  lg="4">
                    <FormCheck className="text_label" label="Recuerdame" />
                </Col>
              </Row>
              <div className="text-center mt-5 mb-2">
                  <Link to="/auth/register" >
                    <Button className="alt_button hide_lg show_sm">Registrarse</Button>
                  </Link>
                  <Button className="login_button  ml-3">Ingresar</Button>
              </div>
          </Form>
          <div className="login_with_container border-top pt-4 mb-3">
            <img src={facebook_icon} alt="LogIn With Fb" />
            <img src={google_icon} alt="LogIn with Gmail" />
          </div>
        </Col>
      </Row>
    </>
  );
};
