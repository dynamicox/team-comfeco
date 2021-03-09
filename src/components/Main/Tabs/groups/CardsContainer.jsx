import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GroupCards } from "./GroupCards";

export const CardsContainer = () => {
    return (
        <Container>
            <Row lg="10">
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
            </Row>
        </Container>
    )
}
