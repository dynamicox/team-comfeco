import React from 'react'
import { Image } from "react-bootstrap";

export const GroupMember = ({username, role, field}) => {
    return (
        <div className="d-flex my-3 pb-2 border-bottom">
            <Image
            roundedCircle
            height="50"
            src="https://via.placeholder.com/150"
            style={{backgroundColor:"grey"}}
            />
            <div className="ml-1 mr-auto">
                <h6>{username ||"Member Name"}</h6>
                <p className="text-muted">{field || "Programmer"}</p>
            </div>
                <p className="text-muted mt-auto">{role || "Integrante"}</p>
        </div>
    )
}
