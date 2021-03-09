import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

export const BadgeCard = ({badgeName, badgeDescription, badgeImgUrl, howToGet }) => {
    return (
        <>
            <Col lg="3" md="6">
                    <Card className="text-center d-flex align-items-center pt-4 my-5">
                        <Image 
                            roundedCircle="true"
                            height="170"
                            width="170"
                            /* src={badgeImgUrl} */
                            style={{backgroundColor:"grey"}}
                        />
                        <Card.Body>
                        <h3 className="text_label">{badgeName || "Badge Name"}</h3>
                            <p>{badgeDescription || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam culpa"}</p> 
                            <hr />
                        <h5 className="text_label">¿Como conseguirla?</h5>
                            <p className="text-muted">{howToGet || "Lorem ipsum dolor sit amet consectetur adipisicing elit" }</p> 
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}
