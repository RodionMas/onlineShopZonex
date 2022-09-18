import React from "react";
import twitter from "../../../../../Assets/img/kz-twitter.png";
import facebook from "../../../../../Assets/img/kz-facebook.png";
import inst from "../../../../../Assets/img/kz-instagram.png";
import print from "../../../../../Assets/img/kz-pinterest.png";
import style from "./SocialProduct.module.css";
const SocialProduct = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.shareBox}>
        <span className={style.share}>SHARE: </span>
      </div>
      <div className={style.socialBox}>
        <a className={style.social} target="_blank" href="https://twitter.com/?lang=ru">
          <img src={twitter} alt="twitter" />
        </a>
        <a className={style.social} target="_blank" href="https://ru-ru.facebook.com">
          <img src={facebook} alt="facebook" />
        </a>
        <a className={style.social} target="_blank" href="https://www.instagram.com">
          <img src={inst} alt="instagram" />
        </a>
        <a className={style.social} target="_blank" href="https://www.pinterest.com">
          <img src={print} alt="pinterest" />
        </a>
      </div>
    </div>
  );
};

export default SocialProduct;
