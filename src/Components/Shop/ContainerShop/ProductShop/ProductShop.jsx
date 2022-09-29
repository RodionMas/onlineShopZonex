import React from "react";
import ColumnNumbers from "./ColumnNumbers/ColumnNumbers";
import ProductOnShopPage from "./ProductOnShopPage/ProductOnShopPage";
import SelectedFilters from "./SelectedFilters/SelectedFilters";
import SortProduct from "./SortProduct/SortProduct";
import style from "./ProductShop.module.css";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";

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
  uniqeArr,
  counterSize,
  setCounterSize,
  offFilterProductColor,
  offFilterProductCategory,
}) => {
  //Pagination
  const [perPage, setPerPage] = React.useState(8);
  const [size, setSize] = React.useState(perPage);
  const [current, setCurrent] = React.useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(productOnShopPageFilter.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current, pageSize) => {
    return productOnShopPageFilter.slice(
      (current - 1) * pageSize,
      current * pageSize
    );
  };
  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  //Pagination--

  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <ColumnNumbers
          activeNumberFn={activeNumberFn}
          columnNumber={columnNumber}
          activeNumber={activeNumber}
        />
        <SortProduct
          setStub={setStub}
          stub={stub}
          productOnShopPageFilter={productOnShopPageFilter}
          uniqeArr={uniqeArr}
        />
      </div>
      <SelectedFilters
        setStub={setStub}
        stub={stub}
        setNewSelectedFilter={setNewSelectedFilter}
        newSelectedFilter={newSelectedFilter}
        allFilter={allFilter}
        setAllFilter={setAllFilter}
        counterCategory={counterCategory}
        setCounterCategory={setCounterCategory}
        counterColor={counterColor}
        setCounterColor={setCounterColor}
        counterSize={counterSize}
        setCounterSize={setCounterSize}
        offFilterProductCategory={offFilterProductCategory}
        offFilterProductColor={offFilterProductColor}
      />

      <ProductOnShopPage
        uniqeArr={uniqeArr}
        setProductOnShopPageFilter={setProductOnShopPageFilter}
        allFilter={allFilter}
        activeNumber={activeNumber}
        productOnShopPageFilter={productOnShopPageFilter}
        setAllFilter={setAllFilter}
        current={current}
        size={size}
        getData={getData}
      />
      <Pagination
        className="pagination-data"
        showTotal={(total, range) =>
          `Showing ${range[0]}-${range[1]} of ${total}`
        }
        onChange={PaginationChange}
        total={productOnShopPageFilter.length}
        current={current}
        pageSize={size}
        showSizeChanger={false}
        onShowSizeChange={PerPageChange}
      />
    </div>
  );
};

export default ProductShop;
