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
  {
    name: "Fitbit Charge 6 Fitness Tracker",
    price: 1000,
    oldPrice: 1200,
    discount: 16.67,
    rating: 0,
    reviews: 0,
    sold: 13,
    image: item1
  },
  {
    name: "Smart Watch",
    price: 121,
    oldPrice: 129,
    discount: 6.2,
    rating: 0,
    reviews: 0,
    sold: 10,
    image: item2
  },
  {
    name: "Sony A6400 Mirrorless Camera",
    price: 1800,
    oldPrice: null,
    discount: null,
    rating: 0,
    reviews: 0,
    sold: 5,
    image:item3
  },
  {
    name: "Polar H10 Heart Rate Monitor",
    price: 2300,
    oldPrice: 2600,
    discount: 11.54,
    rating: 0,
    reviews: 0,
    sold: 3,
    image: item4
  },
  {
    name: "Polar H10 Heart Rate Monitor",
    price: 2300,
    oldPrice: 2600,
    discount: 11.54,
    rating: 0,
    reviews: 0,
    sold: 3,
    image: item6
  },
  {
    name: "Freeman Beauty Korean Cica Soothing Clay Mask",
    price: 230,
    oldPrice: 600,
    discount: 16.54,
    rating: 2,
    reviews: 5,
    sold: 3,
    image: item5
  },
];

const ProductSection = () => {
  return (
    <section className=" py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
          Popular Products
        </h2>
        <button className="text-sm text-blue-600 hover:">
          View All
        </button>
      </div>

      {/* Responsive Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
