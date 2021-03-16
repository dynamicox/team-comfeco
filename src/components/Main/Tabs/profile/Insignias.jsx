import React, { useEffect, useState } from 'react'
import { Image } from "react-bootstrap";
import { useStorage } from "../../../../contexts/StorageContext";

export const Insignias = ({userBadges}) => {
  const {getCollection} = useStorage()
  const [badgesImg, setBadgesImg] = useState([])

  useEffect(()=>{
    async function getData() {
      const badgesCollection = await getCollection('badges')
      let data = []
        badgesCollection.forEach(doc => {
          if(userBadges.includes(doc.id)){
            data.push(doc.data().imgUrl)
          }else{
            data.push("https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
          }
          
        })
        setBadgesImg(data)

    }
     getData()
  },[userBadges])

    return (
        <>
        <div className="d-flex w-100 bg-content-insignias py-2 px-3 rounded mt-3 text_label">
              Insignias
            <div className="d-flex justify-content-around w-75">
                {badgesImg && 
                  badgesImg.map( (element, idx) => {
                    return <Image className="mx-3 bg-light" key={idx} src={element || '' } roundedCircle height={"65px"} width="65px"/>
                  })
                }
            </div>
        </div>
        </>
    )
}
