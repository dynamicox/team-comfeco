import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileCard = ({username, field, biography}) => {
    return (
        <>
            <Row className={"d-flex justify-content-center py-3"} >
                  <Col
                    lg={11}
                    md={12}
                    className={"bg-content-profile py-3"}
                  >
                    <Row className={"p-0"}>
                      <Col
                        xs={12}
                        className={"text-center p-0 py-3"}
                      >
                        <Image
                          src={
                            "https://i.pinimg.com/736x/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
                          }
                          roundedCircle
                          width={"120px"}
                        />
                      </Col>
                      <div className="posision-edit" >
                        <Link className="edit" to="update/profile">
                          Editar perfil
                        </Link>
                      </div>
                      <Col
                        xs={12}
                        className={"text-center mb-2"}
                      >
                        <p className={"nick m-0"}>{username}</p>
                        <br />
                        <p className={"job"}> {field || ""} </p>
                      </Col>
                      <Col xs={12}>
                        <p className={"experiencia m-0"}>
                          {biography || "Edita tu perfil y cuentanos un poco mas sobre ti"}
                        </p>
                      </Col>
                      <Col
                        xs={12}
                        className={"border-top mt-2 pt-3"}
                      >
                        <Row>
                          <Col xs={3}>
                            <Image
                              width={"40px"}
                              roundedCircle
                              src={"https://fondosmil.com/fondo/17541.jpg"}
                            />
                          </Col>
                          <Col xs={3}>
                            <Image
                              width={"40px"}
                              roundedCircle
                              src={"https://fondosmil.com/fondo/17541.jpg"}
                            />
                          </Col>
                          <Col xs={3}>
                            <Image
                              width={"40px"}
                              roundedCircle
                              src={"https://fondosmil.com/fondo/17541.jpg"}
                            />
                          </Col>
                          <Col xs={3}>
                            <Image
                              width={"40px"}
                              roundedCircle
                              src={"https://fondosmil.com/fondo/17541.jpg"}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
        </>
    )
}
