import React from "react";
import ColumnNumbers from "./ColumnNumbers/ColumnNumbers";
import ProductOnShopPage from "./ProductOnShopPage/ProductOnShopPage";
import SelectedFilters from "./SelectedFilters/SelectedFilters";

const ProductShop = ({
  columnNumber,
  activeNumberFn,
  activeNumber,
  newSelectedFilter,
  setNewSelectedFilter,
  productOnShopPageFilter,
  setAllFilter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
  allFilter,
  counterColor,
  setCounterColor,
  setProductOnShopPageFilter,
}) => {
  return (
    <div>
      <ColumnNumbers
        activeNumberFn={activeNumberFn}
        columnNumber={columnNumber}
        activeNumber={activeNumber}
      />
      <SelectedFilters
        stub={stub}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        setStub={setStub}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
      />
      <ProductOnShopPage
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        allFilter={allFilter}
        activeNumber={activeNumber}
        productOnShopPageFilter={productOnShopPageFilter}
      />
    </div>
  );
};

export default ProductShop;
