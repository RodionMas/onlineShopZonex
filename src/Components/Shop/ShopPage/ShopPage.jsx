import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ContainerShop from "../ContainerShop/ContainerShop";
import ShopSwiper from "../ShopSwiper/ShopSwiper";
import style from "./ShopPage.module.css";
const ShopPage = ({
  activeLinkNav,
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
  product,
  uniqeArr,
  onFilterProductColor,
  offFilterProductColor,
  onFilterProductCategory,
  offFilterProductCategory,
  counterSize,
  setCounterSize,
  onFilterProductSize,
  offFilterProductSize,
  counterPrice,
  setCounterPrice,
  onFilterProductPrice,
  offFilterProductPrice,
  counterBrand,
  setCounterBrand,
  onFilterProductBrand,
  offFilterProductBrand,
  counterDiscount,
  setCounterDiscount,
  onFilterProductDiscount,
  offFilterProductDiscount,
  setSelectAColor,
  setSelectASize,
  setActiveLinkNav,
}) => {
  //Column number component
  const columnNumber = [3, 4, 5];
  const [activeNumber, setActiveNumber] = React.useState(4);
  const activeNumberFn = (num) => {
    setActiveNumber(num);
  };
  //Column number component--

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setSelectAColor("SELECT A COLOR");
    setSelectASize("SELECT A SIZE");
  }, []);
  return (
    <div className={style.wrapper}>
      <ShopSwiper />
      <BreadCrumbs activeLinkNav={activeLinkNav} setActiveLinkNav={setActiveLinkNav} />
      <ContainerShop
        offFilterProductCategory={offFilterProductCategory}
        offFilterProductColor={offFilterProductColor}
        uniqeArr={uniqeArr}
        product={product}
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
        onFilterProductColor={onFilterProductColor}
        onFilterProductCategory={onFilterProductCategory}
        counterSize={counterSize}
        setCounterSize={setCounterSize}
        onFilterProductSize={onFilterProductSize}
        offFilterProductSize={offFilterProductSize}
        counterPrice={counterPrice}
        setCounterPrice={setCounterPrice}
        onFilterProductPrice={onFilterProductPrice}
        offFilterProductPrice={offFilterProductPrice}
        counterBrand={counterBrand}
        setCounterBrand={setCounterBrand}
        onFilterProductBrand={onFilterProductBrand}
        offFilterProductBrand={offFilterProductBrand}
        counterDiscount={counterDiscount}
        setCounterDiscount={setCounterDiscount}
        onFilterProductDiscount={onFilterProductDiscount}
        offFilterProductDiscount={offFilterProductDiscount}
      />
    </div>
  );
};

export default ShopPage;
