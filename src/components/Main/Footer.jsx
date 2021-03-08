import React from 'react';
import './style.css';
export const Footer = () => {
	return (
		<div className='footer-dark'>
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 col-md-3 item'>
							<h3>ABOUT US</h3>
							<ul>
								<li className='fab fa-github'>
									<a
										href='https://github.com/dynamicox'
										target='_blank'
									>
										dynamicox
									</a>
								</li>
								<li className='fab fa-github'>
									<a
										href='https://github.com/FernandoGavilan2000'
										target='_blank'
									>
										FernandoGavilan
									</a>
								</li>
								<li className='fab fa-github'>
									<a
										href='https://github.com/wilcoxmarin'
										target='_blank'
									>
										wilcoxmarin
									</a>
								</li>
								<li className='fab fa-github'>
									<a
										href='https://github.com/kevocam'
										target='_blank'
									>
										kevocam
									</a>
								</li>
							</ul>
						</div>
						<div className='col-md-6 item text'>
							<h3>Team React 40</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eum sint quaerat
								architecto. Rem beatae iste ipsum
								excepturi tenetur ut commodi consequatur
								incidunt totam iusto. A, nulla. Ab ratione
								ad velit?
							</p>
						</div>
						<div className='col item social'>
							<a href='#'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='#'>
								<i className='fab fa-discord'></i>
							</a>
							<a href='#'>
								<i className='fab fa-instagram'></i>
							</a>
						</div>
					</div>
					<p className='copyright'>TeamReact40© 2021</p>
				</div>
			</footer>
		</div>
	);
};
