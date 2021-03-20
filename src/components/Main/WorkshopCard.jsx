import React from 'react';
import { Image} from 'react-bootstrap';
import './style.css';
export const WorkshopCard = ({title, imgUrl, category}) => {
	return (
		<>
			<div className="border-bottom py-2 d-flex">
                        <Image 
                            className="shadow-sm ml-1"
                            rounded
                            src={imgUrl || "https://res.cloudinary.com/dbbfkyeaj/image/upload/v1616094745/sponsors/Egghead_v4hysk.jpg"}
                            height="75"
                        />
                        <div className="px-2 w-100">
                            <div>
                                <p className=" h6 text_label pt-1">
                                    {title || 'Titulo del Taller'}
                                </p>
                            </div>
							<div className="pb-1 pl-1">
								Category: <span className="text_label font-weight-bold">{ category ||"Frontend"}</span>
							</div>
                            <div className="d-flex justify-content-between">
								<p>
                               Time: <span className="text_label"> 17:00</span>
								</p> 
							
								<p>
									by  <a href="#">Juan Perez</a>
								</p>
							</div>
                        </div>
                    </div>
		</>
	);
};
