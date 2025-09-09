import Slider from "./Slider";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const banners = [
  { img: banner1 },
  { img: banner2 },
];

const SliderSection = () => {
  return (
    <section className="py-2">
      {/* 🔹 Main Container */}
      <div className="main-container mt-3 grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
        {/* 🔹 Slider (3 Columns) */}
        <div className="lg:col-span-3">
          <Slider />
        </div>

        {/* 🔹 Right Banners (1 Column) */}
        <div className="flex flex-col gap-3 lg:gap-4">
          {banners.map((banner, i) => (
            <div key={i} className="rounded-xl overflow-hidden">
              <img
                src={banner.img}
                alt={`Banner ${i + 1}`}
                className="w-full rounded-lg object-cover aspect-[9/6]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
