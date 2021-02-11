import React from 'react';
import register_img from '../../assets/images/register_img.svg';
import google_icon from '../../assets/images/google_icon.png';
import facebook_icon from '../../assets/images/facebook_icon.png';
export const Register = () => {
	return (
		<>
			<div className="login_left_side">
				<img src={register_img} alt="login_img" />
				<span>¿Ya estas registrado?</span>
				<button>Ingresar</button>
			</div>
			<div className="login_right_side">
				<form className="form_login">
					<h1>SignUp</h1>
					<label>Nick:</label>
					<div class="inputWithIcon">
						<input type="text" />
						<i class="fas fa-user fa-lg fa-fw" aria-hidden="true"></i>
					</div>
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
					<label>Confirmar Contraseña:</label>
					<div class="inputWithIcon">
						<input type="password" />
						<i class="fas fa-lock fa-lg fa-fw" aria-hidden="true"></i>
					</div>
					<button>Crear Cuenta</button>
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
