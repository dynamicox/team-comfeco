import React from 'react'
import { Col, Image, Row } from "react-bootstrap";

import medalla1 from "../../../../assets/medallas/medalla1.png"
import medalla2 from "../../../../assets/medallas/medalla2.png"
import medalla3 from "../../../../assets/medallas/medalla3.png"
import medalla4 from "../../../../assets/medallas/medalla4.png"

export const Insignia =({image,status})=>{
  const lockedBadge={
    "-webkit-filter":" grayscale(100%)",
    "filter": "grayscale(100%)",
    "objectFit":"cover"
  }
  const Badge={
    "objectFit":"cover"
  }


  return(
    <Col
    xl={3}
    lg={3}
    md={3}
    sm={3}
    xs={3}
    className={"p-0"}
  >
    <Image
      width={"65px"}
      height={"65px"}
      roundedCircle
      src={image}
      style={status ? Badge : lockedBadge}
    />
  </Col>
  )
}

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
                        <Insignia image={medalla1} status={true}/>
                        <Insignia image={medalla2} status={false}/>
                        <Insignia image={medalla3} status={false}/>
                        <Insignia image={medalla4} status={false}/>
                      </Row>
                    </Col>
                  </Row>                  
                </div>
        </>
    )
}
