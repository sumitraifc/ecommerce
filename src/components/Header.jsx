import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logoeee from "/logoeee.png";
import playStroe from "/playStore.png";
import appleStore from "/appleStore.png";
import heart from "/heart.svg";
import bag from "/bag.svg";

import fourdot from "/four-dots-square-svgrepo-com.svg";
import profile from "/profile.svg";
import { Phone, User } from "lucide-react";
import LoginModal from "../reusable_components/LoginModal";
import { BiMobileLandscape } from "react-icons/bi";

const Header = ({ isScrolled }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppOpen , setIsAppOpen] = useState(false);

    const [isLoginOpen, setIsLoginOpen] = useState(false);
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty & Health",
    "Sports & Outdoors",
    "Toys & Games",
  ];

  const navLinks = [
    "Home",
    "Products",
    "Shops",
    "Most Popular",
    "Best Deal",
    "Contact",
    "Blogs",
  ];

  return (
    <header
      className={`w-full  transition-all duration-300 ${
        isScrolled ? "bg-white fixed top-0 z-50" : ""
      }`}
    >
      {/* 🔹 Top Bar */}
      <div className="bg-color1 text-white text-md lg:px-[4rem] p-1 flex justify-between items-center py-2">
        <div className="flex gap-4">
          <span className="cursor-pointer">Become a Seller</span>
          <span>Hotline: 01963953998</span>
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer">USD, $</span>
          <span className="cursor-pointer">English</span>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="lg:px-[4rem] p-1 py-2 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logoeee} alt="Logo" className="  router-link-active router-link-exact-active w-[140px]" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1">
          <input
            type="text"
            placeholder="Search product"
            className="border rounded-l-md w-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-color1 text-white px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-lg">
          {/* Wishlist */}
          <div className="relative cursor-pointer">
            {/* <FaHeart /> */}
             <img
            src={heart}
            alt="heart menu icon"
            className="w-6 h-6"
          />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs text-bold rounded-full px-1">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            {/* <FaShoppingCart /> */}
             <img
            src={bag}
            alt="heart menu icon"
            className="w-6 h-6"
          />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>

          {/* Login
          <div className="hidden md:flex items-center gap-1 cursor-pointer">
            <span>Login</span>
            <User />
             <img
            src={profile}
            alt="heart menu icon"
            className="w-5 h-5"
          />
          </div> */}
 {/* Login */}
          <div
            className="hidden md:flex items-center gap-1 cursor-pointer"
            onClick={() => setIsLoginOpen(true)}
          >
            <span>Login</span>
            <FaUser />
          </div>
      
      

      {/* 🔹 Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

{/* 🔹 Desktop Nav */}
<nav className="hidden md:flex main-container flex items-center justify-between md:gap-3 lg:gap-4 border-t border-b border-slate-100 flex-wrap md:flex-nowrap relative lg:px-[4rem] px-4 h-16">
  {/* 🔹 Left: Categories */}
  <div className="relative flex items-center border-r">
    <button
      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
      className="flex items-center gap-1 font-semibold pr-2 md:pr-4 lg:pr-14"
    >
      <img
        src={fourdot}
        alt="Categories menu icon"
        className="w-8 h-8"
      />
      Categories 
      {/* <MdKeyboardArrowDown /> */}
    </button>

    {isCategoriesOpen && (
      <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    )}
  </div>

{/* 🔹 Middle: Links */}
<ul className="hidden md:inline-flex justify-start items-center gap-2.5 lg:gap-3 xl:gap-5 2xl:gap-6 grow overflow-x-auto">
  {navLinks.map((link, i) => (
    <li key={i} className="flex items-center gap-2">
      <span
        className={`cursor-pointer hover:text-color1 h-9 py-2  border-transparent text-sm lg:text-base font-normal text-slate-600 ${
          link === "Home" ? "border-b-2 border-color1 text-color1" : ""
        }`}
      >
        {link}
      </span>
      {/* Divider */}
      {i !== navLinks.length - 1 && (
        <span className="w-[0px] h-4 border border-slate-200"></span>
      )}
    </li>
  ))}
</ul>

{/* 🔹 Right: App Download */}
<div className="relative">
<button
  onClick={() => setIsAppOpen(!isAppOpen)}
  className={`flex items-center gap-2 cursor-pointer transition-colors ${
    isAppOpen ? "text-red-500 bg-[#fbd5df] rounded-lg py-3 px-2" : "text-slate-700"
  }`}
>
  <Phone className={`w-5 h-5 ${isAppOpen ? "text-red-500" : ""}`} />
  <span className="text-sm lg:text-base">Download our app</span>
  <MdKeyboardArrowDown className={`${isAppOpen ? "text-red-500 rotate-180" : ""}`} />
</button>


  {/* Dropdown */}
  {isAppOpen && (
    <div className="absolute top-10 right-0 mt-2 w-48 bg-white border border-red-200 rounded-lg shadow-lg z-50 p-3 space-y-2">
      <img
        src={appleStore} // replace with your App Store badge
        alt="App Store"
        className="w-full cursor-pointer hover:bg-gray-100"
      />
      <img
        src={playStroe} // replace with your Google Play badge
        alt="Google Play"
        className="w-full cursor-pointer hover:bg-gray-100"
      />
    </div>
  )}
</div>

</nav>




      {/* 🔹 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-4 py-4">
          {/* Search */}
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search product"
              className="border rounded-l-md w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-pink-700 text-white px-4 rounded-r-md">
              <FaSearch />
            </button>
          </div>

          {/* Categories */}
          <div>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-1 font-semibold mb-2"
            >
              <span className="text-xl">⋮⋮</span> Categories <MdKeyboardArrowDown />
            </button>
            {isCategoriesOpen && (
              <div className="bg-gray-100 rounded-md mb-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <li key={i} className="cursor-pointer hover:text-pink-700">
                {link}
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
};

export default Header;
