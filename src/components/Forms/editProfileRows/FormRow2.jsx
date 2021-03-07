import React from 'react'
import { Col, Form } from 'react-bootstrap';

export const EditFormRow2 = ({methods}) => {
	const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]

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
								ref={methods.register({validate: ()=> {
									if(methods.getValues("gender") === "") return "Complete este campo"
									else return true
								}})}
							>
								<option value="" >Seleccione un genero</option>
								<option>Masculino</option>
								<option>Femenino</option>
								<option>No Binario</option>
							</Form.Control>
							{methods.errors.gender && <li className="text-danger">{methods.errors.gender.message}</li>}
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
								ref={methods.register({
									required: "Complete este campo."
								})}
							/>
							{methods.errors.birthday && <li className="text-danger">{methods.errors.birthday.message}</li>}
						</Form.Group>
					</Col>
					{/* --------------PAIS--------------- */}
					<Col>
						<Form.Group className='inputWithIcon '>
							<Form.Label className='text_label'>Pais:</Form.Label>
							<i className="fas fa-flag" />
							<Form.Control
								as="select"
								type='text'
								className="mt-2 pl-4"
								name='country'
								ref={methods.register({validate:()=> {
									if(methods.getValues("country") === "") return "Complete este campo"
									else return true
								}})}
								>
									<option value="">Seleciona un país</option>
								{paises.map((val, index) => <option key={index}>{val}</option>)}
								</Form.Control>
							{methods.errors.country && <li className="text-danger">{methods.errors.country.message}</li>}
						</Form.Group>
					</Col>
				</Form.Row>
    )
}
