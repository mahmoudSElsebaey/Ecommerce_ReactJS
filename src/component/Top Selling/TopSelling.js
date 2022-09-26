import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TopSelling.css";
import "swiper/css";
import "swiper/css/free-mode";
import CardTopSelling from "./CardTopSelling";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import p5 from "./TopSellingImages/p5.jpg";
import l1 from "./TopSellingImages/l1.jpg";
import tv3 from "./TopSellingImages/tv3.jpg";
import p4 from "./TopSellingImages/p4.jpg";
import w4 from "./TopSellingImages/w4.jpg";
import k4 from "./TopSellingImages/k4.jpg";
import tv1 from "./TopSellingImages/tv1.jpg";
import m2 from "./TopSellingImages/m2.jpg";

const TopSelling = () => {
  return (
    <>
      <div className="container">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Navigation, Pagination]}
          className="mySwiper"
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
              pagination: {
                clickable: true,
              },
              navigation: false,
            },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
            1280: { slidesPerView: 5, spaceBetween: 15 },
          }}
        >
          <SwiperSlide>
            <CardTopSelling
              imgSrc={p5}
              title="iphone 13 pro max"
              price="3000.0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={l1}
              title="labtop Dell 2021"
              price="137000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={tv3}
              title="toshiba smart-TV 32-inch 2022"
              price="5000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={p4}
              title="iphone 12 pro max"
              price="5000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={w4}
              title="Apple smart watch 2022"
              price="1360"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={k4}
              title="Redragon Keyboard 2022"
              price="360"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={tv1}
              title="toshiba 32-inch HD"
              price="13000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTopSelling
              imgSrc={m2}
              title="Zero wireless mouse black"
              price="270"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopSelling;
