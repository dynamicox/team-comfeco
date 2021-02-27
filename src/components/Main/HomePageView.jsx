import React from 'react';
import { Button, Card, CardGroup, CardDeck, Container, Row, Col, Toast, Image } from 'react-bootstrap';

import { Navigation } from './Navigation';
import { Footer } from "./Footer";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { CommunityBadge } from './CommunityBadge';
import { CardCustom } from './CardCustom';
import { Counter } from './Counter'; 

export const HomePageView = () => {

	return (
		<>
		<Navigation />
		<Container fluid={true}>
			<Row noGutters={true}>
				<Col md="2">
					<div style={{border:"1px solid black"}} className="mt-5">
						<div>
							<span className="mr-5">Comunidades</span>
							<span>Ver mas</span>
						</div>
					</div>
				</Col>
				<Col>
					<h1 className="text_label text-center pt-4">
						Bienvenidos a Comunity Fest and Code!
					</h1>
					<h4 className="text_label text-muted text-center">
						Conoce gente, aprende y gana!
					</h4>
					<p className="mt-3  text_label">
						La próxima edición regresa en el 2022, en
						la cual se planea involucrar a todos los
						programadores independientmente del area
						de conocimiento que se encuentre, todo con
						un mismo proposito, aprender en comunidad.
					</p>
						<h2 className="text_label pt-5 text-center">Ellos ya creen en esta iniciativa</h2>
					<Swiper
					slidesPerView={4}
					spaceBetween={10}
					navigation
					pagination={{ clickable: true }}
					className='text-center mt-5'
					>
						<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Jonathan Silverio'
								/>
							</SwiperSlide>
					</Swiper>

					{/* SPONSORS */}
					<h2 className="text_label pt-5 text-center">Sponsors</h2>
					<Swiper
					slidesPerView={4}
					spaceBetween={10}
					navigation
					pagination={{ clickable: true }}
					className='text-center mt-5 mb-3'
					>
						<SwiperSlide>
								<Image src="http://assets.stickpng.com/images/58ac4d880aaa10546adf2711.png"
									roundedCircle
									style={{height: "100px", backgroundImage: "fit"}}
								/>
						</SwiperSlide>
					</Swiper>
				</Col>
				<Col md="2" className="w-100">
					<div style={{border:"1px solid black"}} className="mt-5">
						<div>
							<span className="mr-5">Talleres</span>
							<span className="ml-5">Ver mas</span>
						</div>
					</div>
				</Col>
			</Row>
				<Counter/>
		</Container>
		<Footer />
			
		</>
	);
};
