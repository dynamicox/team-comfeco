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
						src="https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616094745/sponsors/Egghead_v4hysk.jpg"
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
						src="https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616094745/sponsors/Egghead_v4hysk.jpg"
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
						src="https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616094745/sponsors/Egghead_v4hysk.jpg"
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
