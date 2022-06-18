import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './product.module.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function Products({ arr }) {
  const { innerWidth, innerHeight } = window

  // console.log(innerWidth)
  var perview = 0

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.ProductSwiper}
        id="productsSlider"
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            centeredSlides: true,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
          },

          '@1.25': {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          '@1.75': {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
          },
        }}
      >
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <div className={styles.productsDiv_individual_home_first}>
              <img src={elm.ImageUrl} />
              <p className={styles.title_products_home}>{elm.Title}</p>
              <div className={styles.currencyDiv_products_home}>
                <div>
                  {elm.strikePrice && <strike> {elm.strikePrice}</strike>}
                </div>
                <div>
                  <p>{elm.currency}</p>
                  <p>{elm.Price}</p>
                </div>
                <div className={styles.discount}>
                  {' '}
                  {elm.discount && <p> ({elm.discount}% Off )</p>}{' '}
                </div>
              </div>
              <button className={styles.addDiv_home}>ADD TO CART</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
