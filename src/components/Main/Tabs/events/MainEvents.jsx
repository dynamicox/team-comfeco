import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { EventCard } from "./EventCard";
import { useStorage } from "../../../../contexts/StorageContext";

export const MainEvents = () => {
    const { getCollection } = useStorage()
    const [events, setEvents] = useState([])

    useEffect( ()=>{
        async function getData() {
            try {
                const { docs } = await getCollection("events")
                let data= []

                docs.forEach(element => {
                    data.push({eventId: element.id, eventData: element.data()})
                })
             setEvents(data)
             
            } catch (error) {
                alert(error.message)
            }
        }
        getData()
    }, [])
    
    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3">Eventos activos</h1>
             <Row className="mb-5">
                { events.length > 0 ?
                    events.map((element)=>{
                        const {eventImgUrl, description} = element.eventData
                        return <EventCard eventId={element.eventId} key={element.eventId} imgUrl={eventImgUrl} eventDescription={description} />
                    }) : <h1 className="text_label pt-5">No hay eventos disponibles, Regrese mas tarde...</h1>
                }
             </Row>
        </Container>
    )
}
