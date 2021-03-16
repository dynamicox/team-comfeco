import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/images/logoConf.png';
import { useHistory, Link } from "react-router-dom";

export const Navigation = () => {
	const { logOut,currentUser } = useAuth();
	const history = useHistory()

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
					<Navbar.Text  className='mx-1 mt-2' style={{ fontFamily: 'Roboto Mono', fontWeight: 'bold',color: "#f9b14a"  }}>
						{currentUser.displayName}
					</Navbar.Text>
					<NavDropdown
						className='mr-3 pr-5 text-center'
						title={<img src="https://i.pinimg.com/736x/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" 
						width="50"
						height="50"
						style={{borderRadius:"50%"}}
						className="d-inline-block align-top"/>}
						id='collasible-nav-dropdown'
					>
						 

						<NavDropdown.Item onClick={()=>{history.push('/sub/profile')}}>
							Profile 
						</NavDropdown.Item>
						<NavDropdown.Item onClick={()=>{history.push('/sub/events')}}>
							Eventos
						</NavDropdown.Item>
						<NavDropdown.Item onClick={()=>{history.push('/sub/groups')}}>
							Grupos
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
