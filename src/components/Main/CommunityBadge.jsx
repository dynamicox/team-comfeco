import React from 'react';
import { Button, Image, Container, Badge, Row, Col, Toast } from 'react-bootstrap';
import './style.css';
export const CommunityBadge = (props) => {
	return (
		<>
			<Row className='CommunityBadge mb-3 pt-2 pb-2 flex' style={{ maxWidth: '95%' }}>
				<Col className='CommunityBadge__img col-3 text-center align-self-center BadgeSideLeft'>
					<Image
						width={65}
						height={65}
						className='mr-3'
						src={props.url}
						roundedCircle
					/>
				</Col>
				<Col className=' d-flex flex-column col-9 '>
					<p className='CommunityBadge__title fs-1 fw-bold text-center'>
						{props.name}
					</p>
					<Badge className='align-self-end followbadge'>Follow</Badge>
				</Col>
			</Row>
		</>
	);
};
