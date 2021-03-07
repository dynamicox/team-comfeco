import React from "react";
import login_img from "../../assets/images/login_img.svg";
import { Image, Col, Row, Button, Alert } from "react-bootstrap"; 
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { LoginForm } from "../Forms/LoginForm";

export const Login = () => {
  const methods = useForm({ mode: "onChange" });

  return (
    <>
        {methods.errors.login && <Alert variant="danger" className="text_label text-center">{methods.errors.login.message} </Alert>}
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
          <LoginForm methods={methods} />
        </Col>
      </Row>
    </>
  );
};
