import React from 'react';
import { Button, Card, CardGroup, CardDeck, Container, Row, Col, Toast } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

import { Navigation } from '../../components/auth/Navbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Footer } from '../../components/auth/Footer';

import { CommunityBadge } from './CommunityBadge';
import { CardCustom } from './CardCustom';
import { Counter } from './Counter';

export const HomePageView = () => {
	const { logOut } = useAuth();

	return (
		<>
			<Navigation />
			<Container className='contenedor' fluid>
				<Row>
					<Col className='col-3'>
						<h2>Comunidades</h2>
						<Container
							fluid
							p-1
							className='d-flex flex-column justify-content-center align-items-center'
						>
							<CommunityBadge
								name='Comunidad de Programadores'
								url='https://www.grupodigital.eu/blog/wp-content/uploads/2019/11/gamer-decorative-illustration-flat-design_23-2148250394-e1574340136197.jpg'
							/>
							<CommunityBadge
								name='El Lenguaje de Programadores'
								url='https://cdn.ticbeat.com/src/uploads/2020/04/lenguaje-cobol.jpg'
							/>
							<CommunityBadge
								name='Latam Dev'
								url='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/GDGDevFest_SocialAssetsLATAMv2-09_AC2P8PY.png'
							/>
						</Container>
						<Button variant='primary' onClick={logOut}>
							Log out
						</Button>
					</Col>
					<Col className='col-6'>
						<div className='text-center'>
							<h3>Bienvenidos a Community Fest and Code</h3>
							<p className='mb-3'>
								¡Conoce gente, aprende y gana!
							</p>
							<p className='my-3 '>
								La próxima edición regresa en el 2022, en
								la cual se planea involucrar a todos los
								programadores independientmente del area
								de conocimiento que se encuentre, todo con
								un mismo proposito, aprender en comunidad.
							</p>
							<h4 className='mb-3'>
								Ellos ya creen en esta iniciativa:
							</h4>
						</div>

						<Swiper
							slidesPerView={4}
							spaceBetween={10}
							navigation
							pagination={{ clickable: true }}
							className='text-center'
						>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<SwiperSlide>
								<CardCustom
									background='https://media.istockphoto.com/vectors/software-development-seamless-pattern-with-flat-line-icons-language-vector-id1199159518'
									avatar='https://yt3.ggpht.com/ytc/AAUvwnjI1e_kjzToMdbPML1lfLgJxlArNmMbklUQYDsJ2Q=s900-c-k-c0x00ffffff-no-rj'
									title='Kevin kevin'
								></CardCustom>
							</SwiperSlide>
							<Button className='BtnApoyar  mt-3' size='lg'>
								APOYAR INICIATIVA
							</Button>
						</Swiper>

						<h3>Sponsors:</h3>

						<h4 className='mb-3 text-center'>
							Preparate lo bueno esta por venir...
						</h4>

						<Counter />
					</Col>
					<Col className='col-3'>
						<h2 className='text-left'>Talleres</h2>
					</Col>
				</Row>
				<Footer></Footer>
			</Container>
		</>
	);
};
