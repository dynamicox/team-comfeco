import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './style.css';

export const CardCustom = (props) => {

	function logoProvider(logoType) {
		switch (logoType.toLowerCase()) {
			case "react":
				return "https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616091854/tech%20logos/angular_mdqjmp.png"
			case "angular":
				return "https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616092394/tech%20logos/iconfinder_React.js_logo_1174949_bldk8q.png"
			case "vue":
				return "https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616091959/tech%20logos/vue_ddrfny.png"
			case "svelte":
				return "https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616092790/tech%20logos/Svelte_logo_by_gengns_wctgae.svg"
			default:
				break;
		}
	}

	return (
		<Card  >
			<Image  height={250} src={props.background}   />
			<div className="d-flex justify-content-center w-100 h-25">
					<Image
					className='CardCustom__img'
					width={40}
					height={40}
					roundedCircle
					src={logoProvider(props.avatar)}
				/>
			</div>
			<Card.Body className='CardCustom__img h-25 py-0'>
				<Card.Title className="text-center text_label" style={{height:"40px"}}>{props.title}</Card.Title>
			</Card.Body>
		</Card>
	);
};
export default CardCustom;
