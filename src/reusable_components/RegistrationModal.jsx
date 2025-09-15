import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  // 🔹 Lock body scroll & prevent layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/40 z-50">
      <div
        className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg p-6 sm:p-8 relative
        max-h-[90vh] overflow-y-auto scrollbar-hide dark:bg-darkcard dark:text-darkText"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-1 text-left">Welcome!</h2>
        <p className="text-sm text-gray-500 mb-6 text-left">
          Create your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-left">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border dark:bg-darkBg dark:text-darkText border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-color3"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1 text-left">
              Country
            </label>
            <select className="w-full border dark:bg-darkBg dark:text-darkText border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-color3">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1 text-left">
              Phone Number
            </label>
            <div className="flex">
              <span className="border dark:bg-darkBg dark:text-darkText border-gray-300 bg-gray-100 border-r-0 rounded-l-md px-3 flex items-center text-gray-500">
                +00
              </span>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full border dark:bg-darkBg dark:text-darkText border-gray-300 rounded-r-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-color3"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-left">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border dark:bg-darkBg dark:text-darkText border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-color3"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-left">
              Create Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border dark:bg-darkBg dark:text-darkText border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-color3"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
              </span>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-left">
            By clicking the ‘Sign up’ button, you agree with our{" "}
            <span className="text-color3 cursor-pointer">Terms & Conditions</span> and{" "}
            <span className="text-color3 cursor-pointer">Privacy Policy</span>.
          </p>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-color3 text-white py-3 rounded-lg hover:bg-pink-700"
          >
            Sign up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm mt-4 text-left">
          Already have an account?{" "}
          <span className="text-color3 cursor-pointer hover:underline">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
