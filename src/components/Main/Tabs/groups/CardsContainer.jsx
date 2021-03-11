import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GroupCards } from "./GroupCards";

export const CardsContainer = ({allGroups}) => {
    return (
        <Container>
            <Row lg="10">
               {allGroups.length > 0 && allGroups.map((group)=>{
                   console.log(group)
                   return <GroupCards groupTitle={group.groupName} groupImg={group.groupImg} 
                   groupDescription={group.description}
                   groupTopic={group.topic} />
               })}
            </Row>
        </Container>
    )
}
