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
			className='py-1 px-3 text-center text-light'
			noGutters={true}
			style={{ backgroundColor: '#020024', fontFamily: 'Roboto Mono' }}
		>
			<Col>
				<p className='display-4 font-weight-bold'>{day_rest}</p>
				<br /> <span style={{ fontSize: '1.4em' }}>Dias</span>
			</Col>
			<Col>
				<p className='display-4 font-weight-bold'>{hours_rest}</p>
				<br /> <span style={{ fontSize: '1.4em' }}>Horas</span>
			</Col>
			<Col>
				<p className='display-4 font-weight-bold'>{minutes_rest}</p>
				<br /> <span style={{ fontSize: '1.4em' }}>Minutos</span>
			</Col>
			<Col>
				<p className='display-4 font-weight-bold'>{secunds_rest}</p>
				<br /> <span style={{ fontSize: '1.4em' }}>Segundos</span>
			</Col>
		</Row>
	);
};
