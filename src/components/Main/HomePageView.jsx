import React from 'react';
import { Button, Card, CardGroup, CardDeck, Container, Row, Col, Toast, Image } from 'react-bootstrap';

import { Navigation } from './Navigation';
import { Footer } from './Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { CommunityBadge } from './CommunityBadge';
import { Workshop } from './Workshop';
import { CardCustom } from './CardCustom';
import { Counter } from './Counter';

export const HomePageView = () => {
	return (
		<>
			<Navigation />
			<Container fluid={true}>
				<Row noGutters={true}>
					<Col md='2'>
						<div className='mt-5'>
							<div>
								<h4>Comunidades</h4>
							</div>
							<CommunityBadge
								name='Comunidad de Programadores'
								url='https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg'
							/>
							<CommunityBadge
								name='Comunidad de Programadores'
								url='https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg'
							/>
							<CommunityBadge
								name='Comunidad de Programadores'
								url='https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg'
							/>
							<span className='font-weight-bold text-secondary'>
								Ver más...
							</span>
						</div>
					</Col>
					<Col>
						<h1 className='text_label text-center pt-4 font-weight-bold'>
							Bienvenidos a Comunity Fest and Code!
						</h1>
						<h4 className='text_label text-muted text-center font-weight-bold'>
							Conoce gente, aprende y gana!
						</h4>
						<p className='mt-3  text_label text-center'>
							La próxima edición regresa en el 2022, en la cual se
							planea involucrar a todos los programadores
							independientmente del area de conocimiento que se
							encuentre, todo con un mismo proposito, aprender en
							comunidad.
						</p>
						<h3 className='text_label pt-5 text-center font-weight-bold'>
							Ellos ya creen en esta iniciativa:
						</h3>
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
						<Button className='BtnApoyar mt-2'>Apoyar Iniciativa</Button>
						{/* SPONSORS */}
						<h2 className='text_label pt-5 text-center'>Sponsors</h2>
						<Swiper
							slidesPerView={4}
							spaceBetween={10}
							navigation
							pagination={{ clickable: true }}
							className='text-center mt-5 mb-3'
						>
							<SwiperSlide>
								<Image
									src='https://logos-marcas.com/wp-content/uploads/2020/04/Huawei-Logotipo-2018%E2%80%93presente.jpg'
									roundedCircle
									style={{
										height: '100px',
										backgroundImage:
											'fit',
									}}
								/>
							</SwiperSlide>
						</Swiper>
						<h3 className='text_label py-3 text-center font-weight-bold'>
							Preparate lo bueno esta por venir:
						</h3>
					</Col>
					<Col md='2' className='w-100'>
						<div className='mt-5'>
							<div>
								<div>
									<h4>Talleres</h4>
								</div>
								<Workshop
									name='State of Javascript'
									time='14:00'
									coach='Juan Pablo de la Torre'
								/>
								<Workshop
									name='IA con Python'
									time='22:00'
									coach='Yesi Days'
								/>
							</div>
							<span className='font-weight-bold text-secondary'>
								Ver más...
							</span>
						</div>
					</Col>
				</Row>
				<Counter />
			</Container>
			<Footer />
		</>
	);
};
