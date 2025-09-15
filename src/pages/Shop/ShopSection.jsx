// src/components/ShopSection.jsx
import { Link } from "react-router-dom";
import shop1 from "../../assets/shop1.jpg"
import shop2 from "../../assets/shop2.png"
import shop3 from "../../assets/shop3.jpg"
import shop4 from "../../assets/shop4.png"
import shop5 from "../../assets/shop5.png"
import shop6 from "../../assets/shop6.png"
import shop7 from "../../assets/shop7.jpg"
import shop8 from "../../assets/shop8.png"


const shops = [
  {
    id: 1,
    name: "Razin Shop",
    items: 114,
    rating: 5.0,
    status: "Offline",
    image: shop1,
    logo: shop5,
  },
  {
    id: 2,
    name: "Easy Life",
    items: 14,
    rating: 5.0,
    status: "Offline",
    image: shop2,
    logo:shop6,
  },
  {
    id: 3,
    name: "Echo Mart",
    items: 6,
    rating: 5.0,
    status: "Offline",
    image: shop3,
    logo: shop7,
  },
  {
    id: 4,
    name: "Style Haven",
    items: 11,
    rating: 5.0,
    status: "Offline",
    image: shop4,
    logo: shop8,
  },
];

const ShopSection = () => {
  return (
    <div className=" bg-gray-100 rounded-lg dark:bg-darkcard dark:text-darkText ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 dark:bg-darkcard dark:text-darkText">
        <h2 className="text-2xl font-bold text-gray-800 dark:bg-darkcard dark:text-darkText">Top Rated Shops</h2>
        <Link to="/all-shops" className="text-primary font-medium ">
          View All 
        </Link>
      </div>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="relative rounded-lg overflow-hidden bg-white shadow hover:shadow-md transition"
          >
            {/* Background image */}
            <img src={shop.image} alt={shop.name} className="w-full h-32 object-cover" />

            {/* Logo */}
            <div className="absolute top-[5.5rem] left-4 w-16 h-16 rounded-full border-2 border-white overflow-hidden">
              <img src={shop.logo} alt={shop.name} className="w-full h-full object-cover bg-gray-400" />
            </div>

            {/* Status */}
            <span className="absolute top-2 right-2 bg-gray-200 text-xs px-2 py-1 rounded">
              {shop.status}
            </span>

            {/* Info */}
            <div className="pt-8 pb-4 px-4 bg-color3 text-white ">
              <h3 className="font-semibold">{shop.name}</h3>
              <p className="text-sm">{shop.items}+ Items | ⭐ {shop.rating}</p>
              <Link
                to={`/shop/${shop.id}`}
                className="text-sm  mt-1 inline-block"
              >
                Visit Store 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
