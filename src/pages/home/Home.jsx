// import HeroSection from "../slider/Slider";
import JustForYou from "../../reusable_components/Justforu";
import ProductSection from "../../reusable_components/ProductSection";
import CategorySection from "../Categories/CategorySection";
import ShopSection from "../Shop/ShopSection";
import SliderSection from "../slider/SliderSection";
import Topbar from "../topbarcard/Topbar";
// 🔹 You can import more sections here later

const Home = () => {
  return (
    <div className="flex flex-col  pt-8"> {/* 🔹 Added pt-16 to fix overlap */}
      {/* 🔹 Hero Slider Section */}
      <section  className="px-[1rem] sm:px-[4rem] pt-1 dark:bg-darkBg dark:text-darkText">
        <SliderSection />
      </section>
      

   

     
<section className="px-[1rem] sm:px-[4rem] dark:bg-darkBg dark:text-darkText">
    {<Topbar />}
</section>
      
<section className="px-[1rem] sm:px-[4rem] dark:bg-darkBg dark:text-darkText" >
     <CategorySection />
</section>
     



   {/* 🔹 Popular Products Section */}
      <section className="px-[1rem] sm:px-[4rem]">
       
        <ProductSection />
      </section>
      <section className="bg-gray-100 px-[1rem] sm:px-[4rem] py-12 dark:bg-darkcard dark:text-darkText">
       
        <ShopSection />
      </section>
      <section className="px-[1rem] sm:px-[4rem]  dark:text-darkText">
       
        <JustForYou />
      </section>

      
      {/* Example: <FeaturedCategories /> */}
      {/* Example: <DealOfTheDay /> */}
    </div>
  );
};

export default Home;
