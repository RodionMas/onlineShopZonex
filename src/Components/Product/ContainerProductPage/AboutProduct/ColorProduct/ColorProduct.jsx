import React from "react";
import style from "./ColorProduct.module.css";
import closeRed from "../../../../../Assets/img/redClose.png";
const ColorProduct = ({ valueProduct, selectAColor, setSelectAColor }) => {
  let selectColor = valueProduct.color.map((item, i) => {
    return (
      <li key={i} className={style.item}>
        <button
          onClick={() => setSelectAColor(item)}
          className={
            item === "red"
              ? style.red
              : item === "yellow"
              ? style.yellow
              : item === "green"
              ? style.green
              : item === "white"
              ? style.white
              : item === "black"
              ? style.black
              : item === "colorful"
              ? style.colorful
              : item === "purple"
              ? style.purple
              : item === "grey"
              ? style.grey
              : ""
          }
        ></button>
      </li>
    );
  });
  React.useEffect(() => {

  }, [selectAColor])
  return (
    <div className={style.wrapper}>
      <div className={style.colorBox}>
        <h3 className={style.colorText}>COLOR: </h3>
        <span className={style.selectedColor}>
          {selectAColor.toUpperCase()}
        </span>
      </div>
      <div className={style.dotColors}>
        <ul className={style.list}>{selectColor}</ul>
        {selectAColor !== "SELECT A COLOR" ? (
          <button
            onClick={() => setSelectAColor("SELECT A COLOR")}
            className={style.close}
          >
            <img src={closeRed} alt="close" />
            <span className={style.clear}>CLEAR</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ColorProduct;
