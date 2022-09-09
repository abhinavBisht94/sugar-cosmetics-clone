import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mainSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function MainSlider({ arr }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <img className="mainslider_img" src={elm} alt="slider images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
