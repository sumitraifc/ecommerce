import { useState } from "react";
import {
  Home,
  MapPin,
  CreditCard,
  Banknote,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import SavedAddressModal from "./SavedAddressModal";

export default function Checkout() {
      const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: "Sample Product", price: 319.0, quantity: 1 },
  ]);
  const [showOrderItems, setShowOrderItems] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [orderNote, setOrderNote] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const shippingAddress = {
    name: "hurhmk",
    phone: "1082769418",
    address: "2, thy6 37h, 22 sjdn, 1-100221",
  };
   const addresses = [
    {
      name: "hurhmk",
      phone: "10827694818",
      fullAddress: "2, 1hy6 37h, 22 sjjdn, , 1-100221",
    },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const shippingCharge = 20.0;
  const vatAmount = subtotalAfterDiscount * 0.02;
  const gstAmount = subtotalAfterDiscount * 0.03;
  const totalTaxAmount = vatAmount + gstAmount;
  const totalPayable = subtotalAfterDiscount + shippingCharge + totalTaxAmount;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAppliedCoupon({ code: couponCode, discount: 31.9 });
      setCouponCode("");
    } else if (couponCode.toLowerCase() === "free20") {
      setAppliedCoupon({ code: couponCode, discount: 20.0 });
      setCouponCode("");
    } else {
      alert("Invalid coupon code");
    }
  };

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      setIsPlacingOrder(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      {/* Breadcrumb (Desktop Only) */}
      <div className="hidden md:block bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 text-sm text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Cart</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Checkout
              </h1>
              <button
                onClick={() => setShowOrderItems(!showOrderItems)}
                className="lg:hidden flex items-center text-pink-600 font-medium"
              >
                <span>({orderItems.length} items)</span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    showOrderItems ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mobile Order Summary */}
            {showOrderItems && (
              <div className="lg: bg-white rounded-lg shadow-sm border p-4">
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-sm">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalPayable.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm border p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Shipping Address
                </h2>
                <button className="text-pink-600 hover:text-pink-700 text-sm font-medium"
                onClick={() => setIsModalOpen(true)}>
                  Change
                </button>
                <SavedAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addresses={addresses}
      />
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-pink-600" />
                  </div>
                </div>
                <div>
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded mb-2 inline-block">
                    HOME
                  </div>
                  <div className="font-medium">{shippingAddress.name}</div>
                  <div className="text-gray-600 text-sm">
                    {shippingAddress.phone}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {shippingAddress.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Note */}
            <div className="bg-white rounded-lg shadow-sm border p-5 sm:p-6">
              <h2 className="text-lg font-semibold mb-4">
                Note{" "}
                <span className="text-gray-500 text-sm font-normal">
                  (Optional)
                </span>
              </h2>
              <textarea
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                placeholder="Write your note..."
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm border p-5 sm:p-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                  />
                  <span className="ml-3 flex items-center">
                    <Banknote className="w-5 h-5 text-gray-600 mr-2" />
                    Cash on delivery
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                  />
                  <span className="ml-3 flex items-center">
                    <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                    Credit or Debit Card
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary (Desktop) */}
          <div className="block lg:block">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              {/* Order Summary */}
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-gray-700"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="my-4" />

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">${shippingCharge.toFixed(2)}</span>
                </div>
               <div className="bg-gray-100 p-4 rounded-lg space-y-3">
  {/* Heading */}
  <h3 className="text-lg font-semibold text-gray-800 mb-2">
    VAT & Taxes Summary
  </h3>

  {/* VAT */}
  <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
    <span>VAT (2%)</span>
    <span className="font-medium">${vatAmount.toFixed(2)}</span>
  </div>

  {/* GST */}
  <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
    <span>GST (3%)</span>
    <span className="font-medium">${gstAmount.toFixed(2)}</span>
  </div>

  {/* Total Tax Amount */}
  <div className="flex justify-between bg-gray-300 p-2 rounded-lg font-semibold">
    <span>Total Tax Amount:</span>
    <span>$15.95</span>
  </div>
</div>

              </div>

              <hr className="my-4 border border-black" />

              {/* Total */}
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total Payable</span>
                <span>${totalPayable.toFixed(2)}</span>
              </div>

              {/* Coupon Section */}
              <div className="mb-6 bg-gray-200 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Have a coupon?</h3>
                {appliedCoupon ? (
                  <div className="flex justify-between items-center bg-green-50 border p-3 rounded-lg">
                    <span className="text-green-800 font-medium">
                      {appliedCoupon.code}
                    </span>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      className="text-green-600 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 py-2 border rounded-l-lg focus:ring-1 focus:ring-color3  focus:outline-none"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      disabled={!couponCode.trim()}
                      className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-800 disabled:opacity-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 disabled:opacity-50 transition"
              >
                {isPlacingOrder ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Place Order Button */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md">
        <button
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 disabled:opacity-50 transition"
        >
          {isPlacingOrder ? "Placing Order..." : "Place Order"}
        </button>
      </div> */}
    </div>
  );
}
