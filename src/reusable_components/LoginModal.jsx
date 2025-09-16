import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import RegistrationModal from "./RegistrationModal";

const LoginModal = ({ isOpen, onClose,onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-xl p-6 relative text-slate-700 text-base font-normal leading-normal dark:bg-darkBg dark:text-darkText">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          <span className="bg-gray-100 p-2 py-1 rounded-full w-9 h-9">✕</span>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-1 text-black dark:bg-darkBg dark:text-darkText">Welcome!</h2>
        <p className="mb-6 mt-3 text-black dark:bg-darkBg dark:text-darkText text-xl">Please Login to continue</p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email / Phone */}
          <div>
            <label className="text-slate-700 text-base font-normal leading-normal mb-2 block dark:bg-darkBg dark:text-darkText">
              Email / Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter email or phone number"
              className="w-full border rounded-lg px-4 py-3 dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-1 focus:ring-color3"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-700 text-base font-normal leading-normal mb-2 block dark:bg-darkBg dark:text-darkText">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 dark:bg-darkBg dark:text-darkText focus:outline-none focus:ring-1 focus:ring-color3"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEye  size={25}/> : <FaEyeSlash size={25} />}
              </button>
            </div>
            <div className="text-right mt-1">
              <button
                type="button"
                className="text-md hover:text-color3"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-color3 hover:bg-pink-700 text-white font-medium py-3 rounded-lg transition mt-5"
          >
            Log in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-black text- mt-4 text-bold pt-1 dark:bg-darkBg dark:text-darkText">
          Don’t have an account?{" "}
           <button
        className="text-color3 hover:underline font-bold"
        // onClick={() => setIsModalOpen(true)}
         onClick={onSwitchToRegister}
      >
        Sign Up
      </button>
         {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
