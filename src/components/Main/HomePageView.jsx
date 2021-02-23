import { Button,Card, CardGroup, CardDeck, Container, Row, Col, Toast } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext";
import React from 'react'
import { Navigation } from "../../components/auth/Navbar";
import { Footer } from "../../components/auth/Footer";

import {CommunityBadge} from "./CommunityBadge"
import {CardCustom} from "./CardCustom"


export const HomePageView = () => {
    const { logOut } = useAuth() 

    return (     
        <>
            <Navigation />
            <Container className="contenedor">
            <Row>
                <Col className="col-3">                
                    <h2>Comunidades</h2>                
                    <CommunityBadge name="Comunidad de Programadores" url="https://avatarapi.com/images/person2.jpg" />
                    <CommunityBadge name="El Lenguaje de Programadores" url="https://avatarapi.com/images/person2.jpg" />
                    <CommunityBadge name="Latam Dev" url="https://avatarapi.com/images/person2.jpg" />                
                </Col>
                <Col className="col-6 text-center">
                    <h3>Bienvenidos a Community Fest and Code</h3>
                    <p className="mb-3">¡Conoce gente, aprende y gana!</p>
                    <p className="my-3 ">La próxima edición regresa en el 2022, en la cual se planea involucrar a todos los programadores independientmente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad.</p>
                    <div>
                    <CardDeck className="sliderCustom" >
                          <CardCustom background="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80" avatar="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" title="Kevin kevin"></CardCustom>
                          <CardCustom background="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=281&q=80" avatar="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" title="Kevin kevin"></CardCustom>
                          <CardCustom background="https://images.unsplash.com/photo-1485632840868-3759a496894f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" avatar="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" title="Kevin kevin"></CardCustom>
                          <CardCustom background="https://images.unsplash.com/photo-1485632840868-3759a496894f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" avatar="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" title="Kevin kevin"></CardCustom>
                    </CardDeck>
                    </div>
                </Col>
                <Col className="col-3">
                    <h2>Talleres</h2>
                </Col>
            </Row>
                <Button onClick={logOut}>Log out</Button>
            </Container>
            <Footer>
            </Footer>
        </>
    )
}
