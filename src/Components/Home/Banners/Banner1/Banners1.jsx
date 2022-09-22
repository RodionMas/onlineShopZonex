import React from "react";
import style from "./Banners.module.css";
import banner from "../../../../Assets/img/banner1.png";
import { Link } from "react-router-dom";
const Banners1 = ({ womenFilter }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <h1 className={style.title}>Women's Mid-Season</h1>
        <Link onClick={() => womenFilter()} className={style.link} to={"/home/shop"}>
          Shop Now
        </Link>
      </div>
      <div className={style.hero}>
        <img className={style.bannerHero} src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banners1;
