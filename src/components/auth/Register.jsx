import React from "react";
import register_img from "../../assets/images/register_img.svg";
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Image, Form, Col, Row, Button, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Form >
            <h1 className="text_label text-center  pb-3">Registrate</h1>
            {/* --------------USERNAME---------------- */}
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Usuario:</Form.Label>
              <i className="fas fa-user fa-lg fa-fw" aria-hidden="true" />
              <Form.Control type="text" />
            </Form.Group>
            {/* --------------EMAIL---------------- */}
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Correo:</Form.Label>
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
              <Form.Control type="text" />
            </Form.Group>
            {/* --------------PASSWORD---------------- */}
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Contraseña:</Form.Label>
              <Form.Control  type="password" />
              <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
            </Form.Group>
            {/* --------------CONFIRM PASSWORD---------------- */}
            <Form.Group className="inputWithIcon" >
              <Form.Label className="text_label">Confirmar Contraseña:</Form.Label>
              <Form.Control  type="password" />
              <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
            </Form.Group>
              <Row >
                <Col>
                    <FormCheck className="text_label" label="Estoy de acuerdo con los terminos y condiciones" />
                </Col>
              </Row>
              <div className="text-center mt-3 mb-2">
                  <Link to="/auth/login" >
                    <Button className="alt_button hide_lg show_sm">Volver</Button>
                  </Link>
                  <Button className="login_button  ml-3">Registrar</Button>
              </div>
          </Form>
          <div className="login_with_container border-top pt-3 mb-2">
            <img src={facebook_icon} alt="LogIn With Fb" />
            <img src={google_icon} alt="LogIn with Gmail" />
          </div>
        </Col>
      </Row>
    </>
  );
};
