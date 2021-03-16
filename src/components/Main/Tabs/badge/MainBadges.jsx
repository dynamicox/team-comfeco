import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BadgeCard } from './BadgeCard'

//Medallas
import medalla1 from "../../../../assets/medallas/medalla1.png"
import medalla2 from "../../../../assets/medallas/medalla2.png"
import medalla3 from "../../../../assets/medallas/medalla3.png"
import medalla4 from "../../../../assets/medallas/medalla4.png"

export const MainBadges = () => {
    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3 font-weight-bold">Insignias</h1>
            <Row className="px-3">
                <BadgeCard
                badgeName="Sociable"
                howToGet="Complete los datos de su perfil para obtener esta insignia."
                badgeImgUrl={medalla1}
                badgeDescription={"Muestra tus conocimientos a los demás con tu nuevo perfil."}
                status={true}
                />
                <BadgeCard badgeImgUrl={medalla2} badgeName="Idol" status={false}/>
                <BadgeCard badgeImgUrl={medalla3}  badgeName="Hero" status={false}/>
                <BadgeCard badgeImgUrl={medalla4}  badgeName="Master" status={false}/>
            </Row>
        </Container>
    )
}
