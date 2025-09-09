import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";
import appStore from "/appStoreFooter.png"; // replace with actual path
import playStore from "/playStoreFooter.png"; // replace with actual path
import logo from "/logoWhite.png"; 

const Footer = () => {
  return (
    <footer className="bg-color4 text-white font-body">
      {/* 🔹 Top Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-[4rem] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="pr-4">
          <div className="flex items- gap-2 mb-4 text-left">
            <img src={logo} alt="Logo" className="w-[130px] h-[45px]" />
            {/* <h2 className="text-lg font-bold">Ready eCommerce</h2> */}
          </div>
          <p className="flex text-left gap-2 mb-2">
            <FaPhoneAlt size={20}/> 01963953998
          </p>
          <p className="mb-2 flext text-left text-sm">
            The ultimate all-in-one solution for your 
            eCommerce business worldwide
          </p>
          <p className="flex text-left gap-2">
            <FaEnvelope size={24} /> &nbsp; support@razinsoft.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left">Quick Links</h3>
          <ul className="space-y-2 text-left">
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">Most Popular</li>
            <li className="hover:underline cursor-pointer">Best Deal</li>
            <li className="hover:underline cursor-pointer">Blogs</li>
            <li className="hover:underline cursor-pointer">Become a Seller</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left">Company</h3>
          <ul className="space-y-2 text-left">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Return and Refund Policy</li>
          </ul>
        </div>

        {/* App Download & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download our app</h3>
          <div className="flex gap-3 mb-4">
            <img src={appStore} alt="App Store" className="w-32 cursor-pointer" />
            <img src={playStore} alt="Google Play" className="w-32 cursor-pointer" />
          </div>
          <div className="flex gap-4 text-xl">
            <FaFacebook  size={24} className="cursor-pointer hover:text-blue-500 text-blue-600" />
            <FaLinkedin  size={24} className="cursor-pointer hover:text-blue-400" />
            <FaYoutube  size={24} className="cursor-pointer hover:text-red-500" />
            <FaWhatsapp  size={24} className="cursor-pointer hover:text-green-400" />
            <FaTelegram  size={24} className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © 2025 All right reserved by <span className="font-semibold">RazinSoft</span>.
      </div>
    </footer>
  );
};

export default Footer;
