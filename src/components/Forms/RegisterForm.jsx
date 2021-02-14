import React from 'react'
import google_icon from "../../assets/images/google_icon.png";
import facebook_icon from "../../assets/images/facebook_icon.png";
import { Form, Col, Row, Button, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
    const {register, handleSubmit, errors, getValues} = useForm({mode:'onChange'});

    const onSubmit = (data) => {
      console.log(data)
    }
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text_label text-center pt-3  pb-3">Registrate</h1>
            {/* --------------USERNAME---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Usuario:</Form.Label>
                    <i className="fas fa-user fa-lg fa-fw" aria-hidden="true" />
                    <Form.Control type="text" 
                        name="username"
                        ref={register({
                            required: 'Profavor complete este campo'
                        })}
                    />
              {errors.username && <li className="text_label text-danger"> {errors.username.message} </li>}              
                </Form.Group>
            {/* --------------EMAIL---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Correo:</Form.Label>
                    <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
                    <Form.Control type="text" 
                        name="email"
                        ref={register({
                  required: "Porfavor complete este campo",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Porfavor introduzca un email valido.',
                  }
                })}
                    />
              {errors.email && <li className="text_label text-danger"> {errors.email.message} </li>}              
                </Form.Group>
            {/* --------------PASSWORD---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Contraseña:</Form.Label>
                    <Form.Control  type="password" 
                        name="password"
                        ref={register({
                            required: 'Porfavor complete este campo',
                            pattern:{
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                                message: `La contraseña debe tener al menos 8 caracteres, e incluir un numero `
                            }
                        })}
                    />
                    <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
              {errors.password && <li className="text_label text-danger"> {errors.password.message} </li>}
                </Form.Group>
            {/* --------------CONFIRM PASSWORD---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Confirmar Contraseña:</Form.Label>
                    <Form.Control  type="password" 
                        name="confirmPass"
                        ref={register({
                            required:'Porfavor complete este campo',
                            validate: () => {
                                if(getValues('password')=== getValues('confirmPass')) return true
                                
                                else return "Las contraseñas no concuerdan"
                            } 
                        })}
                    />
              {errors.confirmPass && <li className="text_label text-danger"> {errors.confirmPass.message} </li>}
                    <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
                </Form.Group>
                <Row >
                    {/* --------TERMS AND CONDITIONS---------- */}
                    <Col>
                        <FormCheck className="text_label" name="terms" label="Estoy de acuerdo con los terminos y condiciones" ref={register({
                            required: 'Porfavor acepte los termnos y condiciones'
                        })} />
              {errors.terms && <li className="text_label text-danger"> {errors.terms.message} </li>}
                    </Col>
                </Row>
                <div className="text-center mt-3 mb-2">
                    <Link to="/auth/login" >
                        <Button className="alt_button hide_lg show_sm">Volver</Button>
                    </Link>
                    <Button className="login_button  ml-3" type="submit" >Registrar</Button>
                </div>
            </Form>
          <div className="login_with_container border-top pt-3 mb-2">
            <img src={facebook_icon} alt="LogIn With Fb" />
            <img src={google_icon} alt="LogIn with Gmail" />
          </div>  
        </>
    )
}
