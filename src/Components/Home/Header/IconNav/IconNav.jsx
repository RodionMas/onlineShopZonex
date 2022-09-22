import React from "react";
import style from "./IconNav.module.css";
import search from "../../../../Assets/img/search.png";
import bag from "../../../../Assets/img/bag.png";
import { Link } from "react-router-dom";
const IconNav = ({ bagVisibleFn, bagVisible, productBag, product, valueProduct }) => {
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [productList, setProductList] = React.useState(product);
  const filterSearchProduct = (searchText, listOfProduct) => {
    if (!searchText) {
      return listOfProduct;
    }
    return listOfProduct.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  React.useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredSearchProduct = filterSearchProduct(searchTerm, product);
      setProductList(filteredSearchProduct);
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);
  return (
    <div className={style.wrapper}>
      <ul className={style.listIcon}>
        <li className={style.itemIcon + " " + style.inpSearchBox}>
          {searchVisible && (
            <div>
              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                placeholder="Search..."
                className={style.inp}
                autoFocus
                autoComplete="off"
                type="text"
                name=""
                id=""
              />
              <div className={style.dropDown}>
                <div className={style.mostSearch}>
                  {searchTerm === "" && <span>Most often searched:</span>}
                </div>

                {productList.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link onClick={() => {
                        valueProduct.push(item)
                      }} className={style.link} to={`/home/shop/${item.id}`}>
                        {item.name}
                        <img className={style.img} src={item.imgUrl} alt="" />
                      </Link>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </li>
        <li className={style.itemIcon}>
          <button
            onClick={() => {
              if (searchVisible) {
                setSearchVisible(false);
              } else {
                setSearchVisible(true);
              }
            }}
            className={style.btnSearch}
          >
            <img src={search} alt="search" />
          </button>
        </li>
        <li className={style.itemIcon + " " + style.bagBox}>
          <button
            onClick={() => bagVisibleFn()}
            className={!bagVisible ? style.btnBag : style.close}
          >
            {!bagVisible && (
              <div>
                <img src={bag} alt="" />{" "}
                <span className={style.bag}>
                  {[...new Set(productBag)].length}
                </span>
              </div>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default IconNav;
