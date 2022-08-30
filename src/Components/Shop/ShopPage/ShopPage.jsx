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
  setCategoriesFIlter,
  categoriesFIlter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
}) => {
  const [colorFilter, setColorFilter] = React.useState([
    "red",
    "yellow",
    "green",
    "white",
    "black",
    "brown",
    "purple",
    "grey",
  ]);
  const [sizeFilter, setSizeFilter] = React.useState([
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ]);
  const [priceFilter, setPriceFilter] = React.useState([
    "0 - 100",
    "100 - 200",
    "200 - 300",
    "400 - 500",
    "500 - 600",
    "600 - 700",
    "700 - 800",
    "800 - 900",
  ]);
  const [brandFilter, setBrandFilter] = React.useState([
    "Vero Moda",
    "Betty Barclay",
    "Gerry Weber",
    "Desigual",
    "Jack & Jones",
    "Noom",
    "EMPORIO ARMANI",
    "S.Oliver",
    "Marc OPolo",
    "Karl Lagerfeld",
  ]);
  const [discountFilter, setDiscountFilter] = React.useState([
    "70% And Above",
    "60% - 70% Off",
    "40% - 60% Off",
    "Less Than 40% Off",
  ]);
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
        priceFilter={priceFilter}
        sizeFilter={sizeFilter}
        colorFilter={colorFilter}
        categoriesFIlter={categoriesFIlter}
        setCategoriesFIlter={setCategoriesFIlter}
        brandFilter={brandFilter}
        discountFilter={discountFilter}
        columnNumber={columnNumber}
        activeNumberFn={activeNumberFn}
        activeNumber={activeNumber}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
      />
    </div>
  );
};

export default ShopPage;
