import React from 'react';
import { Form, Image } from 'react-bootstrap';
import './style.css';
import { WorkshopCard } from './WorkshopCard';

export const Workshops = (props) => {
	return (
		<>
			<div className="py-2" style={{minHeight:"70vh"}}>
				<h4 className="text_label text-center">Talleres Disponibles</h4>
                <form>
                    <Form.Control
                        as="select"
                        className="my-2"
                    >
                        <option value='' >Seleccione una categoria</option>
                        <option value='' >Frontend</option>
                        <option value='' >Backend</option>
                        <option value='' >DevOps</option>
                        <option value='' >Video Game</option>
                        <option value='' >UI / UX</option>
                        <option value='' >Database Developer</option>
                        <option value='' >Cloud Computing</option>
                    </Form.Control>
                </form>
                <div style={{height:'45vh'}} className="overflow-auto">
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                </div>
				<div className=" ">
					<p className="text_label text-justify text-muted my-2 mt-5">
					Aprende y refina tus conocimientos junto a nuestros expertos.
					<a className="text-right"> Ver mas...</a>
					</p>
				</div>
			</div>
		</>
	);
};
