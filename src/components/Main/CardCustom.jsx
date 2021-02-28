import React from 'react';
import { Button, Card, Image, Container, Badge, Row, Col, Toast } from 'react-bootstrap';
import './style.css';

export const CardCustom = (props) => {
	return (
		<Card className='CardCustom__item'>
			<Card.Img variant='top' width={100} height={125} src={props.avatar} />
			<Card.Body>
				<Image
					className='CardCustom__img'
					width={50}
					height={50}
					roundedCircle
					src={props.avatar}
				/>
				<Card.Title>{props.title}</Card.Title>
			</Card.Body>
		</Card>
	);
};
export default CardCustom;
