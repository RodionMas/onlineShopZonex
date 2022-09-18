import React from "react";
import style from "./Reviews.module.css";

const Reviews = ({ reviews, visibleContent, valueProduct }) => {
  return (
    <div className={style.wrapper}>
      <button
        onClick={() => visibleContent(false, false, true)}
        className={reviews === false ? style.dim : style.reviews}
      >
        Reviews ({valueProduct.reviews.length})
      </button>
    </div>
  );
};

export default Reviews;
