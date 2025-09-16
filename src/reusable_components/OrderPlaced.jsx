import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function OrderPlaced({ isOpen, onClose }) {
  // ✅ Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* 🔹 Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* 🔹 Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8 text-center transform transition-all duration-300 scale-100 animate-fadeIn">
        {/* ✅ Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-14 h-14" />
        </div>

        {/* ✅ Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Your order has been placed
        </h2>

        {/* ✅ Subtitle */}
        <p className="text-gray-600 mt-2 bg-gray-100 rounded-lg p-2 text-sm sm:text-base">
          Your order has been placed successfully.
        </p>

        {/* ✅ Info */}
        <p className="text-gray-500 text-sm sm:text-base mt-3">
          You will receive an order confirmation email with details of your
          order.
        </p>

        {/* ✅ Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
