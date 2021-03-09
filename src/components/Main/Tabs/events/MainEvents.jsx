import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { EventCard } from "./EventCard";

export const MainEvents = () => {
    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3">Eventos activos</h1>
             <Row className="mb-5">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
             </Row>
        </Container>
    )
}
