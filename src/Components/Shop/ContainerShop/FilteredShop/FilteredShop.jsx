import React from "react";
import BrandShop from "./BrandShop/BrandShop";
import CategoriesShop from "./CategoriesShop/CategoriesShop";
import ColorShop from "./ColorShop/ColorShop";
import PriceShop from "./PriceShop/PriceShop";
import SizeShop from "./SizeShop/SizeShop";
import Discount from "./Discount/Discount";
const FilteredShop = ({
  categoriesFIlter,
  colorFilter,
  sizeFilter,
  priceFilter,
  brandFilter,
  discountFilter,
  setNewSelectedFilter,
  newSelectedFilter,
  setCategoriesFIlter,
  stub,
  setStub,
  counterCategory,
  setCounterCategory,
  productOnShopPageFilter,
  setProductOnShopPageFilter,
}) => {
  return (
    <div>
      <CategoriesShop
        setStub={setStub}
        stub={stub}
        setCategoriesFIlter={setCategoriesFIlter}
        newSelectedFilter={newSelectedFilter}
        setNewSelectedFilter={setNewSelectedFilter}
        categoriesFIlter={categoriesFIlter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        productOnShopPageFilter={productOnShopPageFilter}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
      />
      <ColorShop colorFilter={colorFilter} />
      <SizeShop sizeFilter={sizeFilter} />
      <PriceShop priceFilter={priceFilter} />
      <BrandShop brandFilter={brandFilter} />
      <Discount discountFilter={discountFilter} />
    </div>
  );
};

export default FilteredShop;
