import React from 'react'
import { Row, Col, Button, Form, Image, FormCheck } from "react-bootstrap";
import reset_pass from "../../assets/images/reset_pass.png";
import { Link } from "react-router-dom";

export const ForgottenPass = () => {
    return (
    <>
      <Row>
        <Col md="6" className="d-flex responsiveLogin">
          <div className="text-center pt-3 pb-5 pr-3">
            <Image src={reset_pass} fluid className="mt-5" />
          </div>
          <hr className="loginForm" style={{height:'360px'}} />
        </Col>
        <Col sm="12" md="6">
          <Form className="text-center">
            <h4 className="text_label text-center pt-5 pb-4">¿Olvidaste tu contraseña?</h4>
            <p className="text_label">
                Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña. Este enlace será válido por una hora.
            </p>
            <Form.Group className="inputWithIcon mt-3" >
                <Form.Label className="text_label">Ingresa tu correo:</Form.Label>
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
              <Form.Control type="text" />
            </Form.Group>
                    <Link to="/auth/login" >
                      <Button className="alt_button">Inicia sesion</Button>
                    </Link>
                  <Button className="login_button ml-3" >Enviar</Button>
          </Form>
        </Col>
      </Row>
    </>
    )
}
