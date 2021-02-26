import React from 'react';
import logoConf from '../../assets/images/logoConf.png';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const LoginNavigation = () => {
	return (
		
		<Navbar bg="dark" className="loginNav">
			<Navbar.Brand>
				<Link to="/">
					<div
				className="auth_navbar_logo"
				style={{ backgroundImage: 'url(' + logoConf + ')' }}
			 	/>
				</Link>
			</Navbar.Brand>
		</Navbar>
	);
};
