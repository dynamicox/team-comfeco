import React, {useState} from 'react'
import { Row, Col, Button, Form, Image, Alert } from "react-bootstrap";
import { ConfirmModal } from "../Forms/ModalSuccesMessage";
import reset_pass from "../../assets/images/reset_pass.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth  } from "../../contexts/AuthContext";

export const ForgottenPass = () => {
    const methods = useForm({mode:'onChange'});
	  const [toggleModal, setToggleModal] = useState(false)
    const { resetPassword } = useAuth()

    const onSubmit = async (data) => {
      try {
        await resetPassword(data.email)
        setToggleModal(true)
      } catch (error) {
        if(error.message === "There is no user record corresponding to this identifier. The user may have been deleted.")
        methods.setError("forgotPass", {message:"No existe cuenta asociada a este email"})
      }
      setTimeout(() => methods.clearErrors(), 3000);
    } 

    return (
    <>
    <ConfirmModal toggleModal={toggleModal} 
    modalMessage="Por favor revise su correo y siga los pasos para cambiar su contraseña"
    settoggleModal={()=>{setToggleModal(val => !val)}}
    />
    {methods.errors.forgotPass && <Alert variant="danger" className="text-center text_label">{methods.errors.forgotPass.message}</Alert>}
      <Row>
        <Col md="6" className="d-flex responsiveLogin">
          <div className="text-center pt-3 pb-5 pr-3">
            <Image src={reset_pass} fluid className="mt-5" />
          </div>
          <hr className="loginForm" style={{height:'360px'}} />
        </Col>
        <Col sm="12" md="6">
          <Form className="" onSubmit={methods.handleSubmit(onSubmit)} >
            <h4 className="text_label text-center pt-5 pb-4">¿Olvidaste tu contraseña?</h4>
            <p className="text_label">
                Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña. Este enlace será válido por una hora.
            </p>
              {/* ----------------EMAIL-------------------- */}
            <Form.Group className="inputWithIcon mt-3 mb-4" >
                <Form.Label className="text_label">Ingresa tu correo:</Form.Label>
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
              <Form.Control type="text"
                name="email"
                ref={methods.register({
                  required: 'Porfavor complete este campo',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Porfavor introduzca un email valido.',
                  }
                })}
              />
              {methods.errors.email && <li className="text_label text-danger"> {methods.errors.email.message} </li>}
            </Form.Group>
              <div className="d-flex justify-content-between">
                  <Link to="/auth/login" >
                    <Button className="alt_button">Inicia sesion</Button>
                  </Link>
                <Button className="login_button " type='submit' >Enviar</Button>
              </div>
          </Form>
        </Col>
      </Row>
    </>
    )
}
