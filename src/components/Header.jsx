import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  ForwardIcon,
  Grid3X3,
  LogOut,
  Package,
  PaperclipIcon,
  Phone,
  ReceiptTurkishLira,
  Settings,
  ShoppingBag,
  UserCheck,
} from "lucide-react";
import { HiOutlineUser } from "react-icons/hi";

// Assets
import logoeee from "/logoeee.png";
import playStore from "/playStore.png";
import appleStore from "/appleStore.png";
import heart from "/heart.svg";
import bag from "/bag.svg";
import fourdot from "/four-dots-square-svgrepo-com.svg";
import profile from "/profile.svg";

// Components
import LoginModal from "../reusable_components/LoginModal";
import CartSidebar from "../reusable_components/CartSidebar";
import { RiGhostLine } from "react-icons/ri";
import OpenMobileMenu from "../reusable_components/OpenMobileMenu";
import { GiReturnArrow } from "react-icons/gi";
import { IoMdReturnLeft } from "react-icons/io";
import LogoutModal from "../reusable_components/LogoutModal";
import DarkModeToggle from "../reusable_components/DarkModeToggle";
import RegistrationModal from "../reusable_components/RegistrationModal";
import CategoryDropdown from "../reusable_components/CategoryDropdown";

const Header = ({ isScrolled }) => {
  const navigate = useNavigate();

  // States
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
 const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  // Mock Auth (replace later with real auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  // Categories
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty & Health",
    "Sports & Outdoors",
    "Toys & Games",
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/allproducts" },
    { name: "Shops", path: "/all-shops" },
    { name: "Most Popular", path: "/PopulerProducts" },
    { name: "Best Deal", path: "/bestdeals" },
    { name: "Contact", path: "/contactus" },
    { name: "Blogs", path: "/blogs" },
  ];

  // // Handlers
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setIsUserDropdownOpen(false);
  // };
  // Handlers
