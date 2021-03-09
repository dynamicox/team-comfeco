import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { GroupMember } from "./GroupMember";

export const MyGroupsCard = () => {
    return (
        <Card style={{backgroundColor:"#f3f3f3"}}>
            <Card.Body className="px-3 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="mr-auto">Mi Grupo</span>
                    <Link>Ir al Grupo</Link>
                </div>
                <div className="bg-dark rounded text-light d-flex justify-content-between align-items-center px-2">
                    <h5 className="text_label">Group Title</h5>
                    <i className="fab fa-js fa-lg text-warning" />
                </div>
                <div>
                    <GroupMember />
                    <GroupMember />
                    <GroupMember />
                    <GroupMember />
                    <GroupMember />
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <Button size="sm" >Abandonar</Button>
                    <Button size="sm" >Ir al Chat</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
