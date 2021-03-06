import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/images/logoConf.png';
import {Link} from "react-router-dom";

export const Navigation = () => {
	const { logOut } = useAuth();

	return (
		<Navbar
			variant='dark'
			className='pl-5 pr-5 my-0'
			expand='md'
			style={{ padding: '0px', backgroundColor: '#020024' }}
		>
			<Link to="/">
				<Navbar.Brand className='pl-2' href='#home'>
					<img
						src={logo}
						width='190'
						height='55'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav
					className='mr-auto ml-2  text-light'
					style={{ fontFamily: 'Roboto Mono', fontWeight: 'bold' }}
				>
					<Nav.Link href='#home' className='mx-1' style={{ color: '#ffff' }}>
						Inicio
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1' style={{ color: '#ffff' }}>
						Comunidades
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1' style={{ color: '#ffff' }}>
						Talleres
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1' style={{ color: '#ffff' }}>
						Creadores de Contenido
					</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown
						className='mr-3 pr-5 text-center'
						title={<i className=' text-light fas fa-user-circle fa-2x ' />}
						id='collasible-nav-dropdown'
					>
							<NavDropdown.Item>
						<	Link to="/sub/profile">
								Profile 
							</Link>
							</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Another</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>
							Something
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
