import React from "react";
import style from "./ShopSwiper.module.css";
import hero from "../../../Assets/img/heroShop.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const ShopSwiper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className={style.wrapper}>
          <div className={style.textBox}>
            <h1 className={style.title}>
              The best thing about going back to school
            </h1>
            <span className={style.text}>
              This fall denim is king! Denim is officially back in and cool to
              wear in all its many forms
            </span>
            <div className={style.btnBox}>
              <button className={style.discovery}>Discovery</button>
              <button className={style.styleshopNow}>Shop now</button>
            </div>
          </div>
          <div className={style.heroBox}>
            <img className={style.hero} src={hero} alt="hero" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.wrapper}>
          <div className={style.textBox}>
            <h1 className={style.title}>
              The best thing about going back to school
            </h1>
            <span className={style.text}>
              This fall denim is king! Denim is officially back in and cool to
              wear in all its many forms
            </span>
            <div className={style.btnBox}>
              <button className={style.discovery}>Discovery</button>
              <button className={style.styleshopNow}>Shop now</button>
            </div>
          </div>
          <div className={style.heroBox}>
            <img className={style.hero} src={hero} alt="hero" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.wrapper}>
          <div className={style.textBox}>
            <h1 className={style.title}>
              The best thing about going back to school
            </h1>
            <span className={style.text}>
              This fall denim is king! Denim is officially back in and cool to
              wear in all its many forms
            </span>
            <div className={style.btnBox}>
              <button className={style.discovery}>Discovery</button>
              <button className={style.styleshopNow}>Shop now</button>
            </div>
          </div>
          <div className={style.heroBox}>
            <img className={style.hero} src={hero} alt="hero" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ShopSwiper;
