import React from 'react'
import { Col, Form } from 'react-bootstrap';

export const EditFormRow2 = ({methods}) => {
    return (
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
						<Form.Group className='inputWithIcon '>
							<Form.Label className='text_label'>Pais:</Form.Label>
							<i className="fas fa-flag" />
							<Form.Control
								type='text'
								name='country'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
    )
}
