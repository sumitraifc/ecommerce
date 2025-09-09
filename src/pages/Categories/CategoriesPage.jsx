import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";

const categories = [
  { name: "Beauty", img: c1 },
  { name: "Sports & Entertainment", img: c2 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Gadgets", img: c3 },
  { name: "Cloth", img: c4 },
  { name: "Books & Stationery", img: c5 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Gadgets", img: c3 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Electronics", img: c2 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Toys", img: c4 },
];

const CategoriesPage = () => {
  return (
    <div className="py-8 mt-4 px-[4rem]">
      <h1 className="text-3xl font-bold mb-6">All Categories</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-6 items-start mt-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="p-3 bg-white rounded-2xl border border-slate-100 transition duration-300 group cursor-pointer flex flex-col items-center hover:border-color3"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-sm font-medium text-gray-700 text-center transition-colors duration-300 group-hover:text-color3">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
