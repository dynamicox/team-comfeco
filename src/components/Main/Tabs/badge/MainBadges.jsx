import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { BadgeCard } from './BadgeCard'
import { useStorage } from "../../../../contexts/StorageContext";


export const MainBadges = () => {
    const [badges, setBadges] = useState([])
    const { getCollection, getProfileInfo, grantUserABadge } = useStorage()

    useEffect(()=>{
        async function getData() {
            const badgeColletion = await getCollection('badges')
            const profile = await getProfileInfo()
            const {badges} = profile.data()

            let badgeArray= []
            badgeColletion.forEach((doc)=>{
                let badgeObj = {status: false, badgeInfo: doc.data()}
                if(badges.includes(doc.id)) badgeObj.status = true
                badgeArray.push(badgeObj)
            })
            if(badges.length === badgeColletion.docs.length - 1){
                grantUserABadge('l15t2i97uk9QNxL1AK0D')
            }
            setBadges(badgeArray)
        }
        getData()
    }, [])

    return (
        <Container style={{minHeight: "100vh"}} fluid >
            <h1 className="text-center text_label  mt-3 font-weight-bold">Insignias</h1>
            <Row className="px-3">

                {badges && 
                    badges.map((element, idx)=>{
                        const {imgUrl, name, instructions, description} = element.badgeInfo

                        return <BadgeCard key={idx}
                                    status={element.status}
                                    badgeImgUrl={imgUrl} 
                                    badgeName={name} 
                                    badgeDescription={description} 
                                    howToGet={instructions} />
                    })
                }
            </Row>
        </Container>
    )
}
