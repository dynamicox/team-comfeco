import React from 'react';
import logoConf from '../../assets/images/logoConf.png';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const Navigation = () => {
	return (

		<Navbar bg="dark" className="loginNav">
			<Navbar.Brand>
				<Link to="/auth/login">
					<div
				className="auth_navbar_logo"
				style={{ backgroundImage: 'url(' + logoConf + ')' }}
			 	/>
				</Link>
			</Navbar.Brand>
		</Navbar>

		//Previous Nav
		/* <div className="auth_navbar_container">
			<div
				className="auth_navbar_logo"
				style={{ backgroundImage: 'url(' + logoConf + ')' }}
			></div>
		</div> */
	);
};
