import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import "./Brand.css";
import brand1 from "./BrandsImages/brand-1.png";
import brand2 from "./BrandsImages/brand-2.png";
import brand3 from "./BrandsImages/brand-3.png";
import brand4 from "./BrandsImages/brand-4.png";
import brand5 from "./BrandsImages/brand-5.png";
import brand6 from "./BrandsImages/brand-6.png";
import brand7 from "./BrandsImages/brand-7.png";

const Brand = () => {
  return (
    <>
      <div className="container w-100 h-100">
        <Swiper
          grabCursor={true}
          freeMode={true}
          modules={[FreeMode]}
          className="brands"
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="col-sm-12">
            <img src={brand1} alt="brand-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} alt="brand-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} alt="brand-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} alt="brand-4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} alt="brand-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand6} alt="brand-6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand7} alt="brand-7" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Brand;
