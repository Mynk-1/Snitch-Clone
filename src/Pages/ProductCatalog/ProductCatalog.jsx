import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Filter,
  X,
} from "lucide-react";

// Assuming ProductCard is in the same directory, adjust the import path if needed
import ProductCard from "../Cards/ProductCard";

const initialFilters = {
  Collections: [
    { name: "SHIRTS", count: 514 },
    { name: "JEANS", count: 117 },
    { name: "T-SHIRTS", count: 79 },
    { name: "TROUSERS", count: 67 },
    { name: "OVERSHIRT", count: 34 },
    { name: "JOGGERS & TRACKPANTS", count: 27 },
  ],
  Size: [
    { name: "S", count: 597 },
    { name: "M", count: 631 },
    { name: "L", count: 640 },
    { name: "XL", count: 645 },
    { name: "XXL", count: 606 },
    { name: "28", count: 14 },
    { name: "30", count: 239 },
  ],
  Fit: [
    { name: "Baggy Fit", count: 22 },
    { name: "Bootcut", count: 15 },
    { name: "Box Fit", count: 69 },
    { name: "Loose Fit", count: 7 },
    { name: "Oversized Fit", count: 13 },
    { name: "Regular Fit", count: 36 },
    { name: "Relaxed Fit", count: 91 },
  ],
  Pattern: [
    { name: "PLAIN", count: 401 },
    { name: "PRINTED", count: 123 },
    { name: "CHECKS", count: 102 },
    { name: "STRIPES", count: 57 },
    { name: "SNITCH LUXE", count: 49 },
    { name: "DISTRESSED", count: 30 },
    { name: "CROCHET", count: 12 },
  ],
  Colors: [
    { name: "BLACK", count: 125 },
    { name: "WHITE", count: 83 },
    { name: "NAVY", count: 82 },
    { name: "BLUE", count: 82 },
    { name: "LIGHT BLUE", count: 55 },
    { name: "GREY", count: 48 },
    { name: "BEIGE", count: 45 },
  ],
  Price: [
    { name: "Under INR 999", count: 94 },
    { name: "INR 999", count: 88 },
    { name: "INR 999 - INR 1,499", count: 653 },
    { name: "INR 1,499 - INR 1,999", count: 322 },
    { name: "Above INR 1,999", count: 30 },
  ],
  Occasion: [
    { name: "CASUAL WEAR", count: 813 },
    { name: "STREET WEAR", count: 355 },
    { name: "COLLEGE WEAR", count: 814 },
    { name: "FORMAL WEAR", count: 86 },
    { name: "FESTIVE WEAR", count: 86 },
    { name: "ELEVATED", count: 19 },
  ],
  Sleeves: [
    { name: "FULL SLEEVE", count: 513 },
    { name: "ELBOW SLEEVE", count: 4 },
    { name: "HALF SLEEVE", count: 147 },
  ],
};

const initialProducts =[
  {
    "id": 1,
    "name": "Grey Stripes Polo Sweater",
    "price": "INR 1,899",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": [
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0473.jpg?v=1729251876&width=1800"
    ]
  },
  {
    "id": 2,
    "name": "Teal Stripes Polo Sweater",
    "price": "INR 1,899",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": [
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0378.jpg?v=1729251938&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0378.jpg?v=1729251938&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0378.jpg?v=1729251938&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0378.jpg?v=1729251938&width=1800"
    ]
  },
  {
    "id": 3,
    "name": "Navy Stripes Polo Sweater",
    "price": "INR 1,899",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": [
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0237.jpg?v=1729252022&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0237.jpg?v=1729252022&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0237.jpg?v=1729252022&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0237.jpg?v=1729252022&width=1800"
    ]
  },
  {
    "id": 4,
    "name": "Black Stripes Polo Sweater",
    "price": "INR 1,899",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "images": [
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0175.jpg?v=1729252085&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0175.jpg?v=1729252085&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0175.jpg?v=1729252085&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/4MSW9044-0175.jpg?v=1729252085&width=1800"
    ]
  },
  {
    "id": 5,
    "name": "Light Blue 5 Pockets Slim Fit Joggers",
    "price": "INR 1,499",
    "sizes": ["30", "32", "34", "36", "38"],
    "images": [
      "https://www.snitch.co.in/cdn/shop/files/1f34450ea71fd4b2534dcf622d2f3430.jpg?v=1729170155&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/1f34450ea71fd4b2534dcf622d2f3430.jpg?v=1729170155&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/1f34450ea71fd4b2534dcf622d2f3430.jpg?v=1729170155&width=1800",
      "https://www.snitch.co.in/cdn/shop/files/1f34450ea71fd4b2534dcf622d2f3430.jpg?v=1729170155&width=1800"
    ]
  }
]


const MobileFilter = ({ filters, openDrawers, toggleDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-black text-white p-4 rounded-full md:hidden shadow-lg"
      >
        <Filter size={24} />
      </button>
      <div
        className={`fixed inset-y-0 right-0 w-[90%] sm:w-[70%] md:w-[50%] max-w-[400px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto flex flex-col md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {Object.entries(filters).map(([filterName, options], index) => (
            <div
              key={filterName}
              className={`py-3 border-b transform transition-all duration-300 ease-in-out ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="flex items-center justify-between cursor-pointer uppercase px-2"
                onClick={() => toggleDrawer(filterName)}
              >
                <span className="font-semibold">{filterName}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openDrawers[filterName] ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {openDrawers[filterName] && (
                <div className="ml-4 mt-3 px-2">
                  {options.map((option) => (
                    <div
                      key={option.name}
                      className="flex items-center mb-3 text-sm"
                    >
                      <input type="checkbox" className="mr-3" />
                      <span>
                        {option.name} ({option.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-400 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

const ProductCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDrawers, setOpenDrawers] = useState({});
  const productsPerPage = 12;

  const allProducts = useMemo(() => {
    return Array(5)
      .fill()
      .flatMap((_, index) =>
        initialProducts.map((product) => ({
          ...product,
          id: `${index}-${product.name}`,
        }))
      );
  }, []);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return allProducts.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage, allProducts]);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const toggleDrawer = (drawer) => {
    setOpenDrawers((prev) => ({ ...prev, [drawer]: !prev[drawer] }));
  };

  return (
    <div className="container mx-auto px-4 font-titillium py-4">
      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-1/4 pr-4">
          {Object.entries(initialFilters).map(([filterName, options]) => (
            <div key={filterName} className="mb-2">
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => toggleDrawer(filterName)}
              >
                <span className="font-semibold uppercase">{filterName}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openDrawers[filterName] ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {openDrawers[filterName] && (
                <div className="ml-4 mt-2">
                  {options.map((option) => (
                    <div
                      key={option.name}
                      className="flex items-center mb-2 text-sm"
                    >
                      <input type="checkbox" className="mr-2" />
                      <span>
                        {option.name} ({option.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Filter */}
        <MobileFilter
          filters={initialFilters}
          openDrawers={openDrawers}
          toggleDrawer={toggleDrawer}
        />

        {/* Main content */}

        <div className="w-full md:w-3/4 mx-auto">
          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 border rounded-md disabled:opacity-50"
            >
              <ChevronLeft size={20} className="mr-2" /> Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 border rounded-md disabled:opacity-50"
            >
              Next <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
