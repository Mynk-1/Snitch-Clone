import React from "react";
import { useLocation } from "react-router-dom";

import MainCrosel from "../HomePageCarousel/MainCarousel.jsx";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductCategory from "../ProductCategory/ProductCategory";
import Banner from "../Banner/Banner";

const HomePage = () => {
  // Get the current location using useLocation
  const location = useLocation();

  // Check if the current path is "/view-all"
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
