import React from 'react'
import { Card, Image, Col, Button } from 'react-bootstrap'

export const GroupCards = ({groupTitle, groupImg, groupDescription, groupTopic}) => {
    return (
        <Col lg="3" md="4" sm="6" xs="6" className="py-4">
            <Card className=" shadow-sm">
                <Image
                src={groupImg || "https://picsum.photos/200"}
                height="160"
                />
                <Card.Body className="px-0">
                    <div className="bg-warning w-50 text-center rounded-right">{groupTopic || 'Javascript'}</div>
                    <h5 className="text_label px-1">{ groupTitle || "Group Title" }</h5>
                    <p className="text-justify px-1">
                        { groupDescription || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptatem accusamus labore eos exercitationem repudiandae"}
                    </p>
                    <div className="text-center mt-3">
                        <Button>
                            Participar
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
