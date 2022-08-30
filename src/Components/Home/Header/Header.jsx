import React from "react";
import style from "./Header.module.css";
import HeaderSwiper from "./HeaderTitle/HeaderSwiper";
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}></div>
      <HeaderSwiper />
    </div>
  );
};

export default Header;
