import React from "react";
import style from "./AboutDescription.module.css";
import raiting from "../../../../Assets/img/rating.png";
const AboutDescription = ({ reviews, additional, valueProduct, desc }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.desc}>
        <span className={desc === true ? style.text : style.hideText}>
          {valueProduct.descr}
        </span>
      </div>
      <div className={style.additional}>
        <span className={additional === true ? style.text : style.hideText}>
          {valueProduct.additional}
        </span>
      </div>
      <div className={style.reviews}>
        <span className={reviews === true ? style.text : style.hideText}>
          {valueProduct.reviews.map((text, i) => {
            return (
              <div key={i}>
                <div className={style.reviewsBox}>
                  <span className={style.name}>{text.name}</span>
                  <div className={style.raiting}>
                    <span className={style.raitingText}>User rating: </span>
                    <img className={style.raitingImg} src={raiting} alt="" />
                  </div>
                </div>
                <br />
                <span>{text.review}</span>
                <hr />
              </div>
            );
          })}
        </span>
      </div>
      <br />
    </div>
  );
};

export default AboutDescription;
