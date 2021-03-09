import React from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const EventCard = () => {
    return (
        <>
        <Col lg="4">
            <Card className="my-5">
                <Image
                src="https://via.placeholder.com/150"
                height="220"
                />
                <Card.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos explicabo veniam molestiae, sunt mollitia aspernatur</p>
                       <div className="d-flex justify-content-between  mt-4">
                            <Link className="mt-2">
                                Mas informacion...
                            </Link>

                            <Button  className="alt_button w-50">
                                Participar
                            </Button>
                       </div>
                </Card.Body>
            </Card>
        </Col>    
        </>
    )
}
