import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import {  CommunityBadge } from "./CommunityBadge";
import 'swiper/swiper.scss';
import { Counter } from './Counter';
import { useStorage } from "../../contexts/StorageContext";
import { LeadersCarousel } from './LeadersCarousel';
import { SponsorsCarousel } from "./SponsorsCarousel";
import { Workshops } from "./Workshops";



export const HomePageView = () => {
  	const [key, setKey] = useState('comunidades');
	const [sponsorSwipper, setSponsorSwipper] = useState()
	const [leaderSwipper, setLeaderSwipper] = useState()
	const { getCollection, getDataFromCollection } = useStorage()


	

	useEffect(()=>{
		async function getData() {
			try {
				const leadersData = await getCollection('leaders')
				const sponsorsData = await getCollection('sponsors')		

				setLeaderSwipper(getDataFromCollection(leadersData))
				setSponsorSwipper(getDataFromCollection(sponsorsData))
			} catch (error) {
				
			}
		}
		getData()
	}, [])

	return (
		<>
			<Navigation />
			<Container fluid={true} className="px-0">
				<Row noGutters={true} >
					{/* WELCOME SECTION */}
					<Col xs="12" className="homePageImg d-flex align-items-center justify-content-center text-light">
						<div>
							<h1 className='text_label text-center pt-4 font-weight-bold linkHover'>
								Bienvenidos a Comunity Fest and Code!
							</h1>
							<div className="text-center">
								<h4 className='text_label text-light  font-weight-bold linkHover'>
								Conoce gente, aprende y gana!
							</h4>
							</div>
						</div>
					</Col>
						{/* ABOUT  */}
						<Col className="px-4 py-5" lg="7">
							<h3 className='text_label my-5 text-center font-weight-bold'>
								Sobre el evento
							</h3>
							<p className=" text_label text-justify">
								Comfeco (Community Fest and Code) En su primera edición le da la bienvenida a todos aquellos entusiastas que desean aprender y conocer a programadores del todo el mundo a través de esta travesía; conocerás a varias personas con esa misma pasión de programar a través de múltiples talleres cuyo objetivo es expandir tu conocimiento, una semana maratonica que sin duda dejara con ganas a mas de uno; adéntrate en la elaboración de un proyecto con los instructores mas profesionales del campo de la programación, ¡un sueño que ahora es posible!
							</p>
							<p className='mt-3  text_label text-justify'>
								La próxima edición regresa en el 2022, en la cual se
								planea involucrar a todos los programadores
								independientmente del area de conocimiento que se
								encuentre, todo con un mismo proposito, aprender en
								comunidad.
							</p>
						</Col>
						<Col lg="5">
						</Col>
						{/* RULES */}
						<Col lg="5">
						</Col>
						<Col className="py-5" lg="7">
							<h3 className='text_label my-5 text-center font-weight-bold'>
								Reglas
							</h3>
							<div className="text_label text-justify px-3">
								<p className="py-2">
									<i className="fas fa-check text-success mr-3"/>
									Los grupos tienen que ser conformados por 5 personas.
								</p>
								<p className="py-2">
									<i className="fas fa-check text-success mr-3"/>
									Si estas en el Team Angular no podrás presentar el proyecto en un framework distinto, así para cada uno de los casos.
								</p>
								<p className="py-2">
									<i className="fas fa-check text-success mr-3"/>
									Se debe entregar el proyecto en la fecha indicada, no se dará tiempo extra, por eso la fecha se les dirá con mucha anticipación.
								</p>
								<p className="py-2">
									<i className="fas fa-check text-success mr-3"/>
									Se debe seguir las directrices para hacer el proyecto, y se debe de cumplir con cada uno de los requisitos para que puedan ser aprobados.
								</p>
								<p className="py-2">
									<i className="fas fa-check text-success mr-3"/>
									Los lideres de cada team no realizaran el proyecto por ti, solo estarán como guía para dar algunos talleres y resolver dudas para poder completar con éxito el proyecto.
								</p>
							</div>
						</Col>
						{/* TEAM LEADERS */}
					<Col>
						<h3 className='text_label pt-5 text-center font-weight-'>
							Ellos ya creen en esta iniciativa:
						</h3>
						{leaderSwipper && <LeadersCarousel swiperData={leaderSwipper} />}
					</Col>
					</Row>
					<Row noGutters className="justify-content-center" style={{backgroundColor:"#f3f3f3"}}>
					<Col lg='6' md='8' xs='11'>
						<div>
							<Tabs fill
								className=" align-items-center justify-content-center py-3"
								variant="pills"
								activeKey={key}
								onSelect={(k) => setKey(k)} >
									<Tab eventKey="comunidades" className='mx-4' title="Comunidades">
										<CommunityBadge />
									</Tab>

									<Tab eventKey="/" style={{fontSize:"30px"}} disabled title="/" />

									<Tab eventKey="talleres"className='mx-4' title="Talleres">
										<Workshops />
									</Tab>
								</Tabs>
						</div>
					</Col>
				</Row>
					<Row noGutters>
							
					<Col>
						
						{/* SPONSORS */}
						<h2 className='text_label pt-5 text-center '>Sponsors</h2>
						{sponsorSwipper && <SponsorsCarousel swiperData={sponsorSwipper} />}
						<Button className='BtnApoyar mb-5 mt-2'>Apoyar Iniciativa</Button>
						
					</Col>
				</Row>
				
					<Counter />
			</Container>
			<Footer />
		</>
	);
};
