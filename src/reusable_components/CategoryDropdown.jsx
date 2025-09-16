import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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

const categories = [
  { name: "Pets & Supplies", img: item1, sub: ["Dog Food", "Cat Food", "Pet Toys"] },
  { name: "Toys & Games", img: item2, sub: ["Board Games", "Action Figures", "Puzzles"] },
  { name: "Groceries & Essentials", img: item3, sub: ["Vegetables", "Snacks", "Beverages"] },
  { name: "Books & Stationery", img: item4, sub: ["Notebooks", "Pens", "Novels"] },
  { name: "Food", img: item5, sub: ["Fast Food", "Organic", "Beverages"] },
  { name: "Electronics", img: item6, sub: ["Mobiles", "Laptops", "Accessories"] },
  { name: "Cloth", img: item7, sub: ["Men", "Women", "Kids"] },
  { name: "Gadgets", img: item8, sub: ["Smartwatch", "Headphones", "Cameras"] },
  { name: "Home Appliances", img: item9, sub: ["Kitchen", "Living Room", "Laundry"] },
  { name: "Sports & Outdoors", img: item10, sub: ["Gym", "Cricket", "Football"] },
  { name: "Beauty", img: item11, sub: ["Makeup", "Skincare", "Haircare"] },
  { name: "Sports & Entertainment", img:item12 , sub: ["Movies", "Concerts", "Games"] },
];

export default function CategoryDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="absolute top-10 mt-2    w-[95vw] sm:w-[500px] md:w-[700px] lg:w-[1050px] xl:w-[1350px] p-6 bg-white shadow-md 
  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 
  gap-4 rounded-br-xl rounded-bl-xl z-50 
  dark:bg-darkBg dark:text-darkText"
    >
      {categories.map((cat, i) => (
        <div
          key={i}
          className="p-2 group bg-white rounded-xl border justify-start items-center gap-2.5 
          inline-flex flex-col hover:border-pink-500 transition-all duration-300 
          w-full border-b-2 border-slate-100 dark:bg-darkcard"
        >
          {/* Image */}
          <img
            src={cat.img}
            alt={cat.name}
            className="w-16 h-16 object-contain mb-2 transition-transform group-hover:scale-105"
          />

          {/* Category Name */}
          <button
            onClick={() => toggleCategory(i)}
            className="flex items-center justify-center gap-1 font-medium  text-sm text-gray-800 
            dark:text-darkText group-hover:text-pink-600 transition"
          >
            {cat.name}
            {openIndex === i ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Subcategories */}
          {openIndex === i && (
            <div className="mt-3 w-full">
              <ul className="bg-gray-50 dark:bg-darkBg border rounded-lg p-2 space-y-1 text-sm text-gray-700 dark:text-darkText">
                {cat.sub.map((item, j) => (
                  <li
                    key={j}
                    className="px-2 py-1 rounded hover:bg-pink-100 dark:hover:bg-darkcard cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
