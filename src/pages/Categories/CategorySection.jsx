import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Beauty", img: c1 },
  { name: "Sports & Entertainment", img: c2 },
  { name: "Gadgets", img: c3 },
  { name: "Cloth", img: c4 },
  { name: "Books & Stationery", img: c5 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Electronics", img: c2 },
  { name: "Toys", img: c4 },
  { name: "Groceries & Essentials", img: c6 },
  { name: "Sports & Entertainment", img: c2 },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section>
      {/* Title Row with Nav Buttons */}
      <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
        <h2 className="text-slate-950 text-lg md:text-3xl font-bold leading-9">
          Categories
        </h2>

        {/* View All with < > */}
        {/* <div className="flex items-center gap-2"> */}
        <div className="flex justify-center items-center gap-4">
          <button className="swiper-button-prev-category font-bold rounded-full w-9 h-9 flex items-center justify-center hover:bg-white">
            &lt;
          </button>
          <button
            className="text-md text-gray-600 hover:"
            onClick={() => navigate("/categories")}
          >
            View All
          </button>
          <button className="swiper-button-next-category font-bold rounded-full w-9 h-9 flex items-center justify-center hover:bg-white">
            &gt;
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-category",
          nextEl: ".swiper-button-next-category",
        }}
        spaceBetween={16}
        slidesPerView={6} // 🔹 Show 6 slides by default
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 6 }, // 🔹 Always 6 on large screens
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 bg-white rounded-2xl border border-slate-100 hover:border-color3 transition duration-300 group cursor-pointer flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="mt-2 text-sm font-medium text-gray-700 text-center transition-colors duration-300 group-hover:text-color3">
                {cat.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
