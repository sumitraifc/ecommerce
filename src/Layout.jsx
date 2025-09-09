import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="w-full">
      {/* 🔹 Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-primary2" : "bg-transparent"
        } transition-all duration-300 ${isScrolled ? "h-[6rem]" : "h-[8rem]"}`}
      >
        <Header isScrolled={isScrolled} />
      </header>

      {/* 🔹 Main Content */}
      <main className="pt-[8rem] pb-[5rem] min-h-screen px-[4rem]">
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
          className="fixed bottom-4 left-4 border border-grey bg-primary1 text-white px-2 py-4 rounded-full shadow-lg hover:bg-accent1 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Layout;
