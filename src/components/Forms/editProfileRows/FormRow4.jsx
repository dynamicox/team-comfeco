import React from 'react'
import { Col, Form } from 'react-bootstrap';

export const EditFormRow4 = ({methods}) => {
    return (
        <Form.Row>
					{/* --------FACEBOOK------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								className='fab fa-facebook-square fa-2x pr-1'
								style={{ color: '#0f8cf0' }}
							/>
							<Form.Control
								type='text'
								placeholder="https://facebook.com/example"
								name='link_facebook'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------GITHUB------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i className='fab fa-github fa-2x pr-1' />
							<Form.Control
								type='text'
								placeholder="https://github.com/example"
								name='link_github'
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------LINKEDIN------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								className='fab fa-linkedin fa-2x pr-1'
								style={{ color: '#0c65c2' }}
							/>
							<Form.Control
								type='text'
								name='link_linkedin'
								placeholder="https://linkedin.com/example"
								ref={methods.register}
							/>
						</Form.Group>
					</Col>
					{/* --------TWITTER------ */}
					<Col xs='6'>
						<Form.Group className='d-flex align-items-center'>
							<i
								className='fab fa-twitter-square fa-2x pr-1'
								style={{ color: '#00a3f2' }}
							/>
							<Form.Control
								type='text'
								name='link_twitter'
								placeholder="https://twitter.com/example"
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
								placeholder="Cuentanos mas sobre ti..."
								name='biography'
								ref={methods.register({
									required: "Por favor complete este campo",
									maxLength: {
										value: 140,
										message: "El texto de su biografia no puede exceder los 140 caracteres"
									}
								})}
							/>
							{methods.errors.biography && <li className="text-danger">{methods.errors.biography.message}</li>}
						</Form.Group>
					</Col>
				</Form.Row>
    )
}
