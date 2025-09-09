// src/pages/AllShops.jsx
import { Link } from "react-router-dom";

const allShops = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Shop ${i + 1}`,
  items: Math.floor(Math.random() * 100),
  rating: (Math.random() * 5).toFixed(1),
  status: i % 2 === 0 ? "Online" : "Offline",
  image: `https://via.placeholder.com/300x150?text=Shop+${i + 1}`,
}));

const AllShops = () => {
  return (
    <div className="p-6 py-[4rem] px-[4rem]">
      <h2 className="text-2xl font-bold mb-6">All Shops</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allShops.map((shop) => (
          <div
            key={shop.id}
            className="rounded-lg border shadow hover:shadow-md transition bg-white"
          >
            <img src={shop.image} alt={shop.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{shop.name}</h3>
              <p className="text-sm text-gray-500">
                {shop.items}+ Items | ⭐ {shop.rating}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  shop.status === "Online" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {shop.status}
              </span>
              <Link
                to={`/shop/${shop.id}`}
                className="block mt-2 text-sm text-primary hover:underline"
              >
                Visit Store →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShops;
