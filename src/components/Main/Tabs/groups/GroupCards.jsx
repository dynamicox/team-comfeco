import React from 'react'
import { Card, Image, Col, Button } from 'react-bootstrap'

export const GroupCards = () => {
    return (
        <Col lg="3" md="4" sm="6" className="py-4">
            <Card>
                <Image
                src="https://via.placeholder.com/150"
                height="140"
                />
                <Card.Body className="px-1">
                    <div className="bg-warning w-50 text-center">Javascript</div>
                    <h5 className="text_label">Group Title</h5>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptatem accusamus labore eos exercitationem repudiandae
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
