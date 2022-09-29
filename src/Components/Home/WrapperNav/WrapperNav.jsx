import React from "react";
import search from "../../../Assets/img/search.png";
import bag from "../../../Assets/img/bag.png";
import logo from "../../../Assets/img/zonex.png";
import style from "./WrapperNav.module.css";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const WrapperNav = ({
  setActiveLinkNav,
  activeLinkNav,
  bagVisibleFn,
  bagVisible,
  productBag,
  product,
  setProduct,
  valueProduct,
}) => {
  const [nav, setNav] = React.useState(false);
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
    return () => {clearTimeout(debounce)};
  }, [searchTerm]);
  return (
    <div className={style.wrapper}>
      <nav className={style.nav}>
        <div className={nav && style.blur}></div>
        <div className={nav ? style.fixed : style.mobileBtn}>
          {nav ? (
            <AiOutlineClose onClick={() => setNav(!nav)} size={25} />
          ) : (
            <AiOutlineMenu onClick={() => setNav(!nav)} size={25} />
          )}
        </div>
        <ul
          className={nav ? [style.list, style.active].join(" ") : [style.list]}
        >
          <div className={style.itemBlock}></div>
          <li className={style.item}>
            <Link
              onClick={() => {setActiveLinkNav(0); setNav(false)}}
              className={activeLinkNav === 0 ? style.active : ""}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className={style.item}>
            <Link
              onClick={() => {setActiveLinkNav(1); setNav(false)}}
              className={activeLinkNav === 1 ? style.active : ""}
              to={"home/shop"}
            >
              Shop
            </Link>
          </li>
          <li className={style.item}>
            <Link
              onClick={() => {setActiveLinkNav(2); setNav(false)}}
              className={activeLinkNav === 2 ? style.active : ""}
              to={"/home"}
            >
              Elements
            </Link>
          </li>
          <li className={style.item}>
            <Link
              onClick={() => {setActiveLinkNav(3); setNav(false)}}
              className={activeLinkNav === 3 ? style.active : ""}
              to={"/home"}
            >
              Blog
            </Link>
          </li>
          <li className={style.item}>
            <Link
              onClick={() => {setActiveLinkNav(4); setNav(false)}}
              className={activeLinkNav === 4 ? style.active : ""}
              to={"/home"}
            >
              Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.imgBox}>
        <img className={style.logo} src={logo} alt="logo" />
      </div>
      <div className={style.bagWrapper}>
        <ul className={style.listIcon}>
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
          <li className={style.itemIcon + " " + style.inpSearchBox}>
            {searchVisible && (
              <div>
                <input
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  placeholder="Search..."
                  className={searchVisible ? style.inp : style.hide}
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
                        <Link
                          onClick={() => {
                            valueProduct.push(item);
                          }}
                          className={style.link}
                          to={`/home/shop/${item.id}`}
                        >
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
    </div>
  );
};

export default WrapperNav;
