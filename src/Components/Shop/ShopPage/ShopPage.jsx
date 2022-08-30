import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ContainerShop from "../ContainerShop/ContainerShop";
import ShopSwiper from "../ShopSwiper/ShopSwiper";
import style from "./ShopPage.module.css";
const ShopPage = ({
  setNewSelectedFilter,
  newSelectedFilter,
  setProductOnShopPageFilter,
  productOnShopPageFilter,
  allFilter,
  setAllFilter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
  counterColor,
  setCounterColor,
}) => {
  //Column number component
  const columnNumber = [3, 4, 5];
  const [activeNumber, setActiveNumber] = React.useState(4);
  const activeNumberFn = (num) => {
    setActiveNumber(num);
  };
  //Column number component--

  return (
    <div className={style.wrapper}>
      <ShopSwiper />
      <BreadCrumbs />
      <ContainerShop
        stub={stub}
        setStub={setStub}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        columnNumber={columnNumber}
        activeNumberFn={activeNumberFn}
        activeNumber={activeNumber}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
      />
    </div>
  );
};

export default ShopPage;
