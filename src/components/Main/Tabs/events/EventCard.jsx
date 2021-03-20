import React, { useEffect, useState } from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useStorage } from "../../../../contexts/StorageContext";
import { useAuth } from "../../../../contexts/AuthContext";
import { ConfirmModal } from "../../../Forms/ModalSuccesMessage";


export const EventCard = ({imgUrl, eventDescription, eventId,eventTitle}) => {
	const [toggleModal, setToggleModal] = useState(false)
    const {editProfile, getProfileInfo, grantUserABadge, FieldValue} = useStorage()
    const [enrolled, setEnrolled] = useState(false)
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth()

    const addEventToProfile = async () => {
        try {
            setLoading(true)
            await editProfile(currentUser.uid, {events: FieldValue.arrayUnion(eventId)})
            grantUserABadge('CVwTCPIWxP23YqToZzr7')
                
            setEnrolled(true)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const removeEvent = async () => {
        try {
            setLoading(true)

            await editProfile(currentUser.uid, {events: FieldValue.arrayRemove(eventId)})
            setEnrolled(false)
            setLoading(false)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() =>{
        async function getData() {
           try {
                const perfil = await getProfileInfo(currentUser.uid)
                    if(perfil.data().events) {
                        const eventsArray = perfil.data().events
                    if(eventsArray.includes(eventId)){
                        setEnrolled(true)
                        }
                    }
           } catch (error) {
               console.log(error.message)
           }
        }
        getData()
    }, [])

    return (
        <>
        <Col lg="4" md="6">
            <Card className="my-5">
                <Image
                src={imgUrl || "https://via.placeholder.com/150"}
                height="220"
                />
                <Card.Body>
                    <h3 className="overflow-hidden" style={{height:"40px"}}> {eventTitle || "Title Event Confe"}</h3>
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
                        <Button  className="alt_button w-50" onClick={()=>setToggleModal(true)} disabled={loading} >
                            Abandonar
                        </Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>    
               <ConfirmModal
                    modalTitle="Espere"
                    ModalIcon="fas fa-exclamation-triangle text-danger"
                    toggleModal={toggleModal} 
                    modalMessage="¿Esta seguro que quiere abandonar este evento?"
                    settoggleModal={()=>{setToggleModal(val => !val)}}
                    onConfirm={()=> {
                        removeEvent()
                        setToggleModal(val => !val)
                    }}
                />
        </>
    )
}
