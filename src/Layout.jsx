import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { ShoppingBag } from "lucide-react";
import CartSidebar from "./reusable_components/CartSidebar";


const Layout = () => {
   const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

    // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="w-full dark:bg-darkBg dark:text-darkText ">
      {/* 🔹 Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-10   ${
          isScrolled ? "bg-white" : "bg-transparent"
        } transition-all duration-300 ${isScrolled ? "h-[6rem]" : "h-[8rem]"}`}
      >
        <Header isScrolled={isScrolled} />
      </header>

      {/* 🔹 Main Content */}
      <main className="pt-[8rem] pb-[5rem]   ">
        <Outlet />
      </main>

      {/* 🔹 Footer */}
      <footer className="font-body text-center">
        <Footer />
      </footer>

      {/* 🔹 Scroll to Top */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 border border-black bg- text-black px-3 py-3 rounded-full shadow-lg hover:bg-accent1 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    
{/* 🔹 Global Floating Cart Widget (desktop only) */}
<div
  className={`fixed right-0 top-1/3 translate-y-1/2 z-10 hidden md:block transition-all duration-300
    
  `}
>
  <div
    onClick={() => setIsCartOpen(true)}
    className="w-[75px] h-21 pt-1 rounded-tl-2xl rounded-bl-2xl bg-white shadow-lg border-y border-l border-color2 flex flex-col justify-center items-center cursor-pointer"
  >
    <ShoppingBag className="text-pink-600 w-7 h-7 pb-1" />
    <p className="text-gray-700 text-sm pb-1">0 items</p>
    <div className="bg-color3 text-white font-bold w-full text-center py-1 rounded-bl-2xl">
      $0.00
    </div>
  </div>
</div>

{/* 🔹 Cart Sidebar */}
<CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />


    </div>
  );
};

export default Layout;
