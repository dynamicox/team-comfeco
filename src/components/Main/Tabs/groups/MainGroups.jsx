import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { CardsContainer } from "./CardsContainer";
import { MyGroupsCard } from './MyGroupsCard';
import { useStorage } from "../../../../contexts/StorageContext";
import { useAuth } from "../../../../contexts/AuthContext";
import { useForm } from "react-hook-form";

export const MainGroups = () => {
    const methods = useForm({mode:"onChange"})
    const { getCollection, getFilteredDocuments, getProfileInfo } = useStorage()
    const { currentUser } = useAuth()
    const [allGroups, setAllGroups] = useState([])
    const [userGroup, setUserGroup] = useState()
    const [topicsArray, setTopicsArray] = useState([])
    const _isMounted = useRef(true);

    async function onSubmit(data) {
        setAllGroups([])
        const searchRegex = new RegExp(`${data.group}`, 'i')
        let grupos;

        try {
            if(data.category){
                const filterObj = {collectionName: "groups", conditionsArray: ['topic', '==', data.category]}
                grupos = await getAllGroups( filterObj )
            }else {
                grupos = await getAllGroups()
            }

                grupos.forEach((doc)=>{
                    const {groupInfo} = doc 

                    if(groupInfo.groupName.match(searchRegex) || groupInfo.description.match(searchRegex)){
                        
                        if (_isMounted.current) {
                            setAllGroups(val => [...val, doc])
                        }
                    }
                })
        } catch (error) {
            console.log(error)
        }

    }

    async function getAllGroups(filterObj) {
        let res = []
        let query;
        if(filterObj){
            const { collectionName, conditionsArray } = filterObj
            query  = await getFilteredDocuments(collectionName, conditionsArray);
        }else{
            query = await getCollection('groups')
        }

        query.forEach((doc)=>{
            
            res.push({groupId:doc.id, groupInfo: doc.data()})
        })
        return res
    }

    useEffect(() => {
        async function fetchData() {     
            try {
                const profile = await getProfileInfo(currentUser.uid)

                _isMounted.current && setUserGroup(profile.data().group);
                const grupos = await getAllGroups()
                _isMounted.current &&  setAllGroups(grupos)
                    grupos.forEach(doc=> setTopicsArray(val => {
                        if(!val.includes(doc.groupInfo.topic)){
                            return [...val, doc.groupInfo.topic]
                        }else return val
                    }))
            } catch (error) {
                console.log(error)
            }
        }

    fetchData()

    return () => {
        _isMounted.current = false;
    };

    }, [])
    
    return (
        <div style={{minHeight: "100vh"}}>
            <h1 className="text-center text_label my-5 font-weight-bold">Grupos</h1>
            <Row noGutters>
                <Col xl="3" md="4"  className="px-3">
                    <MyGroupsCard userGroup={userGroup} userId={currentUser.uid} setUserGroup={setUserGroup}/>
                </Col>
                <Col xl="9" md="8">
                    <Form className="px-3" onSubmit={methods.handleSubmit(onSubmit)}>
                        <Form.Row >
                            <Col xs="3">
                                <Form.Group className="mt-2" >
                                    <Form.Control as="select" name="category" ref={methods.register}>
                                        <option value="">Seleccione una categoria</option>
                                        {topicsArray && 
                                                topicsArray.map((topic, idx)=> {
                                                    if(topic) return <option key={idx}>{topic}</option>
                                                })
                                                }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col xs="8">
                                <Form.Group className="d-flex">
                                    <Form.Control name="group" ref={methods.register} type="text" />
                                </Form.Group>
                            </Col>
                            <Col xs="1">
                                    <Button className="mt-2" variant="outline-info" type="submit">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                        <CardsContainer allGroups={allGroups} userGroup={userGroup} setUserGroup={setUserGroup} />
                </Col>
            </Row>
        </div>
    )
}
