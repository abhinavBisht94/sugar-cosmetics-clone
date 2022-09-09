import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./multiImage.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function MultiImage({ arr }) {
  return (
    <>
      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          850: {
            // width: 768,
            slidesPerView: 2,
          },
          1400: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        id="multiImageSlider"
      >
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <img className={styles.Mimage} src={elm} alt="multipleImages" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
