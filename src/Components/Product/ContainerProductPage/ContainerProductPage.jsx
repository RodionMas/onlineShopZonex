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
  productBag,
  setProductBag,
  setStub,
  stub,
  wishlist,
}) => {
  return (
    <div className={style.wrapper}>
      <SwiperProductPage valueProduct={valueProduct.productInfo} />
      <AboutProduct
        stub={stub}
        setStub={setStub}
        selectASize={selectASize}
        setSelectASize={setSelectASize}
        valueProduct={valueProduct.productInfo}
        selectAColor={selectAColor}
        setSelectAColor={setSelectAColor}
        setCounterProductPage={setCounterProductPage}
        counterProductPage={counterProductPage}
        productBag={productBag}
        setProductBag={setProductBag}
        wishlist={wishlist}
      />
    </div>
  );
};

export default ContainerProductPage;
