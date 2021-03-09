import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { CardsContainer } from "./CardsContainer";
import { MyGroupsCard } from './MyGroupsCard'

export const MainGroups = () => {
    
    return (
        <div style={{minHeight: "100vh"}}>
            <h1 className="text-center text_label my-5">Grupos</h1>
            <Row noGutters>
                <Col xl="3" md="4"  className="px-3">
                    <MyGroupsCard />
                </Col>
                <Col xl="9" md="8">
                    <Form className="px-3">
                        <Form.Row>
                            <Col xs="3">
                                <Form.Group className="mt-2" >
                                    <Form.Control as="select" >
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                        <option>Option</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                    <CardsContainer />
                </Col>
            </Row>
        </div>
    )
}
