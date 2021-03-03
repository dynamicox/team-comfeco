import React from 'react';
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const EditProfileForm = () => {
	const methods = useForm({ mode: 'onChange' });

	return (
		<>
			<Form className='mb-5'>
				{/* ----------------***FILA 1***--------------- */}
				<Form.Row>
					{/* ---------------USUARIO---------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>Nick:</Form.Label>
							<i
								className='fa fa-user fa-lg fa-fw'
								aria-hidden='true'
							/>
							<Form.Control
								type='text'
								name='nickname'
								ref={methods.register({
									required:
										'No puedes dejar este campo vacio',
								})}
							/>
						</Form.Group>
					</Col>
					{/* -----------------------CORREO------------------------ */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Correo:
							</Form.Label>
							<i
								className='fas fa-envelope fa-lg fa-fw'
								aria-hidden='true'
							/>
							<Form.Control
								type='text'
								name='email'
								readOnly
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				{methods.errors.nickname && (
					<li className='text_label text-danger'>
						{' '}
						{methods.errors.nickname.message}{' '}
					</li>
				)}
				{/* ----------------***FILA 2***----------------- */}
				<Form.Row>
					{/* --------------GENERO--------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Genero:
							</Form.Label>
							<Form.Control
								as='select'
								className='mt-2'
								name='gender'
								ref={methods.register}
							>
								<option>Seleccione un genero</option>
								<option>Masculino</option>
								<option>Femenino</option>
								<option>No Binario</option>
							</Form.Control>
						</Form.Group>
					</Col>
					{/* --------------FECHA DE NACIMIENTO--------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Fecha nacimiento:
							</Form.Label>
							<Form.Control
								type='date'
								name='birthday'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------------PAIS--------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>Pais:</Form.Label>
							<Form.Control
								type='text'
								name='country'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				{/* -------------***FILA 3***----------------- */}
				<Form.Row>
					{/* --------------AREA DE CONOCIMIENTO--------------- */}
					<Col xs='12'>
						<Form.Group>
							<Form.Group className='inputWithIcon'>
								<Form.Label className='text_label'>
									Area de conocimiento:
								</Form.Label>
								<Form.Control
									as='select'
									className='mt-2'
									name='field'
									ref={methods.register}
								>
									<option>Select algo</option>
									<option>Front End</option>
									<option>Back End</option>
									<option>Dev Ops</option>
									<option>Video Game</option>
									<option>Developers</option>
									<option>UI/UX</option>
									<option>
										Database Developer
									</option>
									<option>
										Cloud Computing
									</option>
								</Form.Control>
							</Form.Group>
						</Form.Group>
					</Col>
					{/* ----------------CONTRASEÑA--------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Contraseña:
							</Form.Label>
							<i
								className='fas fa-lock fa-lg fa-fw'
								aria-hidden='true'
							/>
							<Form.Control
								type='password'
								name='new_password'
								ref={methods.register({
									required:
										'Porfavor complete este campo',
									pattern: {
										value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
										message: `La contraseña debe tener al menos 8 caracteres, e incluir un numero `,
									},
								})}
							/>
						</Form.Group>
					</Col>
					{/* ----------------CONFIRMAR CONTRASEÑA--------------- */}
					<Col>
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Confirmar Contraseña:
							</Form.Label>
							<i
								className='fas fa-lock fa-lg fa-fw'
								aria-hidden='true'
							/>
							<Form.Control
								type='password'
								name='conf_password'
								ref={methods.register({
									required:
										'Porfavor complete este campo',
									validate: () => {
										if (
											methods.getValues(
												'new_password'
											) ===
											methods.getValues(
												'conf_password'
											)
										)
											return true;
										else
											return 'Las contraseñas no concuerdan';
									},
								})}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				{methods.errors.conf_password && (
					<li className='text_label text-danger'>
						{methods.errors.conf_password.message}
					</li>
				)}
				{/* ----------***FILA 4***----------- */}
				<h4 className='text-center text_label'>Redes Sociales</h4>
				<Form.Row>
					{/* --------FACEBOOK------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								class='fab fa-facebook-square fa-2x pr-1'
								style={{ color: '#0f8cf0' }}
							/>
							<Form.Control
								type='text'
								name='link_facebook'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------GITHUB------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i class='fab fa-github fa-2x pr-1' />
							<Form.Control
								type='text'
								name='link_github'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------LINKEDIN------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								class='fab fa-linkedin fa-2x pr-1'
								style={{ color: '#0c65c2' }}
							/>
							<Form.Control
								type='text'
								name='link_linkedin'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------TWITTER------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								class='fab fa-twitter-square fa-2x pr-1'
								style={{ color: '#00a3f2' }}
							/>
							<Form.Control
								type='text'
								name='link_twitter'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------BIOGRAFIA------ */}
					<Col>
						<Form.Group>
							<Form.Label className='text_label'>
								Biografia:
							</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								name='biography'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				<div className='w-100 text-right'>
					<Button type='submit' className='login_button ml-3'>
						Guardar cambios
					</Button>
				</div>
			</Form>
		</>
	);
};
