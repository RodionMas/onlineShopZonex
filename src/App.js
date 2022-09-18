import "./App.css";
import React from "react";
import { db } from "./Assets/db/db";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/Product/ProductPage";
import WrapperNav from "./Components/Home/WrapperNav/WrapperNav";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Components/Shop/ShopPage/ShopPage";
import Bag from "./Components/Bag/Bag";
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
  const [newProductOnShopPageFilter, setNewProductOnShopPageFilter] =
    React.useState([]);
  const [uniqeArr, setUniqeArr] = React.useState([]);

  //Category
  const onFilterProductCategory = (filter) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.categories === filter;
    });
    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductCategory = (filter) => {
    let newFilter = uniqeArr.filter((product) => {
      return product.categories !== filter;
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };
  //Color
  const onFilterProductColor = (filter) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.color.includes(filter);
    });

    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductColor = (filter) => {
    let newFilter = uniqeArr.filter((product) => {
      return !product.color.includes(filter);
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };
  //Size
  const onFilterProductSize = (filter) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.size.includes(filter);
    });

    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductSize = (filter) => {
    let newFilter = uniqeArr.filter((product) => {
      return !product.size.includes(filter);
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };
  //Price
  const onFilterProductPrice = (priceOne, priceTwo) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.price >= priceOne && product.price <= priceTwo;
    });

    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductPrice = (priceOne, priceTwo) => {
    let newFilter = uniqeArr.filter((product) => {
      return !(product.price >= priceOne && product.price <= priceTwo);
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };
  //Brand
  const onFilterProductBrand = (filter) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.brand === filter;
    });
    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductBrand = (filter) => {
    let newFilter = uniqeArr.filter((product) => {
      return product.brand !== filter;
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };
  //Discount
  const onFilterProductDiscount = (filter) => {
    let newFilter = [...productOnShopPageFilter].filter((product) => {
      return product.discount === filter;
    });
    newProductOnShopPageFilter.push(...newFilter);
    setUniqeArr([...new Set(newProductOnShopPageFilter)]);
  };
  const offFilterProductDiscount = (filter) => {
    let newFilter = uniqeArr.filter((product) => {
      return product.discount !== filter;
    });
    setNewProductOnShopPageFilter(newFilter);
    setUniqeArr(newFilter);
  };

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
  const [newSelectedFilter, setNewSelectedFilter] = React.useState([]);

  //SelectedFilteres component--

  //counter filters
  const [counterCategory, setCounterCategory] = React.useState(0);
  const [counterColor, setCounterColor] = React.useState(0);
  const [counterSize, setCounterSize] = React.useState(0);
  const [counterPrice, setCounterPrice] = React.useState(0);
  const [counterBrand, setCounterBrand] = React.useState(0);
  const [counterDiscount, setCounterDiscount] = React.useState(0);

  //counter filters--

  //filter checkbox
  const [stub, setStub] = React.useState(true); // Заглушка
  const [allFilter, setAllFilter] = React.useState({
    categoriesFIlter: [
      { category: "Accessories", checked: false },
      { category: "Dresses", checked: false },
      { category: "Coats", checked: false },
      { category: "Clothes", checked: false },
      { category: "Summer", checked: false },
      { category: "Shirts", checked: false },
      { category: "Jacket", checked: false },
      { category: "Short", checked: false },
      { category: "Shoes", checked: false },
      { category: "Sweatshirts", checked: false },
    ],
    colorFilter: [
      { color: "red", checked: false },
      { color: "yellow", checked: false },
      { color: "green", checked: false },
      { color: "white", checked: false },
      { color: "black", checked: false },
      { color: "brown", checked: false },
      { color: "purple", checked: false },
      { color: "grey", checked: false },
      { color: "colorful", checked: false },
      { color: "blue", checked: false },
    ],
    sizeFilter: [
      { size: "23", checked: false },
      { size: "24", checked: false },
      { size: "25", checked: false },
      { size: "26", checked: false },
      { size: "27", checked: false },
      { size: "28", checked: false },
      { size: "29", checked: false },
      { size: "30", checked: false },
      { size: "31", checked: false },
    ],
    priceFilter: [
      { price: [0, " - ", 100], checked: false },
      { price: [100, " - ", 200], checked: false },
      { price: [200, " - ", 300], checked: false },
      { price: [300, " - ", 400], checked: false },
      { price: [400, " - ", 500], checked: false },
      { price: [500, " - ", 600], checked: false },
      { price: [600, " - ", 700], checked: false },
      { price: [700, " - ", 800], checked: false },
    ],
    brandFilter: [
      { brand: "Vero Moda", checked: false },
      { brand: "Betty Barclay", checked: false },
      { brand: "Gerry Weber", checked: false },
      { brand: "Desigual", checked: false },
      { brand: "Jack & Jones", checked: false },
      { brand: "Noom", checked: false },
      { brand: "EMPORIO ARMANI", checked: false },
      { brand: "S.Oliver", checked: false },
      { brand: "Marc OPolo", checked: false },
      { brand: "Karl Lagerfeld", checked: false },
    ],
    discountFilter: [
      { discount: "70% And Above", checked: false },
      { discount: "60% - 70% Off", checked: false },
      { discount: "40% - 60% Off", checked: false },
      { discount: "Less Than 40% Off", checked: false },
    ],
  });
  //filter checkbox--

  //Select Color and Size on ProductPage
  const [selectAColor, setSelectAColor] = React.useState("SELECT A COLOR");
  const [selectASize, setSelectASize] = React.useState("SELECT A SIZE");
  //Select Color and Size on ProductPage--

  //Counter Product Page
  const [counterProductPage, setCounterProductPage] = React.useState(1);
  //Counter Product Page--

  //Bag visible
  const [bagVisible, setBagVisible] = React.useState(false)
  const bagVisibleFn = () => {
    if(bagVisible === true){
      setBagVisible(false)
    } else {
      setBagVisible(true)
    }
  }
  //Bag visible--

  //Product Bag
  const [productBag, setProductBag] = React.useState([])
  //Product Bag--

  React.useEffect(() => {
    setTimeout(() => {
      setActiveMarkenig(true);
    }, 6000);
  }, [
    newProductFilter,
    stub,
    productOnShopPageFilter,
    newProductOnShopPageFilter,
    uniqeArr,
  ]);
  const closeMarketing = () => {
    setActiveMarkenig(false);
  };
  return (
    <>
      <WrapperNav
        activeLinkNav={activeLinkNav}
        setActiveLinkNav={setActiveLinkNav}
        bagVisibleFn={bagVisibleFn}
        bagVisible={bagVisible}
      />
      <Bag bagVisible={bagVisible} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setActiveLinkNav={setActiveLinkNav}
              activeMarkenig={activeMarkenig}
              closeMarketing={closeMarketing}
              filterMain={filterMain}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              newProductFilter={newProductFilter}
              setSelectAColor={setSelectAColor}
              setSelectASize={setSelectASize}
            />
          }
        ></Route>
        <Route
          path="/:home/:shop/"
          element={
            <ShopPage
              activeLinkNav={activeLinkNav}
              setActiveLinkNav={setActiveLinkNav}
              setSelectAColor={setSelectAColor}
              setSelectASize={setSelectASize}
              offFilterProductCategory={offFilterProductCategory}
              offFilterProductColor={offFilterProductColor}
              onFilterProductColor={onFilterProductColor}
              onFilterProductCategory={onFilterProductCategory}
              newSelectedFilter={newSelectedFilter}
              setNewSelectedFilter={setNewSelectedFilter}
              productOnShopPageFilter={productOnShopPageFilter}
              setProductOnShopPageFilter={setProductOnShopPageFilter}
              allFilter={allFilter}
              setAllFilter={setAllFilter}
              setStub={setStub}
              stub={stub}
              counterCategory={counterCategory}
              setCounterCategory={setCounterCategory}
              counterColor={counterColor}
              setCounterColor={setCounterColor}
              product={product}
              uniqeArr={uniqeArr}
              counterSize={counterSize}
              setCounterSize={setCounterSize}
              onFilterProductSize={onFilterProductSize}
              offFilterProductSize={offFilterProductSize}
              counterPrice={counterPrice}
              setCounterPrice={setCounterPrice}
              onFilterProductPrice={onFilterProductPrice}
              offFilterProductPrice={offFilterProductPrice}
              counterBrand={counterBrand}
              setCounterBrand={setCounterBrand}
              onFilterProductBrand={onFilterProductBrand}
              offFilterProductBrand={offFilterProductBrand}
              counterDiscount={counterDiscount}
              setCounterDiscount={setCounterDiscount}
              onFilterProductDiscount={onFilterProductDiscount}
              offFilterProductDiscount={offFilterProductDiscount}
            />
          }
        />
        <Route
          path="/:home/:shop/:id"
          element={
            <ProductPage
              setActiveLinkNav={setActiveLinkNav}
              selectAColor={selectAColor}
              productOnShopPageFilter={productOnShopPageFilter}
              setSelectAColor={setSelectAColor}
              selectASize={selectASize}
              setSelectASize={setSelectASize}
              setCounterProductPage={setCounterProductPage}
              counterProductPage={counterProductPage}
              productBag={productBag}
              setProductBag={setProductBag}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
