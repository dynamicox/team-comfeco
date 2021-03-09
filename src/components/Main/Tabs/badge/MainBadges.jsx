import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BadgeCard } from './BadgeCard'

export const MainBadges = () => {
    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3">Insignias</h1>
            <Row className="px-3">
                <BadgeCard
                badgeName="Sociable"
                howToGet="Complete los datos de su perfil para obtener esta insignia."
                />
                <BadgeCard />
                <BadgeCard />
                <BadgeCard />
            </Row>
        </Container>
    )
}
