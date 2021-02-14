import React from 'react';
import { Navbar,Nav} from "react-bootstrap";

export const Footer = () => {
	return (
		<Navbar className="auth_footer_container pt-3">
			<div className="text-center w-100">
				<p>
					Copyright © 2020 COMFECO ® - Team React 40. Lee nuestra Política de Privacidad y
					Términos de Uso.
				</p>
			</div>
		</Navbar>
	);
};
