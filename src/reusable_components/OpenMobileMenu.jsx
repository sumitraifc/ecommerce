import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Grid3X3,
  ShoppingBag,
  UserCheck,
  Settings,
  LogOut,
} from "lucide-react";
import { HiOutlineUser } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import heart from "/heart.svg";
import bag from "/bag.svg";
import LogoutModal from "./LogoutModal";

const OpenMobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,   // ✅ add this
  setIsLoginOpen,
  setIsCartOpen,
  isLoggedIn,
  user,
  handleLogout,
  navLinks = [],
}) => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto dark:bg-darkBg dark:text-darkText">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="font-semibold text-lg">Menu</h2>
        <button
          onClick={() => setIsMenuOpen(false)}   // ✅ closes menu
          className="text-xl  dark:text-darkText text-gray-600 border border-yellow-500 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <div className="px-4 py-4 space-y-6 dark:text-darkText ">
        {/* Login / User Info */}
        <div>
          {isLoggedIn ? (
            <div className="space-y-3 bg-[#fbd5df] p-4 rounded-lg dark:text-darkText">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* User Options */}
              <div className="space-y-2 bg-white rounded-lg dark:text-darkText">
                <button className="w-full flex items-center gap-3 text-sm font-medium text-gray-700 py-2 px-3 bg-white rounded-lg">
                  <Grid3X3 className="w-4 h-4" /> Dashboard
                </button>
                <button className="w-full flex items-center gap-3 text-sm font-medium text-gray-700 py-2 px-3 bg-white rounded-lg">
                  <ShoppingBag className="w-4 h-4" /> Order History
                </button>
                <button className="w-full flex items-center gap-3 text-sm font-medium text-gray-700 py-2 px-3 bg-white rounded-lg">
                  <UserCheck className="w-4 h-4" /> My Profile
                </button>
                <button className="w-full flex items-center gap-3 text-sm font-medium text-gray-700 py-2 px-3 bg- rounded-lg">
                  <Settings className="w-4 h-4" /> Change Password
                </button>
                {/* <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 text-sm font-medium text-red-600 py-2 px-3 bg-red-50 rounded-lg"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button> */}
                 {/* Log Out button inside dropdown */}
                <button
                  onClick={() => setIsLogoutOpen(true)}
                  className="w-full flex items-center gap-3 text-sm font-medium text-red-600 py-2 px-3 bg-red-50 rounded-lg"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>

                {/* Logout Confirmation Modal */}
                <LogoutModal
                  isOpen={isLogoutOpen}
                  onClose={() => setIsLogoutOpen(false)}
                  onConfirm={handleLogout}
                />
  
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="w-full flex items-center dark:text-darkText justify-between py-3 px-4 border-[9px] border-color3 rounded-lg font-medium text-gray-800"
            >
              <span className="flex items-center gap-2 ">
                <HiOutlineUser className="w-5 h-5" /> Login
              </span>
              <RiArrowRightSLine className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Wishlist & Cart */}
        <div className="space-y-2 dark:text-darkText">
          <div
            onClick={() => {
              navigate("/wishlist");
              setIsMenuOpen(false); // ✅ also close when navigating
            }}
            className="flex items-center gap-3 bg-gray-50 rounded-lg py-3 px-4 cursor-pointer dark:text-darkText dark:bg-darkcard"
          >
            <img src={heart} alt="wishlist" className="w-5 h-5" />
            <span className="text-gray-700 text-sm">Wishlist</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </div>

          <div
            onClick={() => {
              setIsCartOpen(true);
              setIsMenuOpen(false); // ✅ close when cart opens
            }}
            className="flex items-center gap-3 bg-gray-50 rounded-lg py-3 px-4 cursor-pointer dark:text-darkText dark:bg-darkcard"
          >
            <img src={bag} alt="cart" className="w-5 h-5" />
            <span className="text-gray-700 text-sm dark:text-darkText dark:bg-darkcard">My Cart</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </div>
        </div>

       {/* Nav Links */}
<ul className="space-y-3 ">
  {navLinks.map((link, i) => (
    <li key={i} className="border-b border-gray-200 dark:text-darkText ">
      <NavLink
        to={link.path}
        onClick={() => setIsMenuOpen(false)} // ✅ close after clicking link
        className={({ isActive }) =>
          `block pb-1 ${
            isActive
              ? "text-pink-600 font-medium border-b-2 border-pink-500"
              : "text-gray-700 dark:text-darkText hover:text-pink-500"
          }`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default OpenMobileMenu;
