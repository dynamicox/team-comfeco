import React from 'react';
import logoConf from '../../assets/images/logoConf.png';
export const Navbar = () => {
	return (
		<div className="auth_navbar_container">
			<div
				className="auth_navbar_logo"
				style={{ backgroundImage: 'url(' + logoConf + ')' }}
			></div>
		</div>
	);
};
