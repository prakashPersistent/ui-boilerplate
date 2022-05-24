import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowIcon from "../svg/arrow-down.svg"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper";

const Swatches = ({data}) => {

    const [active,setActive] = useState(false);
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

    const  isValidUrl = (_string) => {
        const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        return matchPattern.test(_string);
      }

    const Swatch = (ele,key)=>  (
      <>
        <div className='swatches-item' key={key}>
          <input type="radio" id={"color-swateche-"+key}  name="color-swateche" value={ele} onClick={()=>setActive(ele)} checked={ele === active}/>
          <label for={"color-swateche-"+key}>
                  {isValidUrl(ele) 
                  ? <img className='swatches-type' src={ele}/>
                  :<div className='swatches-type' style={{backgroundColor:ele}}></div>}
          </label>
        </div>
    </>
  )

    return (
        <div>
          <div className='swatches-title'>
            Color:{active}
          </div>
          <div className='swatches-row'>
          <div className="swatches-arrow">
            <div className="swiper-button btn-prev" ref={prevRef}>
              <img src={ArrowIcon}></img>
            </div>
            <div className="swiper-button btn-next" ref={nextRef}>
              <img src={ArrowIcon}></img>
            </div>
          </div>
              
              <Swiper
              slidesPerView={10}
              slidesPerGroup={10}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current
              }}
              onSwiper={setSwiper}
              modules={[Pagination, Navigation]}
              breakpoints={{
                  320: {
                    slidesPerView: 8,
                  },
                  768: {
                    slidesPerView: 10,
                  },
                  1024: {
                    slidesPerView: 10,
                  },
                }}
                className="swatches-swiper"
            >
                {data.map((ele,i)=>(
                  <SwiperSlide key={i}>{Swatch(ele,i)}</SwiperSlide>
                ))}
            </Swiper> 
                
          </div>
        </div>
    );

}

export default Swatches;