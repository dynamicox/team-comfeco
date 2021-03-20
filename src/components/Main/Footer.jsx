import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
export const Footer = () => {
	return (
		<>
		<Container fluid className='footer-dark '>
			<Row noGutters>
				<Col  md={{span:"3", order:"first"}} xs={{span:"12", order:"last"}} className="text-center">
					<h3>ABOUT US</h3>
					<Row noGutters>
						<Col className="mt-1" xs="6" md="12" >
						<i className='fab fa-github fa-lg'/> 
						<a href='https://github.com/dynamicox' target='_blank'
						className="text-light pl-2">Dynamicox</a>
					</Col>
					<Col className="mt-1" xs="6" md="12">
						<i className='fab fa-github fa-lg'/> 
						<a href='https://github.com/FernandoGavilan2000' target='_blank'
						className="text-light pl-2">FernandoGavilan</a>
					</Col>
					<Col className="mt-1" xs="6" md="12">
						<i className='fab fa-github fa-lg'/> 
						<a href='https://github.com/wilcoxmarin' target='_blank'
						className="text-light pl-2">Wilcoxmarin</a>
					</Col>
					<Col className="mt-1" xs="6" md="12">
						<i className='fab fa-github fa-lg'/> 
						<a href='https://github.com/kevocam' target='_blank'
						className="text-light pl-2">Kevocam</a>
						<br />
					</Col>
					</Row>
						<p className='copyright'>© TeamReact40 2021</p>
				</Col>
				<Col md="6" className="px-3">
					<h3>Team React 40</h3>
							<p className="text-justify">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eum sint quaerat
								architecto. Rem beatae iste ipsum
								excepturi tenetur ut commodi consequatur
								incidunt totam iusto. A, nulla. Ab ratione
								ad velit?
							</p>
				</Col>
				<Col md={{span:"3", order:"last"}} xs={{span:"12", order:"first"}} className="text-center" >
					<a href='#' className="text-light mx-3">
						<i className='fab fa-facebook-f fa-lg '></i>
					</a>
					<a href='#' className="text-light mx-3">
						<i className='fab fa-twitter fa-lg'></i>
					</a>
					<a href='#' className="text-light mx-3">
						<i className='fab fa-discord fa-lg'></i>
					</a>
					<a href='#' className="text-light mx-3">
						<i className='fab fa-instagram fa-lg'></i>
					</a>
				</Col>
			</Row>
		</Container>
		</>

	);
};
