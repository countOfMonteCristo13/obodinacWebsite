import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import './imageslider.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ImageSlider = ({images}) => {




  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper gp__swiper"
      >
        {/* <SwiperSlide><img className="gp__swiper-img" src="https://source.unsplash.com/78A265wPiO4" alt="1"/></SwiperSlide>
        <SwiperSlide><img className="gp__swiper-img" src="https://source.unsplash.com/ndN00KmbJ1c" alt="2" /></SwiperSlide>
        <SwiperSlide><img className="gp__swiper-img" src="https://source.unsplash.com/eOpewngf68w" alt="3" /></SwiperSlide> */}
        {Object.values(images).map((image,index) => (
          <SwiperSlide key={index}>
            <img className="gp__swiper-img" src={image} alt={`Image ${index+1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


export default ImageSlider;