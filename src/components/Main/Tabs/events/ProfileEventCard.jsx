import React from 'react'
import { Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ProfileEventCard = ({eventTitle, eventImgUrl}) => {
    return (
        <div className=" my-3 text-center">
            <p className="text_label mb-2">{ eventTitle ||"Titulo"}</p>
            <Card className="mx-1">
                <Card.Img 
                src={eventImgUrl || "https://via.placeholder.com/150"}
                />
                <Card.ImgOverlay className="d-flex align-items-end">
                <div className="rounded w-100 d-flex justify-content-center align-items-end" >
                    <Link to="./events">
                        <Button size="sm" className=" badge-pill">Mas informacion...</Button>
                    </Link>
                </div>
                </Card.ImgOverlay>
            </Card> 
            <hr/>
        </div>
    )
}
