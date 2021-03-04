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
    )
}
