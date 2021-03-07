import React from 'react'

import { Form, Col, Row, Button, FormCheck } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useStorage } from "../../contexts/StorageContext";

import { ThirdPartyLogin } from "../auth/ThirdPartyLogin";


export const RegisterForm = ({methods}) => {
    const history = useHistory()
    const {addUsername} = useStorage()
    const { signUp } = useAuth()

    const onSubmit = async (data) => {
        const {email, password, username} = data
      try {
         signUp(email, password).then( async (userInfo)=> {
                await userInfo.user.updateProfile({displayName: username})

             addUsername(userInfo.user.uid, username).then(()=> history.push('/'))
            .catch((error)=>{
               console.log(error);
            }) 
         })
         .catch((error) => {
                     if(error.message === "The email address is already in use by another account.")
                    methods.setError("registerForm", {message:"Este Email ya esta asociado a una cuenta."})

                    setTimeout(()=> methods.clearErrors(),3500)
                });
      } catch (error) {
          console.log(error)
      }
    }
    return (
        <>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <h1 className="text_label text-center pt-3  pb-3">Registrate</h1>
            {/* --------------USERNAME---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Usuario:</Form.Label>
                    <i className="fas fa-user fa-lg fa-fw" aria-hidden="true" />
                    <Form.Control type="text" 
                        name="username"
                        ref={methods.register({
                            required: 'Profavor complete este campo'
                        })}
                    />
              {methods.errors.username && <li className="text_label text-danger"> {methods.errors.username.message} </li>}              
                </Form.Group>
            {/* --------------EMAIL---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Correo:</Form.Label>
                    <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
                    <Form.Control type="text" 
                        name="email"
                        ref={methods.register({
                            required: "Porfavor complete este campo",
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Porfavor introduzca un email valido.",
                            },
                        })}
                    />
              {methods.errors.email && <li className="text_label text-danger"> {methods.errors.email.message} </li>}              
                </Form.Group>
            {/* --------------PASSWORD---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Contraseña:</Form.Label>
                    <Form.Control  type="password" 
                        name="password"
                        ref={methods.register({
                        required: "Porfavor complete este campo",
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                            message: `La contraseña debe tener al menos 8 caracteres, e incluir un numero `
                        }
                        })}
                    />
                    <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
              {methods.errors.password && <li className="text_label text-danger"> {methods.errors.password.message} </li>}
                </Form.Group>
            {/* --------------CONFIRM PASSWORD---------------- */}
                <Form.Group className="inputWithIcon" >
                    <Form.Label className="text_label">Confirmar Contraseña:</Form.Label>
                    <Form.Control  type="password" 
                        name="confirmPass"
                        ref={methods.register({
                            required:'Porfavor complete este campo',
                            validate: () => {
                                if(methods.getValues('password')=== methods.getValues('confirmPass')) return true
                                else return "Las contraseñas no concuerdan"
                            } 
                        })}
                    />
              {methods.errors.confirmPass && <li className="text_label text-danger"> {methods.errors.confirmPass.message} </li>}
                    <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
                </Form.Group>
                <Row >
                    {/* --------TERMS AND CONDITIONS---------- */}
                    <Col>
                        <FormCheck className="text_label" name="terms" label="Estoy de acuerdo con los terminos y condiciones" ref={methods.register({
                            required: 'Porfavor acepte los termnos y condiciones'
                        })} />
              {methods.errors.terms && <li className="text_label text-danger"> {methods.errors.terms.message} </li>}
                    </Col>
                </Row>
                <div className="text-center mt-3 mb-2">
                    <Link to="/auth/login" >
                        <Button className="alt_button hide_lg show_sm">Volver</Button>
                    </Link>
                    <Button className="login_button  ml-3" type="submit" disabled={methods.formState.isSubmitting} >Registrar</Button>
                </div>
            </Form>
          <ThirdPartyLogin />  
        </>
    )
}