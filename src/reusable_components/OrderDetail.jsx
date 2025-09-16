import { Download, FileText } from "lucide-react";

export default function OrderDetail() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-16">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">Order Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Shop & Product */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-4 sm:p-6">
          {/* Shop Info */}
          <div className="mb-4 pb-4 border-b">
            <h2 className="text-gray-700 font-medium">Purchased from</h2>
            <div className="flex items-center gap-3 mt-2">
              <img
                src="https://via.placeholder.com/40"
                alt="shop"
                className="w-10 h-10 rounded"
              />
              <div>
                <p className="font-semibold text-gray-900">Razin Shop</p>
                <p className="text-yellow-500 text-sm">⭐ 5</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-gray-700 font-medium mb-3">Products (1)</h2>
            <div className="flex items-center gap-4 border rounded-lg p-3">
              <img
                src="https://via.placeholder.com/60"
                alt="product"
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-500">Top ten</p>
                <p className="text-gray-800 font-medium">
                  Fitbit Charge 6 Fitness Tracker with Google apps...
                </p>
              </div>
              <p className="font-semibold">$1000.00</p>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
          {/* Order ID */}
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <h2 className="font-semibold">Order Id</h2>
            <span className="text-sm text-gray-600">#RC000126</span>
          </div>

          {/* Order Summary */}
          <h3 className="font-medium mb-2">Order Summary</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Items</span> <span>1</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span> <span>$1000.00</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount</span> <span>-$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span> <span>$20.00</span>
            </div>
          </div>

          {/* VAT & Taxes */}
          <div className="mt-4 bg-gray-100 rounded-lg p-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span>VAT (2%)</span> <span>$20.00</span>
            </div>
            <div className="flex justify-between">
              <span>GST (3%)</span> <span>$30.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Tax Amount:</span> <span>$50.00</span>
            </div>
          </div>

          {/* Total Amount */}
          <div className="flex justify-between font-semibold text-gray-900 mt-4">
            <span>Total Amount</span> <span>$1070.00</span>
          </div>

          {/* Payment Method */}
          <div className="mt-4 border-t pt-3">
            <h3 className="text-xs text-gray-500 font-medium mb-1">
              PAYMENT METHOD
            </h3>
            <p className="font-medium text-gray-800">Cash Payment</p>
            <span className="inline-block mt-1 text-xs text-red-500 border border-red-300 bg-red-100 px-2 py-0.5 rounded">
              Pending
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition">
              <FileText className="w-4 h-4" /> Pay Slip
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              <Download className="w-4 h-4" /> Invoice
            </button>
          </div>

          {/* Cancel Order */}
          <button className="mt-4 text-sm text-gray-500 hover:underline w-full">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
