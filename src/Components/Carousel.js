import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper";

const  Carousel = ({slidesPerView,slides,title}) => {

  const [swiper, setSwiper] = React.useState();
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper && swiper.params?.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation?.init();
      swiper.navigation?.update();
    }
  }, [swiper]);

  return (
    <div className="carousle-wrp">
      <div>{title}</div>
      <div className="swiper-button" ref={prevRef}>
          prev
        </div>
        <div class="swiper-pagination-new"></div>
        <div className="swiper-button" ref={nextRef}>
          Next
        </div>
      <Swiper
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        spaceBetween={30}
        pagination= {{
          el: '.swiper-pagination-new',
          type: 'fraction'
        }}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        modules={[Pagination, Navigation]}
        onSwiper={setSwiper}
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
          className="external-buttons"
      >
          {slides.map((ele,i)=>(
            <SwiperSlide key={i}>{ele}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}


export default Carousel;