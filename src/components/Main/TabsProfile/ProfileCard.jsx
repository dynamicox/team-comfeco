import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
    return (
        <>
            <Row className={"d-flex justify-content-center py-3"}>
                  <Col
                    xl={11}
                    lg={11}
                    md={12}
                    sm={12}
                    xs={12}
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
                        <p className={"nick m-0"}>Nick del usuario</p>
                        <p className={"job"}>Frontend Developer / UI/UIX</p>
                      </Col>
                      <Col xs={12}>
                        <p className={"experiencia m-0"}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusamus aliquam amet, animi at culpa deserunt
                          eius facilis fuga in inventore ipsam laborum modi
                          molestiae nulla odio quis, reprehenderit sed
                          voluptates?
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
