import React from "react";
import AboutDescription from "./AboutDescription/AboutDescription";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import Description from "./Description/Description";
import style from "./ProductDescription.module.css";
import Reviews from "./Reviews/Reviews";
const ProductDescription = ({valueProduct}) => {
  const [desc, setDesc] = React.useState(true)
  const [additional, setAdditional] = React.useState(false)
  const [reviews, setReviews] = React.useState(false)
  const visibleContent = (description, additional, reviews) => {
    if(description === true){
      setDesc(true)
      setAdditional(false)
      setReviews(false)
    } else if(additional === true){
      setDesc(false)
      setAdditional(true)
      setReviews(false)
    } else if(reviews === true){
      setDesc(false)
      setAdditional(false)
      setReviews(true)
    }
  }
  return (
    <div className={style.wrapper}>
      <div className={style.wrapperProduct}>
        <Description desc={desc} visibleContent={visibleContent} />
        <AdditionalInformation additional={additional} visibleContent={visibleContent} />
        <Reviews valueProduct={valueProduct} reviews={reviews} visibleContent={visibleContent} />
      </div>
      <AboutDescription reviews={reviews} additional={additional} desc={desc} valueProduct={valueProduct} />
    </div>
  );
};

export default ProductDescription;
