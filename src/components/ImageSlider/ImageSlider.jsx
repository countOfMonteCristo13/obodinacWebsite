import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import './imageslider.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const ImageSlider = ({images}) => {

  // console.log(images);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper gp__swiper"
      >
        {Object.values(images).map((image,index) => (
          <SwiperSlide key={index}>
            <img className="gp__swiper-img" src={image} alt={`${index+1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


export default ImageSlider;

// const ImageSlider = ({ images, selectedFilter }) => {
//   const filteredImages = selectedFilter === 'Sve' ? Object.values(images) : Object.values(images).filter(image => image.name === selectedFilter);

//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper gp__swiper"
//       >
//         {filteredImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img className="gp__swiper-img" src={image} alt={`${index + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default ImageSlider;
