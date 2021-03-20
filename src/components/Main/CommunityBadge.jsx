import React from 'react';
import { Image } from 'react-bootstrap';
import './style.css';

export const CommunityBadge = (props) => {
	return (
		<>
			<div className="py-4" style={{minHeight:"70vh"}}>
				<h4 className="text_label text-center">Nuestras Comunidades</h4>
				<div className="border-bottom py-2 d-flex">
					<Image 
						className="shadow-sm ml-1"
						rounded
						src="https://cdn.discordapp.com/icons/814017664720699393/365819595bf35beed93c177b7f528b5a.jpg"
						height="75"
					/>
					 <div className="px-2 ">
						 <div className="d-flex justify-content-between">

						 <p className=" h6 text_label mt-1">
						 	Development Zone
					 	</p>
						 <a className=" h6 text_label text-end mt-1" href="https://disboard.org/es/server/814017664720699393" target="_blank">
						 	Follow
					 	</a>
						 </div>
						 <p className="overflow-hidden text-justify" style={{height:'50px'}}>
							 Somos un servidor pequeño de programación, contamos con un staff muy bueno y 24/7.
							Ayudamos en muchos lenguajes de programación, y nos apoyamos mutuamente.
						 </p>
					 </div>
				</div>
				<div className="border-bottom py-2 d-flex">
					<Image 
						className="shadow-sm ml-1"
						rounded
						src="https://cdn.discordapp.com/icons/812360194524577883/f7db3f22fef31195c8d8c5ff9bdb3760.jpg"
						height="75"
					/>
					 <div className="px-2 ">
						 <div className="d-flex justify-content-between">

						 <p className=" h6 text_label mt-1">
						 	Kodetica
					 	</p>
						 <a className=" h6 text_label text-end mt-1" href="https://disboard.org/es/server/812360194524577883" target="_blank">
						 	Follow
					 	</a>
						 </div>
						 <p className="overflow-hidden text-justify" style={{height:'50px'}}>
							Nos encanta programar, ayudar y enseñar lo que sabemos. Te ofrecemos guías de programación gratuitas, talleres y clases live. 
						 </p>
					 </div>
				</div>
				<div className="border-bottom py-2 d-flex">
					<Image 
						className="shadow-sm ml-1"
						rounded
						src="https://cdn.discordapp.com/icons/707387158700228685/a_e46870b83cd4c73fe67036130401f048.jpg"
						height="75"
					/>
					 <div className="px-2 ">
						 <div className="d-flex justify-content-between">

						 <p className=" h6 text_label mt-1">
								MyOwnCode | Programacion
							</p>
						 <a className=" h6 text_label text-end mt-1" href="https://disboard.org/es/server/707387158700228685" target="_blank">
						 	Follow
					 	</a>
						 </div>
						 <p className="overflow-hidden text-justify" style={{height:'50px'}}>
							MyOwnCode - Un servidor donde podrás dar y recibir ayuda en los distintos lenguajes de programación existentes
						 </p>
					 </div>
				</div>
				<div className=" ">
					<p className="text_label text-justify text-muted my-2 pt-4">
					Observa y unete a nuestras comunidades para poder compartir y conecer nuevas e increibles tecnologias. 
					<a className="text-right">Ver mas...</a>
					</p>
				</div>
			</div>
		</>
	);
};
