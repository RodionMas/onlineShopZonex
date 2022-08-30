import React from "react";
import style from "./SelectedFilters.module.css";
import close from "../../../../../Assets/img/close.png";

const SelectedFilters = ({
  categoriesFIlter,
  setCategoriesFIlter,
  setStub,
  stub,
  counterCategory,
  setCounterCategory,
}) => {
  return (
    <div className={style.wrapper}>
      {categoriesFIlter.map((item, i) =>
        item.checked ? (
          <span key={i} className={style.filterText}>
            {item.category}{" "}
            <img
              onClick={() => {
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
    </div>
  );
};

export default SelectedFilters;
