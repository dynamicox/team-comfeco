import React from 'react'
import SwiperCore, { Pagination, Navigation, Autoplay} from "swiper";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Navigation, Autoplay])

export const SponsorsCarousel = ({swiperData}) => {
    return (
        <div>
            <Swiper
                loop
               
                breakpoints={{
                    0:{
                        slidesPerView:3,
                        spaceBetween: 10
                    },
                    576:{
                        slidesPerView:4,
                        spaceBetween: 10 
                    },
                    850: {
                        slidesPerView: 4,
                        spaceBetween: 55
                    },
                    1090: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    },1288: {
                        slidesPerView: 6,
                        spaceBetween: 60
                    },1580: {
                        slidesPerView: 7,
                        spaceBetween: 50
                    }
                    }
                }
                spaceBetween={50}
                pagination={{clickable:true}}
                navigation={{clickable:true}}
                className="my-5 px-5 py-5"
						>
                            {   swiperData.map((element, idx)=>{

                               return <SwiperSlide key={idx} className="sponsorAnima">
                                <Image
                                    className="shadow"
									src={element.imgUrl}
									roundedCircle
                                    width="150"
									height="150"
                                    style={{objectFit:"contain"}}
								/>
                            </SwiperSlide>
                            })
                        }
                    </Swiper>
        </div>
    )
}