const handleLogout = () => {
  // Clear login state
  setIsLoggedIn(false);

  // Close dropdown if open
  setIsUserDropdownOpen(false);

  // Close logout modal
  setIsLogoutOpen(false);

 


};

  

  return (
    <header
      className={`w-full transition-all duration-300  ${
        isScrolled ? "bg-white fixed top-0 z-50 shadow-md" : ""
      }`}
    >
    {/* 🔹 Top Bar */}
<div className="bg-color1 text-white dark:bg-darkBg2 dark:text-darkText text-sm px-[2rem] md:px-[4rem] py-1">
  <div className="flex flex-row sm:flex-row justify-between items-center gap-2 sm:gap-0">
    
    {/* Left Side */}
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
      <span className="cursor-pointer">Become a Seller</span>
      <span className="text-center sm:text-left">Hotline: 01963953998</span>
    </div>

    {/* Right Side */}
    <div className="flex gap-4 items-center">
      {/* You can uncomment this if needed */}
      {/* <span className="cursor-pointer">USD, $</span> */}
      <DarkModeToggle />
      <span className="cursor-pointer">English</span>
    </div>

  </div>
</div>


      {/* 🔹 Main Header */}
      <div className="md:px-[4rem] px-[2rem] py-3 flex items-center justify-between gap-4 dark:bg-darkBg dark:text-darkText">
        {/* Logo */}
        <img src={logoeee} alt="Logo" className="w-[120px] sm:w-[140px]" />

        {/* Search Bar (desktop only) */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search product"
            className="border rounded-l-md w-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-color1 dark:bg-darkBg dark:text-darkText"
          />
          <button className="bg-color1 text-white px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>
        {/* Search Bar (desktop only) */}
          {/* <div className="hidden md:flex w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search product"
              className="border rounded-l-md w-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-color1"
            />
            <button className="bg-color1 text-white px-4 rounded-r-md focus:outline-none focus:ring-1 focus:ring-color1">
              <FaSearch className="w-4 h-4" />
            </button>
          </div> */}


        {/* Icons */}
        <div className="flex items-center gap-6 text-lg">
          {/* Wishlist */}
          <div
            onClick={() => navigate("/wishlist")}
            className="relative cursor-pointer  hidden md:block "
          >
            <img src={heart} alt="wishlist" className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
                    <div className="block md:hidden cursor-pointer">
            {/* <img src={searchIcon} alt="search" className="w-6 h-6" /> */}
            <FaSearch  alt="search" className="w-8 h-8 bg-gray-200 p-[5px] rounded-full" />
          </div>


          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <img src={bag} alt="cart" className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

                   {/* Login / User */}
{isLoggedIn ? (
  <div className="relative hidden md:block dark:bg-darkBg dark:text-darkText">
    <button
      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
      className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-colors ${
        isUserDropdownOpen ? "bg-[#fbd5df] text-red-500" : "hover:bg-gray-100 text-slate-700"
      }`}
    >
      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
        {user.name.charAt(0)}
      </div>
      <span className="text-sm font-medium hidden lg:block">
        {user.name.split(" ")[0]}
      </span>
      <MdKeyboardArrowDown
        className={`transition-transform ${isUserDropdownOpen ? "rotate-180" : ""}`}
      />
    </button>

    {/* Dropdown */}
    {isUserDropdownOpen && (
      <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-color3 rounded-lg shadow-lg z-50 dark:bg-darkBg dark:text-darkText">
        <ul className="py-1 space-y-1">
          <li>
            <NavLink to="/dashboard" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <Grid3X3 className="w-4 h-4" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderhistory" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <ShoppingBag className="w-4 h-4" /> Order History
            </NavLink>
          </li>
          <li>
            <NavLink to="/returnorders" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <IoMdReturnLeft className="w-4 h-4" /> Return Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <UserCheck className="w-4 h-4" /> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/changepassword" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <Settings className="w-4 h-4" /> Change Password
            </NavLink>
          </li>
          <li>
            <NavLink to="/termsservice" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <Package className="w-4 h-4" /> Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacypolicy" className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full">
              <PaperclipIcon className="w-4 h-4" /> Privacy Policy
            </NavLink>
          </li>
          <hr />
          <li>
            <button
              onClick={() => setIsLogoutOpen(true)}
              className="dropdown-btn flex items-center gap-2 px-4 py-2 w-full text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </button>

            {/* Logout Modal */}
            <LogoutModal
              isOpen={isLogoutOpen}
              onClose={() => setIsLogoutOpen(false)}
              onConfirm={handleLogout}
            />
          </li>
        </ul>
      </div>
    )}
  </div>
) : (
  <button
    // onClick={() => setIsLoginOpen(true)}
    onClick={() => {
          setIsLoginOpen(true);
          setIsRegisterOpen(false); // Just in case
        }}
    className={`hidden md:flex items-center gap-2 cursor-pointer transition-colors dark:text-darkText dark:bg-darkcard py-3 px-2 rounded-lg ${
      isLoginOpen ? "bg-[#fbd5df] text-red-500" : "text-slate-700 hover:text-red-500"
    }`}
  >
    <span>Login</span>
    <HiOutlineUser />
  </button>
)}



          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Nav */}
     {/* <nav className="flex border-t border-b border-slate-100  dark:bg-darkBg dark:text-darkText lg:px-[4rem] px-4 h-14 items-center justify-between"> */}
     <nav className="main-container dark:bg-darkcard dark:text-darkText flex items-center justify-between md:gap-3 lg:gap-4 border-t md:px-[4rem] px-[2rem] border-b border-slate-100 flex-wrap md:flex-nowrap relative">
  {/* Categories */}
  <div className="relative border-r border-slate-100 p-1 xl:w-[220px] ">
    <button
      onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
      // className="flex items-center gap-2 font-semibold"
      className={`h-10 lg:h-11 flex items-center gap-2 outline-none rounded-lg transition-all text-slate-600 dark:text-darkText dark:bg-darkcard
        ${
    isCategoriesOpen ? 'text-red-500 bg-[#fbd5df] rounded' : ''
  }`}
    >
      <img src={fourdot} alt="Categories" className="w-6 h-6" />
      {/* <span className=" sm:inline ">Categories</span> */}
      <span
  className={`sm:inline px-2 py-1 transition-all duration-200 ${
    isCategoriesOpen ? 'text-red-500 bg-[#fbd5df] rounded' : ''
  }`}
>
  Categories
</span>

    </button>
    {/* {isCategoriesOpen && (
      <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow-md">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:bg-darkBg dark:text-darkText"
          >
            {cat}
          </div>
        ))}
      </div>
    )} */}
    </div>
    {isCategoriesOpen && (
       <CategoryDropdown />
//   <div
//   className="absolute top-full mt-2 w-screen p-6 bg-white shadow-md 
//   grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 
//   gap-4 rounded-br-xl rounded-bl-xl z-50 
//   dark:bg-darkBg dark:text-darkText"
// >
 
// </div>


)}
  {/* </div> */}

  {/* Links (hidden on mobile, visible md+) */}
  {/* Links */}
<ul
  className="hidden dark:text-darkText dark:bg-darkcard  md:inline-flex justify-start items-center gap-2.5 lg:gap-3 xl:gap-5 2xl:gap-6 grow overflow-x-auto"
  // className="
  //   hidden md:flex gap-5 sm:px-4 space-x-4
  //   md:space-x-6
  //   overflow-x-auto  scrollbar-track-transparent
  // "
>
  {navLinks.map((link, i) => (
    <li key={i} className="flex items-center gap-2 flex-shrink-0">
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-color1 text-color1 whitespace-nowrap"
            : "text-slate-600 hover:text-color1 whitespace-nowrap dark:text-darkText dark:bg-darkcard "
        }
      >
        {link.name}
      </NavLink>

      {/* Divider */}
      {i !== navLinks.length - 1 && (
        <span className="w-[1px] h-4 border border-slate-200"></span>
      )}
    </li>
  ))}
</ul>


  {/* App Download */}
  <div className="relative">
<button
  onClick={() => setIsAppOpen(!isAppOpen)}
  className={`flex items-center gap-2 cursor-pointer transition-colors py-3 px-2  ${
    isAppOpen ? "text-red-500 bg-[#fbd5df] rounded-lg " : "text-slate-700 dark:text-darkText dark:bg-darkcard"
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
        src={playStore} // replace with your Google Play badge
        alt="Google Play"
        className="w-full cursor-pointer hover:bg-gray-100"
      />
    </div>
  )}
</div>
</nav>


      {/* 🔹 Mobile Menu */}
      <OpenMobileMenu
  isMenuOpen={isMenuOpen}
  setIsMenuOpen={setIsMenuOpen}
  setIsLoginOpen={setIsLoginOpen}
  setIsCartOpen={setIsCartOpen}
  isLoggedIn={isLoggedIn}
  user={user}
  handleLogout={handleLogout}
  navLinks={navLinks}
/>




      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}   onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}/>
        {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </header>
  );
};

export default Header;
