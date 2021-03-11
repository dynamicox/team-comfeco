import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import { CardsContainer } from "./CardsContainer";
import { MyGroupsCard } from './MyGroupsCard';
import { useStorage } from "../../../../contexts/StorageContext";

export const MainGroups = () => {
    const { getCollection } = useStorage()
    const [allGroups, setAllGroups] = useState([])
    const [topicsArray, setTopicsArray] = useState([])

    useEffect(async () => {
        getCollection('groups').then((query)=>{
           // console.log(query)
            query.forEach((doc)=>{
                setAllGroups(val => [...val, doc.data()])
                setTopicsArray( val => [...val, doc.data().topic])
            })
        })
    }, [])
    
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
                                        <option>Select an option</option>
                                        {topicsArray.length <= 0 ? <option>No hay</option> : 
                                                topicsArray.map((topic)=> {
                                                    console.log(topic)
                                                    return <option>{topic}</option>
                                                })
                                                }
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
                    <CardsContainer allGroups={allGroups} />

                </Col>
            </Row>
        </div>
    )
}
