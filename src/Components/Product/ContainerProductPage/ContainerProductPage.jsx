import React from "react";
import AboutProduct from "./AboutProduct/AboutProduct";
import style from "./ContainerProductPage.module.css";
import SwiperProductPage from "./SwiperProductPage/SwiperProductPage";
const ContainerProductPage = ({
  valueProduct,
  selectAColor,
  setSelectAColor,
  selectASize,
  setSelectASize,
  setCounterProductPage,
  counterProductPage,
}) => {
  return (
    <div className={style.wrapper}>
      <SwiperProductPage valueProduct={valueProduct.productInfo} />
      <AboutProduct
        selectASize={selectASize}
        setSelectASize={setSelectASize}
        valueProduct={valueProduct.productInfo}
        selectAColor={selectAColor}
        setSelectAColor={setSelectAColor}
        setCounterProductPage={setCounterProductPage}
        counterProductPage={counterProductPage}
      />
    </div>
  );
};

export default ContainerProductPage;
