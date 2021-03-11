import React, { useEffect, useState } from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useStorage } from "../../../../contexts/StorageContext";
import { useAuth } from "../../../../contexts/AuthContext";

export const EventCard = ({imgUrl, eventDescription, eventId}) => {
    const {editProfile, getProfileInfo} = useStorage()
    const [enrolled, setEnrolled] = useState(false)
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth()

    const addEventToProfile = async () => {
        const perfil = await getProfileInfo(currentUser.uid)
        let profileObj = {events: []}
        
        setLoading(true)

        if(perfil.data().events){
            const eventsArray = perfil.data().events
            eventsArray.push(eventId)
            profileObj.events = eventsArray

           await editProfile(currentUser.uid, profileObj)
            
        }else{
            profileObj.events = [eventId]
           await editProfile(currentUser.uid, profileObj)
        }
        setEnrolled(true)
        setLoading(false)
    }
    const removeEvent = async () => {
        const perfil = await getProfileInfo(currentUser.uid)
        const eventsArray = perfil.data().events

        setLoading(true)


        const filteredEvents = eventsArray.filter((ids)=>{
            if(ids === eventId) return false
            else return true
        })

        await editProfile(currentUser.uid, {events: filteredEvents})
        setEnrolled(false)
        setLoading(false)
    }

    useEffect(async () =>{
        const perfil = await getProfileInfo(currentUser.uid)
        if(perfil.data().events){
            const eventsArray = perfil.data().events
            if(eventsArray.includes(eventId)){
                setEnrolled(true)
            }
        }
    }, [])

    return (
        <>
        <Col lg="4">
            <Card className="my-5">
                <Image
                src={imgUrl || "https://via.placeholder.com/150"}
                height="220"
                />
                <Card.Body>
                    <p>{eventDescription || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos explicabo veniam molestiae, sunt mollitia aspernatur"}</p>

                    <div className="d-flex justify-content-between  mt-4">
                        <Link className="mt-2" to="/">
                            Mas informacion...
                        </Link>

                        { !enrolled ? 
                        <Button  className="alt_button w-50" onClick={addEventToProfile} disabled={loading} >
                            Participar
                        </Button>
                                :
                        <Button  className="alt_button w-50" onClick={removeEvent} disabled={loading} >
                            Abandonar
                        </Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>    
        </>
    )
}
