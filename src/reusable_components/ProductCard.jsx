import { FaStar } from "react-icons/fa";
import heart from "/heart.svg";
import bag from "/bag.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="group border border-gray-200 rounded-xl shadow-sm hover:border-color3 transition-all p-1 flex flex-col justify-between relative bg-white hover:border-[color3]">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute z-10 top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {product.discount}% OFF
        </span>
      )}

      {/* Wishlist Icon (visible only on hover) */}
      <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <img
          src={heart}
          alt="heart menu icon"
          className="w-6 h-6"
        />
      </button>

      {/* Product Image */}
      <div className="flex justify-center mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mb-2">
        <span className="text-red-500 font-bold text-lg">${product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 text-sm line-through ml-2">
            ${product.oldPrice}
          </span>
        )}
      </div>

      {/* Rating & Sold */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>
        <span>{product.sold} Sold</span>
      </div>

                {/* Buy Now Button */}
            <div className="flex items-center gap-3 w-full">
            {/* Bag Button */}
            <button className="flex justify-center items-center w-10 h-10 border border-color3 text-color3 hover:bg-[color3] text-color3 transition rounded-lg">
                <img src={bag} alt="bag menu icon" className="w-5 h-5 text-color3" />
            </button>

            {/* Buy Now Button */}
            <button className="flex-1 border border-color3 text-color3   transition font-medium py-2 px-4 rounded-lg">
                Buy Now
            </button>
            </div>

    </div>
  );
};

export default ProductCard;
