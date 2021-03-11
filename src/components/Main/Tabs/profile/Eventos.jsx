import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ProfileEventCard } from "../events/ProfileEventCard";
import { useStorage } from "../../../../contexts/StorageContext";


export const Eventos = ({currentUser}) => {
  const { getOneDocument, getProfileInfo } = useStorage()    
  const [userEvents, setUserEvents] = useState([])

  useEffect(async () => {
    const profile = await getProfileInfo(currentUser.uid)

    profile.data().events.forEach(element => {
      getOneDocument('events', element).then((data)=>{
        const {name, eventImgUrl} = data.data()
        setUserEvents(val => [...val, {name, eventImgUrl}])
      })
    });
  
  }, [])

    return (
        <>
          <div className="overflow-auto my-3 bg-content-profile py-2 px-2" style={{height:"350px"}}>
                <div className="d-flex justify-content-between px-2 mb-3 border-bottom">
                  <p className="text_label" style={{fontSize:"14px"}}>Eventos de tu interes</p>
                  <Link to="./events">
                   Ver mas...
                  </Link>
                </div> 
                {userEvents.length <= 0 ? <h1>Loading</h1> : 
                  userEvents.map((element, id)=>{
                    return <ProfileEventCard key={id} eventTitle={element.name} eventImgUrl={element.eventImgUrl} />
                  })
                }
          </div>
        </>
    )
}