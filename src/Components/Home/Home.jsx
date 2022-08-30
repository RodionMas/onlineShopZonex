import React from "react";
import MarketingCatch from "./MarketingCatch/MarketingCatch";
import Header from './Header/Header'
import Banners1 from "./Banners/Banner1/Banners1";
import Banners2 from "./Banners/Banner2/Banners2";
import Banners3 from "./Banners/Banner3/Banners3";
import FilterProduct from "./FilterProduct/FilterProduct";
import Product from "./Product/Product";
import BannerBottom from "./BannerBottom/BannerBottom";
import Footer from "./Footer/Footer";
const Home = ({activeMarkenig, closeMarketing, filterMain, activeFilter, setActiveFilter, newProductFilter}) => {
  return (
    <div className="bg">
      {activeMarkenig && <MarketingCatch closeMarketing={closeMarketing} />}
      <div className="container">
        <Header />
        <div className="bannerWrapper">
          <Banners1 />
          <Banners2 />
          <Banners3 />
        </div>
        <FilterProduct
          filterMain={filterMain}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <div className="product">
          {newProductFilter.map((item, index) => (
            <Product {...item} key={index} />
          ))}
        </div>
        <BannerBottom />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
