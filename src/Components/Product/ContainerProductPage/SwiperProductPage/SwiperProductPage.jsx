import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import heroProduct from "../../../../Assets/img/productHeroSwiper.jpg";
import smallImg from "../../../../Assets/img/70x90.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import style from "./SwiperProductPage.module.css";
const SwiperProductPage = ({valueProduct}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={style.wrapper}>
      <Swiper
        direction="vertical"
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={2}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperProduct"
        style={{
          "width": "70px",
        }}
      >
        <SwiperSlide>
          <img src={valueProduct.imgUrl} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={smallImg} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "position": "relative",
          "height": "850px",
          "width": "675px",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiperProduct2"
      >
        <SwiperSlide>
          <img src={valueProduct.imgUrl} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={smallImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperProductPage;
