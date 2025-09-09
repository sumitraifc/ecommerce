import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderImages = [
  { img: slider1, title: "The Best Smart Watch for Sale", offer: "50% OFF" },
  { img: slider2, title: "Super Sale - Grab Now!", offer: "30% OFF" },
  { img: slider3, title: "Fresh Vegetables Home Delivery", offer: "Order Now" },
  { img: slider4, title: "Fresh Vegetables Home Delivery", offer: "Order Now" },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="rounded-xl overflow-hidden relative"
    >
      {sliderImages.map((slide, i) => (
        <SwiperSlide key={i}>
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full rounded-lg object-contain aspect-[9/4] bg-gray-100"
          />
        </SwiperSlide>
      ))}

     {/* 🔹 Move & Style Navigation Arrows */}
<style>
  {`
    .swiper-button-next, .swiper-button-prev {
      top: auto !important;
      bottom: 20px !important;
      width: 28px !important;
      height: 28px !important;
      background: rgba(255, 255, 255, 1);
      border-radius: 20%;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      color: #333 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px !important;
    }

    /* 🔹 Move both to the right side */
    .swiper-button-prev {
      left: auto !important;
      right: 55px !important;
    }
    .swiper-button-next {
      right: 15px !important;
    }

    /* 🔹 Remove default background on hover */
    .swiper-button-next::after, .swiper-button-prev::after {
      font-size: 14px !important;
      color: #333 !important;
    }

    .swiper-button-next:hover, .swiper-button-prev:hover {
      background: rgba(255, 255, 255, 1);
    }
      /* Pagination dots container */
    .swiper-pagination-bullet {
      background: rgba(210, 206, 206, 0.6) !important;
      opacity: 1 !important;
      width: 8px;
      height: 8px;
    }

    /* Active dot style */
    .swiper-pagination-bullet-active {
      background: #eb2e61 !important;
      width: 25px;
      height: 6px;
      border-radius: 35%;
    }
  `}
</style>

    </Swiper>
  );
};

export default Slider;
