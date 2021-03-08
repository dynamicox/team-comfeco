import React from 'react';
import { Button, Image, Container, Badge, Row, Col, Toast } from 'react-bootstrap';
import './style.css';
export const CommunityBadge = (props) => {
	return (
		<>
			<Row className='CommunityBadge flex pt-1 pb-1 mb-3'>
				<Col
					xl={3}
					className='CommunityBadge__img  text-center align-self-center BadgeSideLeft'
				>
					<Image width={60} height={60} src={props.url} roundedCircle />
				</Col>
				<Col xl={9} className='d-flex flex-column'>
					<p className='CommunityBadge__title fs-1 fw-bold text-center'>
						{props.name}
					</p>
					<Badge className='align-self-end followbadge'>Follow</Badge>
				</Col>
			</Row>
		</>
	);
};
