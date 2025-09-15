import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
      <div className="bg-white rounded-xl shadow-lg p- w-[100%] max-w-xl py-10 text-center dark:bg-darkBg dark:text-darkText">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-color2 p-4 rounded-full">
            <LogOut className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold  mb-2">Log Out!</h2>
        <p className="text-gray-600 mb-6">Logout Confirmation</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-20 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-20 py-3 bg-color2 text-white rounded-lg hover:"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
