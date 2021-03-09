import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Eventos = () => {
    return (
        <>
            <Col className="my-3 py-4 bg-content-profile"  >
                      <Col xs="12" className="mb-2">
                        <p className={"m-0"}>Eventos de tu interes</p>
                      </Col>
                      <Col
                        xs={12}
                        className={"text-center p-0 py-3"}
                      >
                        <Image
                          rounded
                          src={
                            "https://i.pinimg.com/736x/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
                          }
                          width={"120px"}
                        />
                        <div className={"bg-event mt-2 rounded"}>
                          <p className={"text-white"}>
                            Ecommunity Fest and Code
                          </p>
                          <div
                            className={
                              "d-flex justify-content-between px-3 py-2"
                            }
                          >
                            <span className={"p-2 pointer"}>Abandonar</span>
                            <span className={"ver-mas p-2 rounded pointer"}>
                              Saber mas
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Link className={"edit float-right pb-2 mb-2" } to="update/profile" >
                          Ver más
                        </Link>
            </Col>  
        </>
    )
}
