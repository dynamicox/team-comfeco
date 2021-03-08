import React from 'react';
import { Image, Badge, Row, Col } from 'react-bootstrap';
import './style.css';
export const Workshop = (props) => {
	return (
		<>
			<Badge className='align-self-end WorkshopCard_teacher mb-1'>{props.coach}</Badge>
			<Row className='WorkshopCard flex p-0 mb-3'>
				<Col
					xl={5}
					className='WorkshopCard_left  text-center align-self-center py-3 font-weight-bold'
				>
					<span className='h4 font-weight-bold'>{props.time}</span>
					<br />
					<span className='h5 text-center font-weight-bold'>PM</span>
				</Col>
				<Col xl={7} className=' d-flex flex-column  WorkshopCard_right '>
					<p className='CommunityBadge__title fs-1 fw-bold text-center py-3'>
						{props.name}
					</p>
				</Col>
			</Row>
		</>
	);
};
