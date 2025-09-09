import { useState } from "react";
import ProductCard from "../../reusable_components/ProductCard";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../../reusable_components/FilterSidebar";

import item1 from "../../assets/1.jpg";
import item2 from "../../assets/2.png";
import item3 from "../../assets/3.png";
import item4 from "../../assets/4.jpg";
import item5 from "../../assets/5.png";
import item6 from "../../assets/6.png";
import item7 from "../../assets/7.png";
import item8 from "../../assets/8.png";
import item9 from "../../assets/9.png";
import item10 from "../../assets/10.png";
import item11 from "../../assets/11.png";
import item12 from "../../assets/12.png";
import item13 from "../../assets/13.png";

const products = [
  { name: "mirror", price: 100, oldPrice: 1200, discount: 16.67, rating: 0, reviews: 0, sold: 13, image: item7 },
  { name: "cream", price: 121, oldPrice: 129, discount: 6.2, rating: 0, reviews: 0, sold: 10, image: item8 },
  { name: "Sony A6400 Mirrorless Camera", price: 1800, oldPrice: null, discount: null, rating: 0, reviews: 0, sold: 5, image: item9 },
  { name: "Polar H10 Heart Rate Monitor", price: 2300, oldPrice: 2600, discount: 11.54, rating: 0, reviews: 0, sold: 3, image: item10 },
  { name: "Polar H10 Heart Rate Monitor", price: 2300, oldPrice: 2600, discount: 11.54, rating: 0, reviews: 0, sold: 3, image: item11 },
  { name: "Freeman Beauty Korean Cica Soothing Clay Mask", price: 230, oldPrice: 600, discount: 16.54, rating: 2, reviews: 5, sold: 3, image: item12 },
  { name: "Polar H10 Heart Rate Monitor", price: 2300, oldPrice: 2600, discount: 11.54, rating: 0, reviews: 0, sold: 3, image: item13 },
  { name: "Fitbit Charge 6 Fitness Tracker", price: 1000, oldPrice: 1200, discount: 16.67, rating: 0, reviews: 0, sold: 13, image: item1 },
  { name: "Smart Watch", price: 121, oldPrice: 129, discount: 6.2, rating: 0, reviews: 0, sold: 10, image: item2 },
  { name: "Sony A6400 Mirrorless Camera", price: 1800, oldPrice: null, discount: null, rating: 0, reviews: 0, sold: 5, image: item3 },
  { name: "Polar H10 Heart Rate Monitor", price: 2300, oldPrice: 2600, discount: 11.54, rating: 0, reviews: 0, sold: 3, image: item4 },
  { name: "Polar H10 Heart Rate Monitor", price: 2300, oldPrice: 2600, discount: 11.54, rating: 0, reviews: 0, sold: 3, image: item6 },
  { name: "Freeman Beauty Korean Cica Soothing Clay Mask", price: 230, oldPrice: 600, discount: 16.54, rating: 2, reviews: 5, sold: 3, image: item5 },
];

const AllProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative py-12 ">
                {/* Header */}
            <div className=" px-[4rem] bg-gray-200 py-4">
            {/* Left side: Back + Title */}
            <div className="bg-white flex justify-between items-center   p-6 rounded-xl shadow-sm">

          
            <div className="flex items-center gap-3 rounded-lg ">
                <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-800"
                >
                ← Back
                </button>
                <span className="text-gray-700">
                <span className="text-red-500 font-semibold">"all"</span> 145 items found
                </span>
            </div>

            {/* Right side: Filter Button */}
            <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-200 text-black rounded-xl hover:text-color3 transition"
            >
                <FaFilter /> Filter
            </button>
  </div>
            </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 px-[4rem] pt-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Filter Sidebar */}
      {isFilterOpen && <FilterSidebar onClose={() => setIsFilterOpen(false)} />}

        {/* Pagination Footer */}
<div className="flex justify-between items-center w-full mt-8 gap-4 flex-wrap px-[4rem]">
  {/* Left: Results Info */}
  <p className="text-sm text-gray-600">
    Showing <span className="font-medium">1</span> to <span className="font-medium">12</span> of <span className="font-medium">145</span> results
  </p>

  {/* Right: Pagination Controls */}
 <div className="flex items-center gap-2">
  <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">&lt;</button>
  <button className="px-5 py-3 border rounded-md text-sm bg-color3 text-white hover:bg-red-200">1</button>
  <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">2</button>
  <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">3</button>
  <span className="px-3 py-3 text-gray-500">...</span>
  <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">10</button>
  <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">&gt;</button>
</div>

</div>

    </div>
  );
};

export default AllProductsPage;
