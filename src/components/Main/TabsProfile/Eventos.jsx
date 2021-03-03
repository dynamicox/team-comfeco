import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Eventos = () => {
    return (
        <>
            <Col className="my-3 py-3 bg-content-profile"  >
                      <Col xs="12" className="mb-2">
                        <p className={"m-0"}>Eventos de tu interes</p>
                        <Link
                          className={"edit float-right"}
                          to="update/profile"
                        >
                          Ver más
                        </Link>
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
                              Más información
                            </span>
                          </div>
                        </div>
                      </Col>
            </Col>  
        </>
    )
}
