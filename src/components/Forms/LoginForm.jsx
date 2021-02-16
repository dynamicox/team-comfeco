import React from "react";
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Form, Col, Row, Button, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";


export const LoginForm = () => {
  const methods = useForm({ mode: "onChange" });
  const { logIn } = useAuth()

  const onSubmit = async (data) => {
    const {email, password} = data
    
    try {
      await logIn(email, password)
      console.log("Funciona");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className="text_label text-center pt-3 pb-4">Iniciar sesión</h1>
        {/* -------------EMAIL------------- */}
        <Form.Group className="inputWithIcon">
          <Form.Label className="text_label">Correo:</Form.Label>
          <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
          <Form.Control
            type="text"
            name="email"
            ref={methods.register({
              required: "Porfavor complete este campo",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Porfavor introduzca un email valido.",
              }
              }  )}
          />
          {methods.errors.email && (
            <li className="text_label text-danger">
              {" "}
              {methods.errors.email.message}{" "}
            </li>
          )}
        </Form.Group>
        {/* -----------PASSWORD------------ */}
        <Form.Group className="inputWithIcon">
          <Form.Label className="text_label">Contraseña:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={methods.register({
              required: "Porfavor complete este campo",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
          {methods.errors.password && (
            <li className="text_label text-danger">
              {" "}
              {methods.errors.password.message}{" "}
            </li>
          )}
        </Form.Group>
        <Row>
          <Col xs="8" md="7" lg="8">
            <Link to="/auth/reset">
              <p className="text_label">¿Olvidaste tu contraseña?</p>
            </Link>
          </Col>
          <Col xs="4" md="5" lg="4">
            <FormCheck className="text_label" label="Recuerdame" />
          </Col>
        </Row>
        <div className="text-center mt-5 mb-2">
          <Link to="/auth/register">
            <Button className="alt_button hide_lg show_sm">Registrarse</Button>
          </Link>
          <Button type="submit" className="login_button  ml-3">
            Ingresar
          </Button>
        </div>
      </Form>
      <div className="login_with_container border-top pt-4 mb-3">
        <img src={facebook_icon} alt="LogIn With Fb" />
        <img src={google_icon} alt="LogIn with Gmail" />
      </div>
    </div>
  );
};
