import React, { useEffect } from "react";

import { Form, Col, Row, Button, FormCheck } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { ThirdPartyLogin } from "../auth/ThirdPartyLogin";


export const LoginForm = ({methods}) => {
  
  const history = useHistory()
  const { logIn } = useAuth()


  const onSubmit = async (data) => {
    const {email, password, remember_me} = data
      
     try {
      await logIn(email, password)

      if(remember_me){
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("pass", password);
        window.localStorage.setItem("checked", remember_me);
      }else window.localStorage.removeItem("checked")

      history.push('/')
    } catch (error) {
      console.log(error)
      if(error.message === "There is no user record corresponding to this identifier. The user may have been deleted.")
        methods.setError("login",{ message: "No existe ninguna cuenta asiciada a este Email."})
      
      if(error.message === "The password is invalid or the user does not have a password.")
        methods.setError("login",{ message: "Contraseña o Proveedor (Google, FB) Incorrecto, Trate una vez mas..."})
      

      setTimeout(() => methods.clearErrors(), 3500);
    } 
  };

  useEffect(()=>{
      if(window.localStorage.getItem('checked') === 'true'){
        methods.setValue("email", window.localStorage.getItem('email'))
        methods.setValue("password", window.localStorage.getItem('pass'))
        methods.setValue("remember_me", window.localStorage.getItem('checked'))
      }

  }, [])

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
          {/* ----------REMEMBER ME---------- */}
          <Col xs="4" md="5" lg="4">
            <FormCheck className="text_label" name="remember_me" label="Recuerdame" ref={methods.register} />
          </Col>
        </Row>
        <div className="text-center mt-5 mb-2">
          <Link to="/auth/register">
            <Button className="alt_button hide_lg show_sm">Registrarse</Button>
          </Link>
          <Button type="submit" disabled={methods.formState.isSubmitting} className="login_button  ml-3">
            Ingresar
          </Button>
        </div>
      </Form>
      <ThirdPartyLogin />
    </div>
  );
};
