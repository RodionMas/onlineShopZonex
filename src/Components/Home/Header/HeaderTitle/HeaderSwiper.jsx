import React from "react";
import style from "./HeaderTitle.module.css";
import girl from "../../../../Assets/img/girl-header.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const HeaderSwiper = () => {
  return (
    <div className={style.SliderWrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
          className: "pag",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slideActive">
          <div className={style.wrapper}>
            <div className={style.titleBox}>
              <h1>Fall-Winter Clearance Sales</h1>
              <span className={style.text}>
                All Sale Items are Final Sale / Free Shipping on All Orders
              </span>
            </div>
            <div>
              <img className={style.hero} src={girl} alt="Girl" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.wrapper}>
            <div className={style.titleBox}>
              <h1>Fall-Winter Clearance Sales</h1>
              <span className={style.text}>
                All Sale Items are Final Sale / Free Shipping on All Orders
              </span>
            </div>
            <img className={style.hero} src={girl} alt="Girl" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.wrapper}>
            <div className={style.titleBox}>
              <h1>Fall-Winter Clearance Sales</h1>
              <span className={style.text}>
                All Sale Items are Final Sale / Free Shipping on All Orders
              </span>
            </div>
            <img className={style.hero} src={girl} alt="Girl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
