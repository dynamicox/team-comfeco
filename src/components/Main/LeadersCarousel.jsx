import React from 'react'
import SwiperCore, { Pagination, Navigation, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import CardCustom from './CardCustom';

SwiperCore.use([Pagination, Navigation, Autoplay])

export const LeadersCarousel = ({swiperData}) => {
    return (
        <div>
            <Swiper
                breakpoints={{
                    576:{
                        slidesPerView:2,
                        centeredSlides: "false",
                        spaceBetween: 10 
                    },
                    850: {
                        slidesPerView: 3,
                        spaceBetween: 55
                    },
                    1090: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },1288: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },1580: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                    }
                }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                pagination={{clickable:true}}
                className="my-5"
						>
							{swiperData.map((element, idx)=>{
                             return <SwiperSlide key={idx}>
                                        <CardCustom
                                        background={element.imgUrl}
                                        avatar={element.technology}  
                                        title={element.name}
                                        />
                                    </SwiperSlide>  
                            })}
                          
                    </Swiper>
        </div>
    )
}
