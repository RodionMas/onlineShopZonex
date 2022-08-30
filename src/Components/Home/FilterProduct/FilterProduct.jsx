import React from "react";
import style from "./FilterProduct.module.css";
const FilterProduct = ({ setActiveFilter, activeFilter, filterMain }) => {
  const filterProduct = [
    "All",
    "Best Sellers",
    "New Products",
    "Sale Products",
  ];
  return (
    <div className={style.wrapper}>
      {filterProduct.map((item, i) => (
        <span
          onClick={() => {
            setActiveFilter(i);
            filterMain(item);
          }}
          key={i}
          className={activeFilter === i ? style.active : style.text}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default FilterProduct;
