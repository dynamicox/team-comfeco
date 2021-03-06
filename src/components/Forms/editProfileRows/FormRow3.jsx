import React from 'react'
import { Col, Form } from 'react-bootstrap';


export const EditFormRow3 = ({methods}) => {
    return (
				<Form.Row>
					{/* --------------AREA DE CONOCIMIENTO--------------- */}
					<Col  xs="12" >
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
									<option value="">Seleccione area de conocimiento</option>
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
									pattern: {
										value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
										message: `La contraseña debe tener al menos 8 caracteres, e incluir 1 numero `,
									},
								})}
							/>
							{methods.errors.new_password && <li className="text-danger">{methods.errors.new_password.message}</li>}
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
							{methods.errors.conf_password && <li className="text-danger">{methods.errors.conf_password.message}</li>}
						</Form.Group>
					</Col>
					{/* ----------------CONTRASEÑA ACTUAL--------------- */}
					<Col xs="12">
						<Form.Group className='inputWithIcon'>
							<Form.Label className='text_label'>
								Contraseña Actual:
							</Form.Label>
							<i
								className='fas fa-lock fa-lg fa-fw'
								aria-hidden='true'
							/>
							<Form.Control
								type='password'
								name='current_password'
								ref={methods.register({
									required:"Para hacer cualquier cambio debe de ingresar primero su contraseña actual"
								})}
							/>
							{methods.errors.confirmacion && <li className="text-danger">{methods.errors.confirmacion.message}</li> }
							{methods.errors.current_password && <li className="text-danger">{methods.errors.current_password.message}</li>}
						</Form.Group>
					</Col>
				</Form.Row>
    )
}
