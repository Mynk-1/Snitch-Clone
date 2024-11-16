import React from "react";
import { useLocation } from "react-router-dom";

import MainCrosel from "../HomePageCarousel/MainCarousel.jsx";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductCategory from "../ProductCategory/ProductCategory";
import Banner from "../Banner/Banner";

const HomePage = () => {

  const location = useLocation();

 
  const isViewAllPage = location.pathname === "/view-all";
  return (
    <div className="p-4">
      {!isViewAllPage && <MainCrosel className="-z-10" />}

      <ProductSlider />
      <ProductCategory />
      <ProductSlider />
      <Banner/>
    </div>
  );
};

export default HomePage;
