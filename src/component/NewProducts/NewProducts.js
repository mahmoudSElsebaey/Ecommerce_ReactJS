import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Top Selling/TopSelling.css";
import CardNewProducts from "./CardNewProducts";
import p1 from "./NewProductsImages/p1.jpg";
import l3 from "./NewProductsImages/l3.jpg";
import tv1 from "./NewProductsImages/tv1.jpg";
import p2 from "./NewProductsImages/p2.jpg";
import w2 from "./NewProductsImages/w2.jpg";
import k1 from "./NewProductsImages/k1.jpg";
import tv2 from "./NewProductsImages/tv2.jpg";
import m5 from "./NewProductsImages/m5.jpg";
const NewProducts = () => {
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
          // pagination={{
          //   clickable: true,
          // }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
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
            <CardNewProducts
               imgSrc={p1}
              title="iphone 13 pro max"
              price="3000.0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={l3}
              title="labtop Dell 2021"
              price="137000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={tv1}
              title="toshiba smart-TV 32-inch 2022"
              price="5000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={p2}
              title="iphone 12 pro max"
              price="5000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={w2}
              title="Apple smart watch 2022"
              price="1360"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={k1}
              title="Redragon Keyboard 2022"
              price="360"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
              imgSrc={tv2}
              title="toshiba 32-inch HD"
              price="13000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardNewProducts
               imgSrc={m5}
              title="Zero wireless mouse black"
              price="270"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default NewProducts;
