import { ShoppingBag } from "lucide-react";

export default function CartWidget({ isCartOpen, setIsCartOpen }) {
  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block transition-all duration-300 ${
        isCartOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        onClick={() => setIsCartOpen(true)}
        className="w-28 h-28 rounded-tl-2xl rounded-bl-2xl bg-white shadow-lg border flex flex-col justify-center items-center cursor-pointer"
      >
        <ShoppingBag className="text-pink-600 w-8 h-8" />
        <p className="text-gray-700 text-sm">0 items</p>
        <div className="bg-pink-600 text-white font-bold w-full text-center py-1 rounded-bl-2xl">
          $0.00
        </div>
      </div>
    </div>
  );
}
