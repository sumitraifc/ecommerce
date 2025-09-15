import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import appStore from "/appStoreFooter.png";
import playStore from "/playStoreFooter.png";
import logo from "/logoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-color4 text-white font-body dark:bg-darkBg2 dark:text-darkText">
      {/* 🔹 Top Section */}
      <div
        className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-12 
          py-10 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-8
        "
      >
        {/* Brand Info */}
        <div className="flex flex-col space-y-3 text-left">
          <img src={logo} alt="Logo" className="w-[130px] h-[45px]" />
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt size={18} /> 01963953998
          </p>
          <p className="text-sm leading-relaxed">
            The ultimate all-in-one solution for your eCommerce business worldwide.
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope size={18} /> support@razinsoft.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">Most Popular</li>
            <li className="hover:underline cursor-pointer">Best Deal</li>
            <li className="hover:underline cursor-pointer">Blogs</li>
            <li className="hover:underline cursor-pointer">Become a Seller</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Return & Refund Policy</li>
          </ul>
        </div>

        {/* App Download & Socials */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Download our app</h3>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <img src={appStore} alt="App Store" className="w-32 cursor-pointer" />
            <img src={playStore} alt="Google Play" className="w-32 cursor-pointer" />
          </div>
          <div className="flex gap-4 justify-start text-xl">
            <FaFacebook size={22} className="cursor-pointer hover:text-blue-500 text-blue-600" />
            <FaLinkedin size={22} className="cursor-pointer hover:text-blue-400" />
            <FaYoutube size={22} className="cursor-pointer hover:text-red-500" />
            <FaWhatsapp size={22} className="cursor-pointer hover:text-green-400" />
            <FaTelegram size={22} className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="border-t border-white/20 text-left px-4 sm:px-6 lg:px-12 py-4 text-xs sm:text-sm">
        © 2025 All rights reserved by <span className="font-semibold">RazinSoft</span>.
      </div>
    </footer>
  );
};

export default Footer;
