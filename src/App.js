import "./App.css";
import React from "react";
import { db } from "./Assets/db/db";
import Home from "./Components/Home/Home";
import WrapperNav from "./Components/Home/WrapperNav/WrapperNav";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Components/Shop/ShopPage/ShopPage";
function App() {
  //Для выбранной ссылки в меню навигации
  const [activeLinkNav, setActiveLinkNav] = React.useState(0);
  //Для выбранной ссылки в меню навигации--

  //Для всплывающего окна
  const [activeMarkenig, setActiveMarkenig] = React.useState(false);
  //Для всплывающего окна --

  //фильтрация продукта на основной странице
  const [product, setProduct] = React.useState(db);
  //чтобы фильтровать подукт нужно создать новый массив, ниже - новый массив
  const [newProductFilter, setNewProductFilter] = React.useState(product);
  //Для страницы продуктов в магазине
  const [productOnShopPageFilter, setProductOnShopPageFilter] =
    React.useState(product);
  //Для страницы продуктов в магазине--
  const [activeFilter, setActiveFilter] = React.useState(0);
  const filterMain = (filterItem) => {
    if (filterItem === "All") {
      setNewProductFilter(product);
    } else if (filterItem === "Best Sellers") {
      let newFilter = [...product].filter((item) => item.bestSellers === true);
      setNewProductFilter(newFilter);
    } else if (filterItem === "New Products") {
      let newFilter = [...product].filter((item) => item.newShop === true);
      setNewProductFilter(newFilter);
    } else if (filterItem === "Sale Products") {
      let newFilter = [...product].filter((item) => item.sale === true);
      setNewProductFilter(newFilter);
    }
  };
  //фильтрация продукта на основной странице--

  //SelectedFilteres component
  const [newSelectedFilter, setNewSelectedFilter] =
    React.useState([]);

  //SelectedFilteres component--

  //counter filter
  const [counterCategory, setCounterCategory] = React.useState(1);
  //counter filter--

  //Categories Component
  const [stub, setStub] = React.useState(true) // Заглушка
  const [categoriesFIlter, setCategoriesFIlter] = React.useState([
    {category: "All categories", checked: true},
    {category: "Accessories", checked: false},
    {category: "Dresses", checked: false},
    {category: "Coats", checked: false},
    {category: "Clothes", checked: false},
    {category: "T-Shirt", checked: false},
    {category: "Summer", checked: false},
    {category: "Shirts", checked: false},
    {category: "Jacket", checked: false},
    {category: "Short", checked: false},
    {category: "Shoes", checked: false},
    {category: "Sweatshirts", checked: false},
  ]);
  //Categories Component
  React.useEffect(() => {
    setTimeout(() => {
      setActiveMarkenig(true);
    }, 6000);
  }, [newProductFilter, stub, newProductFilter]);
  const closeMarketing = () => {
    setActiveMarkenig(false);
  };
  return (
    <>
      <WrapperNav
        activeLinkNav={activeLinkNav}
        setActiveLinkNav={setActiveLinkNav}
      />
      <Routes>
        <Route
          index
          element={
            <Home
              activeMarkenig={activeMarkenig}
              closeMarketing={closeMarketing}
              filterMain={filterMain}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              newProductFilter={newProductFilter}
            />
          }
        ></Route>
        <Route
          path="/:home/:shop/"
          element={
            <ShopPage
              newSelectedFilter={newSelectedFilter}
              setNewSelectedFilter={setNewSelectedFilter}
              productOnShopPageFilter={productOnShopPageFilter}
              setProductOnShopPageFilter={setProductOnShopPageFilter}
              categoriesFIlter={categoriesFIlter}
              setCategoriesFIlter={setCategoriesFIlter}
              setStub={setStub}
              stub={stub}
              counterCategory={counterCategory}
              setCounterCategory={setCounterCategory}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
