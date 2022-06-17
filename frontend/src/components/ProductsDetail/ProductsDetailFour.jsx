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
  console.log("data:", data);
  //   console.log("data.dataCategory:", data.dataCategory);

  return (
    <div id="ProductsDetailFour">
      <h1>SIMILAR PRODUCTS</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={4}
        breakpoints={{
          // when window width is >= 1px
          1: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 415px
          415: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1025px
          1025: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div id="pd4Swiper">
          {data.map((elem) => {
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
          <img src={data[0].ImageUrl} alt={data[0].prodEyesHeading} />
          <h5>{data[0].Title}</h5>
          <p>{data[0].Price}</p>
          <button>Notify Me</button>
        </div>

        <div>
          <img src={data[1].ImageUrl} alt={data[1].prodEyesHeading} />
          <h5>{data[1].Title}</h5>
          <p>{data[1].Price}</p>
          <button>Notify Me</button>
        </div>
      </div>
    </div>
  );
};
