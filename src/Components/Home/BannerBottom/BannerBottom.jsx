import React from "react";
import { Link } from "react-router-dom";
import style from "./BannerBottom.module.css";
const BannerBottom = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.bannerLeft}>
        <div className={style.box}>
        <span className={style.title}>Men’s Sportswear</span>
        <br />
        <Link className={style.link} to={"/shop"}>Read mode</Link>
        </div>
      </div>

      <div className={style.bannerRight}>
        <div className={style.box}>
        <span className={style.title}>Find your fit</span>
        <br />
        <Link className={style.link} to={"/shop"}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
