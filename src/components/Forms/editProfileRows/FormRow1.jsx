import React from 'react'
import { Col, Form } from 'react-bootstrap';


export const EditFormRow1 = ({methods}) => {
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
                        ref={methods.register({
                            required:
                                'No puedes dejar este campo vacio',
                        })}
                    />
                </Form.Group>
            </Col>
            {/* -----------------------CORREO------------------------ */}
            <Col>
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
                        ref={methods.register}
                    />
                </Form.Group>
            </Col>
        </Form.Row>
    )
}
