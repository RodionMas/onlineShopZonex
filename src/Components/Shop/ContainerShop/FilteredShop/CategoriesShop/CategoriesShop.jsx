import React from "react";
import style from "./CategoriesShop.module.css";
import close from "../../../../../Assets/img/close.png";

const CategoriesShop = ({
  categoriesFIlter,
  setNewSelectedFilter,
  newSelectedFilter,
  setStub,
  counterCategory,
  setCounterCategory,
  productOnShopPageFilter,
  setProductOnShopPageFilter,
}) => {

  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [hideContent, setHideContent] = React.useState(false);
  React.useEffect(()=>{
    setSelectedCategory(productOnShopPageFilter)
  },[])
  return (
    <div className={style.wrapper}>
      {!hideContent && (
        <div className={style.hideBox}>
          <button
            onClick={() => {
              setHideContent(true);
            }}
            className={style.btnHide}
          >
            <img src={close} alt="close" />
            <span className={style.hideText}> HIDE FILTRES </span>
          </button>
        </div>
      )}
      <div className={style.categories}>
        <hr />
        <div
          onClick={() => {
            setHideContent(false);
          }}
          className={style.categoriesTextBox}
        >
          <h2 className={style.categoriesText}>
            CATEGORIES <span className={style.quantity}>{counterCategory}</span>
          </h2>
          <hr className={style.smallLine} />
        </div>
        {!hideContent && (
          <div className={style.categoriesCheks}>
            {categoriesFIlter.map((category, index) => (
              <label key={index} htmlFor={"categoryId" + index}>
                <input
                  checked={category.checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      let newFilterShop = [...productOnShopPageFilter].filter(item => {
                        return item.categories === category.category 
                      })
                      setProductOnShopPageFilter(newFilterShop)
                      setStub(false);
                      category.checked = e.target.checked;
                      setCounterCategory(counterCategory + 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter,
                        e.target.value,
                      ]);
                    } else if (!e.target.checked) {
                      setProductOnShopPageFilter(selectedCategory)
                      setStub(true);
                      category.checked = e.target.checked;
                      setCounterCategory(counterCategory - 1);
                      setNewSelectedFilter([
                        ...newSelectedFilter.filter(
                          (item) => item != e.target.value
                        ),
                      ]);
                    }
                  }}
                  type="checkbox"
                  id={"categoryId" + index}
                  value={category.category}
                />

                <span>{category.category}</span>
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default CategoriesShop;
