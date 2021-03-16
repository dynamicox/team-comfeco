import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GroupCards } from "./GroupCards";
import { useStorage } from "../../../../contexts/StorageContext";
import { useAuth } from "../../../../contexts/AuthContext";

export const CardsContainer = ({allGroups, userGroup, setUserGroup}) => {
    const { joinGroup, grantUserABadge } = useStorage()
    const { currentUser } = useAuth()

    function addUserToGroup(groupId) {
        grantUserABadge('BevZlLSHjWeFg5Z6EiUC');
        joinGroup(groupId, currentUser.uid, "Integrante");
    }

    return (
        <Container>
            <Row lg="10">
               {allGroups.length > 0 && 
               allGroups.map((doc, idx)=> 
                    <GroupCards key={idx}
                    groupId={doc.groupId}
                    groupTitle={doc.groupInfo.groupName} 
                    groupImg={doc.groupInfo.groupImg} 
                    groupDescription={doc.groupInfo.description}
                    groupTopic={doc.groupInfo.topic}
                    joinGroup={addUserToGroup}
                    userGroup={userGroup}
                    setUserGroup={setUserGroup}
                    />
               )}
            </Row>
        </Container>
    )
}
