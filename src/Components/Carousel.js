import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper";

const  Carousel = ({slidesPerView,slides}) => {
  return (
    <div className="carousle-wrp">
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{
          type:"fraction"
        }}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        className="mySwiper"
      >
          {slides.map((ele,i)=>(
            <SwiperSlide key={i}>{ele}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}


export default Carousel;