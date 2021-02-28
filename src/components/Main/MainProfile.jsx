import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Navigation} from "./Navigation";
import { Footer } from './Footer';
import {Link, Route, Switch} from "react-router-dom";
import {Profile} from "./TabsProfile/Profile";


export const MainProfile = () => {
    return (
        <>
        <Navigation/>
        <Container fluid className={"p-0"}>
            <Row className={"py-3 border-bottom"}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                    <Row className={"d-flex justify-content-center align-items-center"}>
                        <Col xl={4}>
                            <Link to={"/sub/Profile"} className={"btn btn-outline-comfeco"}> Mi Perfil </Link>
                        </Col>
{/*                        <Col xl={4}>
                            <Link to={"/sub/Profile"} className={"btn btn-outline-comfeco"}> Mi Perfil </Link>
                        </Col>
                        <Col xl={4}>
                            <Link to={"/sub/Profile"} className={"btn btn-outline-comfeco"}> Mi Perfil </Link>
                        </Col>
                        <Col xl={4}>
                            <Link to={"/sub/Profile"} className={"btn btn-outline-comfeco"}> Mi Perfil </Link>
                        </Col>*/}
                    </Row>
                </Col>
            </Row>
            <Switch>
                <Route exact path="/sub/profile">
                    <Profile />
                </Route>
            </Switch>
        </Container>
            <Footer/>
        </>
    )
}
