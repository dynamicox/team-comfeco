import React, { useEffect, useRef, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { EventCard } from "./EventCard";
import { useStorage } from "../../../../contexts/StorageContext";
import { LoadingSpiner } from '../../../LoadingSpiner';

export const MainEvents = () => {
    const { getCollection, loading, setLoading } = useStorage()
    const [events, setEvents] = useState([])
    const _isMounted = useRef(true);

    useEffect( ()=>{
        async function getData() {
            setLoading(true)
            try {
                const { docs } = await getCollection("events")
                let data= []
                docs.forEach(element => {
                    data.push({eventId: element.id, eventData: element.data()})
                })
                _isMounted.current && setEvents(data)
            } catch (error) {
                alert(error.message)
            }
            setLoading(false)
        }
        getData()
    }, [])
    
    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3 font-weight-bold">Eventos activos</h1>
             <Row className="mb-5">
                { loading ? 
                    <LoadingSpiner />
                        :
                    events ?
                        events.map((element)=>{
                            const {eventImgUrl, description, name} = element.eventData
                            return <EventCard eventTitle={name} eventId={element.eventId} key={element.eventId} imgUrl={eventImgUrl} eventDescription={description} />
                        }) : 
                    <div className="text-center w-100">
                        <h3 className="text_label pt-5">No hay eventos disponibles, Regrese mas tarde...</h3>
                    </div>
                }
             </Row>
        </Container>
    )
}
