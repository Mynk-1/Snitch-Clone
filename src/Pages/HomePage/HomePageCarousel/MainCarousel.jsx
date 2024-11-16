import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCrousalData } from "./MainCarouselData";
import "./MainCarousel.css";



const items = MainCrousalData.map((item) => (
  <img className="object-fill w-[100%] h-[100%]" src={item.image} />
));

const MainCrosel = () => (
  <div>
    <div className="MainCrosel ">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1500}
        infinite
      />
    </div>
  </div>
);

export default MainCrosel;
