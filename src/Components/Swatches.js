import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation } from "swiper";

const Swatches = ({data}) => {

    const [active,setActive] = useState(false);

    const  isValidUrl = (_string) => {
        const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        return matchPattern.test(_string);
      }

    const Swatch = (ele,key)=>  (
      <>
      <li key={key}>
        <div className='swatches-item'>
          <input type="radio" id={"color-swateche-"+key+ele}  name="color-swateche" value={ele} onClick={()=>setActive(ele)} checked={ele === active}/>
          <label for={"color-swateche-"+key+ele}>
                  {isValidUrl(ele) 
                  ? <img className='swatches-type' src={ele}/>
                  :<div className='swatches-type' style={{backgroundColor:ele}}></div>}
          </label>
        </div>
      </li>
    </>
  )

    return (
        <div>
          <div className='swatches-title'>
            Color:{active}
          </div>
          <div className='swatches-row'>
            <ul>
              {data?.length > 10 ? 
              <Swiper
              slidesPerView={10}
              slidesPerGroup={10}
              spaceBetween={30}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                  320: {
                    slidesPerView: 8,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 10,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 10,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
            >
                {data.map((ele,i)=>(
                  <SwiperSlide key={i}>{Swatch(ele,i)}</SwiperSlide>
                ))}
            </Swiper> :
            data?.map((ele,i)=>
              Swatch(ele,i)
            )}
                
            </ul>
          </div>
        </div>
    );

}

export default Swatches;