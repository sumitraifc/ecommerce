import React, { useState } from 'react';
import { FaStar, FaComment, FaTimes, FaTicketAlt, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';

const CartSidebar = ({isCartOpen,setIsCartOpen}) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  
  const stores = [
    {
      id: 1,
      name: 'Easy Life',
      rating: 5,
      items: [
        {
          id: 1,
          name: 'Dahua DH-SD49225I-HC 2MP PTZ Network Camera',
          brand: 'Dahua',
          price: 2500.00,
          originalPrice: 2800.00,
          discount: 10.71,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop'
        },
        {
          id: 2,
          name: 'HP 15s-du3039TX 11th Gen i5-1135G7',
          brand: 'HP',
          price: 805.00,
          originalPrice: 820.00,
          discount: 1.83,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop'
        }
      ]
    }
  ];

  const updateQuantity = (storeId, itemId, change) => {
    // Quantity update logic would go here
    console.log('Update quantity', { storeId, itemId, change });
  };

  const calculateStoreTotal = (store) => {
    return store.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateCartTotal = () => {
    if (selectedStore) {
      const store = stores.find(s => s.id === selectedStore);
      return store ? calculateStoreTotal(store) : 0;
    }
    return 0;
  };

  const getTotalItems = () => {
    return stores.reduce((total, store) => 
      total + store.items.reduce((storeTotal, item) => storeTotal + item.quantity, 0), 0
    );
  };

  const VoucherModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Apply Store Voucher</h3>
          <button 
            onClick={() => setIsVoucherModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Enter voucher code"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-color3"
          />
          <button className="w-full bg-color3 text-white py-2 rounded-lg hover:bg-pink-600 transition">
            Apply Voucher
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-120 bg-white shadow-lg z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-color3 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">My Cart</h2>
                <span className="text-color3">({getTotalItems()} items)</span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {stores.map(store => (
                <div key={store.id} className="border-b">
                  {/* Store Header */}
                  <button 
                    onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded-full" />
                      </div>
                      <span className="font-medium">{store.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      <span>{store.rating}</span>
                      <FaComment className="text-color3" />
                    </div>
                  </button>

                  {/* Store Items */}
                  {selectedStore === store.id && (
                    <div className="space-y-4 p-4 bg-gray-50">
                      {store.items.map(item => (
                        <div key={item.id} className="flex gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="text-sm text-gray-500">{item.brand}</div>
                            <h4 className="font-medium text-sm leading-tight mb-1">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-color3 font-bold">
                                ${item.price.toFixed(2)}
                              </span>
                              <span className="text-gray-400 text-sm line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                              <span className="bg-red-500 text-white text-xs px-1 rounded">
                                {item.discount.toFixed(2)}% OFF
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => updateQuantity(store.id, item.id, -1)}
                                className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                              >
                                <FaMinus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(store.id, item.id, 1)}
                                className="w-7 h-7 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                              >
                                <FaPlus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Voucher Section */}
              <button 
                onClick={() => setIsVoucherModalOpen(true)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 border-b"
              >
                <div className="flex items-center gap-3">
                  <FaTicketAlt className="text-gray-400" />
                  <span className="text-gray-600">Apply Store voucher</span>
                </div>
                <FaChevronRight className="text-gray-400" />
              </button>
            </div>

            {/* Footer */}
            <div className="border-t p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Cart Amount</span>
                <span className="text-2xl font-bold">
                  ${calculateCartTotal().toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-color3 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition flex items-center justify-center gap-2">
                Proceed to Checkout
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Voucher Modal */}
      {isVoucherModalOpen && <VoucherModal />}
    </div>
  );
};

export default CartSidebar;