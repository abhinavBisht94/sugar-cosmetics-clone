// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../CSS/productsDetail/productsDetailFour.css";

export const ProductsDetailFour = ({ data }) => {
  //   console.log("data.dataCategory:", data.dataCategory);

  return (
    <div id="ProductsDetailFour">
      <h1>SIMILAR PRODUCTS</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

        <div>
          {data.dataCategory.map((elem) => {
            return (
              <SwiperSlide key={elem._id.$oid}>
                <div className="pd4SimilarProducts">
                  <img src={elem.ImageUrl} alt={elem.prodEyesHeading} />
                  <h5>{elem.Title}</h5>
                  <p>{elem.Price}</p>
                  <button>Notify Me</button>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <h1>SHOP FROM RECENTLY VIEWED</h1>
      <div className="pd4Recently">
        <div>
          <img
            src={data.dataCategory[0].ImageUrl}
            alt={data.dataCategory[0].prodEyesHeading}
          />
          <h5>{data.dataCategory[0].Title}</h5>
          <p>{data.dataCategory[0].Price}</p>
          <button>Notify Me</button>
        </div>

        <div>
          <img
            src={data.dataCategory[1].ImageUrl}
            alt={data.dataCategory[1].prodEyesHeading}
          />
          <h5>{data.dataCategory[1].Title}</h5>
          <p>{data.dataCategory[1].Price}</p>
          <button>Notify Me</button>
        </div>
      </div>
    </div>
  );
};
