import React, { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [hoverImage, setHoverImage] = useState(null);
  

  
  
  const product =useSelector((state) => state.product.clickedProduct);

  
  if (!product) {
    return <div className="container mx-auto p-4">Product not found</div>;
  }

  const offers = [
    {
      price: 1349,
      discount: 10,
      code: "APP10",
      description: "Flat 10% Off your first purchase. Download the app and use",
    },
    {
      price: 1199,
      discount: 20,
      code: "FLAT20",
      description: "Flat 20% Off on minimum purchase of 4599/-",
    },
    {
      price: 1274,
      discount: 15,
      code: "FLAT15",
      description: "Flat 15% Off on minimum purchase of 2999/-",
    },
    {
      price: 1349,
      discount: 10,
      code: "FLAT10",
      description: "Flat 10% Off on minimum purchase of 1999/-",
    },
  ];

  return (
    <div className="container mx-auto p-4 font-titillium">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="md:w-1/2 flex">
          <div className="w-1/6 space-y-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full cursor-pointer border hover:border-black"
                onMouseEnter={() => setHoverImage(index)}
                onMouseLeave={() => setHoverImage(null)}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="w-4/5 pl-2">
            <img
              src={product.images[hoverImage !== null ? hoverImage : mainImage]}
              alt="Main product"
              className="w-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold mt-2">INR {product.price}</p>
          <p className="text-sm text-gray-500">(incl. of all taxes)</p>

          {/* Offers */}
          <div className="mt-4 space-y-2">
            {offers.map((offer, index) => (
              <div key={index} className="flex items-start font-semibold">
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-2 mt-1">
                  <span className="text-xs">%</span>
                </div>
                <div>
                  <p className="text-sm">Get this for INR {offer.price}</p>
                  <p className="text-xs text-gray-600">{offer.description}</p>
                  <p className="text-xs text-gray-600">Code: {offer.code}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <p className="font-semibold mb-2">SELECT A SIZE</p>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 border rounded-md flex items-center justify-center
                    ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300"
                    } 
                    hover:bg-black hover:text-white`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full border bg-gray-200 text-gray-500 py-2 mt-6 flex items-center justify-center">
            SIZE CHART
          </button>

          {/* Add to Bag Button */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              selectedSize ? "max-h-16" : "max-h-0"
            }`}
          >
            <button className="w-full border border-black bg-black text-white py-2 mt-6 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-white" />
              ADD TO BAG
            </button>
          </div>

          {/* Add to Wishlist */}
          <button className="w-full border border-black bg-black text-white py-2 mt-6 flex items-center justify-center">
            <Heart className="w-5 h-5 mr-2 text-white" />
            Add to Wishlist
          </button>

          {/* Expandable Sections */}
          {[
            "EMI / PAY IN 3 OFFERS",
            "DESCRIPTION",
            "MORE INFORMATION",
            "RETURNS & EXCHANGE INFORMATION",
          ].map((section, index) => (
            <div key={index} className="border-t mt-4 pt-4">
              <button className="flex justify-between items-center w-full">
                <span>{section}</span>
                <span>▼</span>
              </button>
            </div>
          ))}

          {/* Delivery Estimation */}
          <div className="mt-6">
            <p className="font-semibold">
              Estimated Delivery Date & COD Checker
            </p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Enter your pincode"
                className="border p-2 flex-grow"
              />
              <button className="bg-black text-white px-4">CHECK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;