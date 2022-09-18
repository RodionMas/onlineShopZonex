import React from "react";
import style from "./FooterProduct.module.css";
import PolicyFooter from "./PolicyFooter/PolicyFooter";
import SocialFooter from "./SocialFooter/SocialFooter";
import CurrencyFooter from "./CurrencyFooter/CurrencyFooter";
import LanguageFooter from "./LanguageFooter/LanguageFooter";
import Copyright from "./Copyright/Copyright";
import Payment from "./Payment/Payment";
const FooterProduct = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperBoxTop}>
        <SocialFooter />
        <PolicyFooter />
        <CurrencyFooter />
        <LanguageFooter />
      </div>
      <div className={style.wrapperBoxBot}>
        <Copyright />
        <Payment />
      </div>
    </div>
  );
};

export default FooterProduct;
