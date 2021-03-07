import React from 'react'
import { Col, Form } from 'react-bootstrap';


export const EditFormRow1 = ({methods, username, email, thirdParty}) => {
    return (
        <Form.Row>
            {/* ---------------USUARIO---------------- */}
            <Col>
                <Form.Group className='inputWithIcon'>
                    <Form.Label className='text_label'>Nick:</Form.Label>
                    <i
                        className='fa fa-user fa-lg fa-fw'
                        aria-hidden='true'
                    />
                    <Form.Control
                        type='text'
                        name='username'
                        placeholder={username}
                        ref={methods.register()}
                    />
                </Form.Group>
            </Col>
            {/* -----------------------CORREO------------------------ */}
            {!thirdParty && <Col>
                <Form.Group className='inputWithIcon'>
                    <Form.Label className='text_label'>
                        Correo:
                    </Form.Label>
                    <i
                        className='fas fa-envelope fa-lg fa-fw'
                        aria-hidden='true'
                    />
                    <Form.Control
                        type='text'
                        name='email'
                        placeholder={email}
                        ref={methods.register({pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Porfavor introduzca un email valido.",
                            }})}
                    />
                    {methods.errors.email && <li className="text-danger">{methods.errors.email.message}</li>}
                </Form.Group>
            </Col>}
        </Form.Row>
    )
}
