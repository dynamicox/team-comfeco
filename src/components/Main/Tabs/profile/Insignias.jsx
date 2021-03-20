import React, { useEffect, useState } from 'react'
import { Image } from "react-bootstrap";
import { useStorage } from "../../../../contexts/StorageContext";
import { LoadingSpiner } from '../../../LoadingSpiner';

export const Insignias = ({userBadges}) => {
  const {getCollection, loading} = useStorage()
  const [badgesImg, setBadgesImg] = useState([])

  useEffect(()=>{
    async function getData() {
      const badgesCollection = await getCollection('badges')
      let data = []
        badgesCollection.forEach(doc => {
          if(userBadges.includes(doc.id)){
            data.push(doc.data().imgUrl)
          }else{
            data.push("https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616242230/tech%20logos/fffffe_iju8q4.png")
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
                { loading ?
                  <LoadingSpiner />
                  :
                badgesImg && 
                  badgesImg.map( (element, idx) => {
                    return <Image className="mx-3 bg-light" key={idx} src={element || '' } roundedCircle height={"65px"} width="65px"/>
                  })
                }
            </div>
        </div>
        </>
    )
}
