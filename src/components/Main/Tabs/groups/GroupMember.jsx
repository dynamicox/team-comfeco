import React from 'react'
import { Image } from "react-bootstrap";

export const GroupMember = () => {
    return (
        <div className="d-flex my-3 pb-2 border-bottom">
            <Image
            roundedCircle
            height="50"
            src="https://via.placeholder.com/150"
            style={{backgroundColor:"grey"}}
            />
            <div className="ml-1 mr-auto">
                <h6>Member Name</h6>
                <p className="text-muted">something</p>
            </div>
                <p className="text-muted mt-auto">integrante</p>
        </div>
    )
}
