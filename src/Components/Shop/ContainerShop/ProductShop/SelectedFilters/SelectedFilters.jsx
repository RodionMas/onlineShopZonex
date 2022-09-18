import React from "react";
import style from "./SelectedFilters.module.css";
import close from "../../../../../Assets/img/close.png";

const SelectedFilters = ({
  allFilter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
  counterColor,
  setCounterColor,
  counterSize,
  setCounterSize,
  offFilterProductCategory,
  offFilterProductColor,
}) => {
  return (
    <div className={style.wrapper}>
      {allFilter.categoriesFIlter.map((item, i) =>
        item.checked ? (
          <span key={i} className={style.filterText}>
            {item.category}{" "}
            <img
              onClick={() => {
                offFilterProductCategory(item.category)
                setCounterCategory(counterCategory - 1);
                item.checked = false;
                if (stub) {
                  setStub(false);
                } else {
                  setStub(true);
                }
              }}
              className={style.close}
              src={close}
              alt="close"
            />
          </span>
        ) : (
          ""
        )
      )}
      {allFilter.colorFilter.map((item, i) =>
        item.checked ? (
          <span key={i} className={style.filterText}>
            {item.color}{" "}
            <img
              onClick={() => {
                offFilterProductColor(item.color)
                setCounterColor(counterColor - 1);
                item.checked = false;
                if (stub) {
                  setStub(false);
                } else {
                  setStub(true);
                }
              }}
              className={style.close}
              src={close}
              alt="close"
            />
          </span>
        ) : (
          ""
        )
      )}
      {allFilter.sizeFilter.map((item, i) =>
        item.checked ? (
          <span key={i} className={style.filterText}>
            {item.size}{" "}
            <img
              onClick={() => {
                setCounterColor(counterSize - 1);
                item.checked = false;
                if (stub) {
                  setStub(false);
                } else {
                  setStub(true);
                }
              }}
              className={style.close}
              src={close}
              alt="close"
            />
          </span>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SelectedFilters;
