import React from 'react';
import login_img from '../../assets/images/login_img.svg';
import google_icon from '../../assets/images/google_icon.png';
import facebook_icon from '../../assets/images/facebook_icon.png';
export const Login = () => {
	return (
		<>
			<div className="login_left_side">
				<img src={login_img} alt="login_img" />
				<span>¿Todavia no tienes cuenta?</span>
				<button>Registrarse</button>
			</div>
			<div className="login_right_side">
				<form className="form_login">
					<h1>SignIn</h1>
					<label>Correo:</label>
					<div class="inputWithIcon">
						<input type="text" />
						<i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
					</div>
					<label>Contraseña:</label>
					<div class="inputWithIcon">
						<input type="password" />
						<i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
					</div>

					<div className="login_options">
						<div className="login_options_message">
							<p>¿Olvidaste tu contraseña?</p>
						</div>
						<div className="login_options_checkbox">
							<input type="checkbox" name="" id="" />
							<p>Recordarme</p>
						</div>
					</div>
					<button>Ingresar</button>
					<div className="line_login "></div>
					<div className="login_with_container">
						<img src={facebook_icon} alt="" />
						<img src={google_icon} alt="" />
					</div>
				</form>
			</div>
		</>
	);
};
