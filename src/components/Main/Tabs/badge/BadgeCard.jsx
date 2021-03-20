import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

const lockedBadge={
    "WebkitFilter":" grayscale(100%)",
    "filter": "grayscale(100%)",
}



export const BadgeCard = ({badgeName, badgeDescription, badgeImgUrl, howToGet ,status}) => {
    return (
        <>
            <Col lg="3" md="6" xs={status && {span:12, order:'first'}}>
                    <Card className={`text-center d-flex align-items-center pt-4 my-5 ${status && "shadow"}`}>
                        <Image 
                            height="170"
                            width="180"
                            src={badgeImgUrl}
                            style={status ? null :lockedBadge }
                          
                        />
                        <Card.Body>
                        <h3 className="text_label font-weight-bold">{badgeName || "Badge Name"}</h3>
                            <p className="overflow-hidden" style={{height:"70px"}}>
                                {status ? badgeDescription :
                                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam culpa"
                                 }
                            </p> 

                            {!status &&
                                <div>
                                    <hr />
                                    <h5 className="text_label">¿Como conseguirla?</h5>
                                    <p className="text-muted overflow-hidden" style={{height:"50px"}} >{howToGet || "Lorem ipsum dolor sit amet consectetur adipisicing elit" }</p> 
                                </div>
                            }
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}
