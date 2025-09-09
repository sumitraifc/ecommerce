// src/components/FilterSidebar.jsx
import React from "react";

const FilterSidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative w-80 bg-white shadow-lg p-6 z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input type="range" min="0" max="500" className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full border rounded-md p-2">
              <option>All</option>
              <option>Beauty</option>
              <option>Sports</option>
              <option>Gadgets</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
