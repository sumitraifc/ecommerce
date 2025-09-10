import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const FilterSidebar = ({ onClose ,isOpen}) => {
  const [price, setPrice] = useState([3, 101624]); // Min & Max price
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // ❌ disable page scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ restore scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);
  const colors = [
    "White", "Black", "Red", "Green", "Blue", "Yellow", "Magenta",
    "Orange", "Purple", "Brown", "Lavender", "Indigo", "Salmon",
    "Teal", "Goldenrod",
  ];
  const sizes = ["43", "Small", "Large", "XL", "XXL", "3XL", "4XL"];
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative w-[400px] max-w-[100%] bg-white shadow-lg p-6 z-100 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Customer Review */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Customer Review</h3>
          <div className="space-y-2">
            {ratings.map((rate) => (
              <label
                key={rate}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(rate)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <input type="radio" name="rating" className="accent-pink-500" />
              </label>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Sort by</h3>
          <select className="w-full border rounded-md p-2">
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Product Price</h3>
          <input
            type="range"
            min="3"
            max="101624"
            value={price[1]}
            onChange={(e) => setPrice([3, e.target.value])}
            className="w-full accent-pink-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>${price[0].toFixed(2)}</span>
            <span>${price[1]}</span>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Category</h3>
          <select className="w-full border rounded-md p-2">
            <option>Select Category</option>
            <option>Beauty</option>
            <option>Sports</option>
            <option>Gadgets</option>
          </select>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Brand</h3>
          <select className="w-full border rounded-md p-2">
            <option>Select Brand</option>
            <option>Apple</option>
            <option>Nike</option>
            <option>Samsung</option>
          </select>
        </div>

        {/* Color */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Color</h3>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input type="radio" name="color" className="accent-pink-500" />
                {color}
              </label>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input type="radio" name="size" className="accent-pink-500" />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button className="flex-1 border border-pink-500 text-pink-500 py-3 rounded-lg hover:bg-gray-100">
            Clear
          </button>
          <button className="flex-1 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
