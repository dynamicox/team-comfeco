
import React from 'react'
import { Button, Image,Container, Badge,Row, Col, Toast } from 'react-bootstrap'
import './style.css'
export const CommunityBadge = (props) => {
	return (
        <>
		<Row className="CommunityBadge mb-3 p-2 flex  " >
            <Col className="CommunityBadge__img col-4 text-center align-self-center">
                <Image  width={68} height={68} className="mr-3" src={props.url} roundedCircle />
            
            </Col>
            <Col className=" d-flex flex-column col-8 ">
            <p className="CommunityBadge__title fs-1 fw-bold text-center">{props.name}</p>
            <Badge variant="primary" className="align-self-end">Follow</Badge>
            </Col>
        </Row>
        </>
    )
};
