import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Counter = () => {
	const date_extimade = new Date('04/13/2021 0:01 AM');
	const segundo = 1000;
	const minuto = segundo * 60;
	const hora = minuto * 60;
	const dias = hora * 24;
	const [day_rest, setDayRest] = React.useState(0);
	const [hours_rest, setHoursRest] = React.useState(0);
	const [minutes_rest, setMinutesRest] = React.useState(0);
	const [secunds_rest, setSecundsRest] = React.useState(0);
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		let interval = null;
		const now = new Date();
		const duration = date_extimade - now;
		if (!active) {
			interval = setInterval(() => {
				setDayRest(Math.floor(duration / dias));
				setHoursRest(Math.floor((duration % dias) / hora));
				setMinutesRest(Math.floor((duration % hora) / minuto));
				setSecundsRest(Math.floor((duration % minuto) / segundo));
			}, segundo);
			if (date_extimade === now) {
				setActive(true);
			}
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [day_rest, hours_rest, minutes_rest, secunds_rest, active]);
	return (
		<Row
			className='py-5 px-3 text-center text-light'
			noGutters
			style={{ backgroundColor: '#020024', fontFamily: 'Roboto Mono' }}
		>
			<Col xs="12">
				<i className="far fa-calendar-alt fa-10x " />
				<h3 className='text_label py-3 mb-4 text-center font-weight-bold'>
							Preparate lo bueno esta por venir:
				</h3>
			</Col>
			<Col>
					<p className='h1 font-weight-bold'>{day_rest}</p>
					<br /> 
					<span style={{ fontSize: '1em' }}>Dias</span>
			</Col>
			<Col>
				<p className='h1 font-weight-bold'>{hours_rest}</p>
				<br /> <span style={{ fontSize: '1em' }}>Horas</span>
			</Col>
			<Col>
				<p className='h1 font-weight-bold'>{minutes_rest}</p>
				<br /> <span style={{ fontSize: '1em' }}>Minutos</span>
			</Col>
			<Col>
				<p className='h1 font-weight-bold'>{secunds_rest}</p>
				<br /> <span style={{ fontSize: '1em' }}>Segundos</span>
			</Col>
		</Row>
	);
};
