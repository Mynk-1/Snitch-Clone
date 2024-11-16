import React from "react";

const ProductCategory= () => {
  const categories = [
    {
      name: "ALL BLACK",
      image:
        "https://www.snitch.co.in/cdn/shop/files/25d4695eeaddbcd9fa202337fabc7b2c.jpg?v=1729086388&width=1800",
      description: "Sleek black outfit with sunglasses and jacket",
    },
    {
      name: "SOLID SHIRTS",
      image:
        "https://www.snitch.co.in/cdn/shop/files/df21b9b7dab9fa3c3048c0d5b21d6120.jpg?v=1729086322&width=1800",
      description: "Green button-up shirt",
    },
    {
      name: "DENIMS",
      image:
        "https://www.snitch.co.in/cdn/shop/files/da0d0abeb0c1b8d4606c5e9b6a3706b7.jpg?v=1727499759&width=1800",
      description: "Black denim jeans with white sneakers",
    },
    {
      name: "PRINTED SHIRTS",
      image:
        "https://www.snitch.co.in/cdn/shop/files/9e16c46a91c67e48455c7c40774311d7.jpg?v=1729087077&width=1800",
      description: "Polka dot shirt with book",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={category.image}
              alt={category.description}
              className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-sm md:text-md font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
