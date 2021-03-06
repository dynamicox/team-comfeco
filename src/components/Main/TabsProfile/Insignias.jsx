import React from 'react'
import { Col, Image, Row } from "react-bootstrap";


export const Insignias = () => {
    return (
        <>
            <div className={"py-3"}>
                  <Row className={"bg-content-insignias py-2 rounded"}>
                    <Col
                      xl={4}
                      lg={4}
                      md={12}
                      sm={12}
                      xs={12}
                      className={"text-center"}
                    >
                      <p className={"m-0 text-white"}>Insignias</p>
                    </Col>
                    <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                      <Row>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={"p-0"}
                        >
                          <Image
                            width={"70px"}
                            roundedCircle
                            src={"https://fondosmil.com/fondo/17541.jpg"}
                          />
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={"p-0"}
                        >
                          <Image
                            width={"70px"}
                            roundedCircle
                            src={"https://fondosmil.com/fondo/17541.jpg"}
                          />
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={"p-0"}
                        >
                          <Image
                            width={"70px"}
                            roundedCircle
                            src={"https://fondosmil.com/fondo/17541.jpg"}
                          />
                        </Col>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={"p-0"}
                        >
                          <Image
                            width={"70px"}
                            roundedCircle
                            src={"https://fondosmil.com/fondo/17541.jpg"}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>                  
                </div>
        </>
    )
}
