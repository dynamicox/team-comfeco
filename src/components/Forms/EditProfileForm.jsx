import React from 'react'
import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const EditProfileForm = () => {
    const methods = useForm({ mode: "onChange" });

    return (
        <>
            <Form className="mb-5">
                {/* ----------------***FILA 1***--------------- */}
                <Form.Row>
                    {/* ---------------USUARIO---------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">Nick:</Form.Label>
                            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    {/* -----------------------CORREO------------------------ */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">Correo:</Form.Label>
                            <i className="fas fa-envelope fa-lg fa-fw" aria-hidden="true" />
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                 {/* ----------------***FILA 2***----------------- */}
                <Form.Row>
                    {/* --------------GENERO--------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">
                                Genero:
                            </Form.Label>
                            <Form.Control as="select" className="mt-2" >
                                <option>Seleccione un genero</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                                <option>No Binario</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    {/* --------------FECHA DE NACIMIENTO--------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                                <Form.Label className="text_label">
                                    Fecha nacimiento:
                                </Form.Label>
                                <Form.Control type="date" /> 
                        </Form.Group>
                    </Col>
                    {/* --------------PAIS--------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                                <Form.Label className="text_label">
                                    Pais:
                                </Form.Label>
                                <Form.Control type="text" /> 
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* -------------***FILA 3***----------------- */}
                <Form.Row>
                    {/* --------------AREA DE CONOCIMIENTO--------------- */}
                    <Col xs="12" >
                        <Form.Group>
                            <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">
                                Area de conocimiento:
                            </Form.Label>
                            <Form.Control as="select" className="mt-2" >
                                <option>Select algo</option>
                                <option>Front End</option>
                                <option>Back End</option>
                                <option>Dev Ops</option>
                                <option>Video Game</option>
                                <option>Developers</option>
                                <option>UI/UX</option>
                                <option>Database Developer</option>
                                <option>Cloud Computing</option>
                            </Form.Control>
                        </Form.Group>
                        </Form.Group>
                    </Col>
                    {/* ----------------CONTRASEÑA--------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">Contraseña:</Form.Label>
                            <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
                            <Form.Control type="password" />
                        </Form.Group>
                    </Col>
                    {/* ----------------CONFIRMAR CONTRASEÑA--------------- */}
                    <Col>
                        <Form.Group className="inputWithIcon">
                            <Form.Label className="text_label">Confirmar Contraseña:</Form.Label>
                            <i className="fas fa-lock fa-lg fa-fw" aria-hidden="true" />
                            <Form.Control type="password" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* ----------***FILA 4***----------- */}
                    <h4 className="text-center text_label">Redes Sociales</h4>
                <Form.Row>
                    {/* --------FACEBOOK------ */}
                    <Col xs="6" >
                        <Form.Group className="d-flex align-items-center">
                            <i class="fab fa-facebook-square fa-2x pr-1" style={{color: "#0f8cf0"}} />
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    {/* --------GITHUB------ */}
                    <Col xs="6" >
                        <Form.Group className="d-flex align-items-center">
                            <i class="fab fa-github fa-2x pr-1" />
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    {/* --------LINKEDIN------ */}
                    <Col xs="6" >
                        <Form.Group className="d-flex align-items-center">
                            <i class="fab fa-linkedin fa-2x pr-1" style={{color: "#0c65c2"}} />
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    {/* --------TWITTER------ */}
                    <Col xs="6" >
                        <Form.Group className="d-flex align-items-center">
                            <i class="fab fa-twitter-square fa-2x pr-1" style={{color: "#00a3f2"}} />
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    {/* --------BIOGRAFIA------ */}
                    <Col>
                        <Form.Group>
                            <Form.Label className="text_label">Biografia:</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                    <div className="w-100 text-right">
                        <Button type="submit" className="login_button ml-3">
                            Guardar cambios
                        </Button>
                    </div>
            </Form>
        </>
    )
}
