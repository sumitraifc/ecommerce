import { useState } from "react";
import ProductCard from "./ProductCard";
import item1 from "../assets/1.jpg";
import item2 from "../assets/2.png";
import item3 from "../assets/3.png";
import item4 from "../assets/4.jpg";
import item5 from "../assets/5.png";
import item6 from "../assets/6.png";
import item7 from "../assets/7.png";
import item8 from "../assets/8.png";
import item9 from "../assets/9.png";
import item10 from "../assets/10.png";
import item11 from "../assets/11.png";
import item12 from "../assets/12.png";
import item13 from "../assets/13.png";

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

const JustForYou = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more products each time
  };

  return (
    <div className="py-12">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:bg-darkBg dark:text-darkText">Just For You</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
        {products.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Load More Button */}
                {visibleCount < products.length && (
            <div className="flex justify-center mt-8">
                <button
                onClick={handleLoadMore}
                className="md:w-72 px-6 py-2 md:py-3.5 rounded-[10px] border border-color3 text-color3 text-base font-medium leading-normal  transition"
                >
                Load More Products
                </button>
            </div>
            )}

    </div>
  );
};

export default JustForYou;
