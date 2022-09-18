import React from "react";
import style from "./StarRating.module.css";
import rating4 from '../../../../../Assets/img/rating.png'
const StarRating = ({valueProduct}) => {
    console.log()
    return (
        <div className={style.wrapper}>
            <img src={rating4} alt="rating" />
            <span className={style.reviews}>{valueProduct.reviews.length} Reviews</span>
        </div>
    )
};

export default StarRating;
