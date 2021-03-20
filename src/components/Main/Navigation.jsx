import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/images/logoConfCircular.png';
import { useHistory } from "react-router-dom";

export const Navigation = () => {
	const { logOut } = useAuth();
	const history = useHistory()

	return (
		<Navbar
			variant='dark'
			className='px-5 my-0'
			expand='lg'
			style={{ padding: '0px', backgroundColor: '#020024' }}
		>
				<Navbar.Brand className='' onClick={()=>{history.push('/')}} href="" style={{cursor:'pointer'}}>
					<img
						src={logo}
						width='55'
						height='55'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
				</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav'  />
			<Navbar.Collapse id='responsive-navbar-nav' className="" >
				<Nav
					className='mr-auto ml-2  text-light text-center'
					style={{ fontFamily: 'Oswald', fontSize: '1.1rem' }}
				>
					<Nav.Link onClick={()=> history.push('/')} className='mx-1 linkHover' style={{ color: '#ffff' }}>
						Inicio
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1 linkHover' style={{ color: '#ffff' }}>
						Comunidades
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1 linkHover' style={{ color: '#ffff' }}>
						Talleres
					</Nav.Link>
					<Nav.Link href='#pricing' className='mx-1 linkHover' style={{ color: '#ffff' }}>
						Creadores de Contenido
					</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown
					className='text-center'
					title={<NavigationDropdown />}
					id='collasible-nav-dropdown' >
						<NavDropdown.Item onClick={()=>{history.push('/sub/profile')}}>
							Profile 
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
						</Navbar.Collapse>
				
		</Navbar>
	);
};

const NavigationDropdown = () => {
	const { currentUser } = useAuth();


	return <>
	<Navbar.Text  className='mx-1 mt-2' style={{ fontFamily: 'Roboto Mono', fontWeight: 'bold',color: "#f9b14a"  }}>
						{currentUser.displayName}
					</Navbar.Text>
					<img src="https://i.pinimg.com/736x/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
						width="50"
						height="50"
						style={{borderRadius:"50%"}}
						className="d-inline-block align-top"/>
		</>
}