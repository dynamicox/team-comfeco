import React from 'react'
import { Card } from "react-bootstrap";
import { RecentSVG } from "../../../../assets/images/RecentASVG";


export const RecentActivity = () => {
    return (
        <>
             <p className={"title-actividad mb-2"}>Actividad reciente</p>
                <Card className={"shadow-sm"}>
                  <div className="d-flex justify-content-between align-items-center px-2 py-1">
                  <p className={"m-0"}>Insignias</p>
                  <RecentSVG />
                  </div>
                </Card>
        </>
    )
}
