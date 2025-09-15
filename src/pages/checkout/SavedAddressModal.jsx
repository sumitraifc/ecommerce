import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import NewAddressModal from "./NewAddressModal";

const SavedAddressModal = ({ isOpen, onClose, addresses = [] }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
      const handleNewAddress = (data) => {
    console.log("New Address Submitted:", data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 py-5  ">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative dark:bg-darkBg dark:text-darkText">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4 py-5">Saved Address </h2>

        {/* Saved Addresses */}
        <div className="space-y-3">
          {addresses.map((address, index) => (
            <label
              key={index}
              className="flex items-center justify-between border rounded-lg p-4 cursor-pointer border-color3 transition"
            >
              <div className="flex gap-3">
                <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center gap-2">
  <FaMapMarkerAlt className="text-pink-500 text-lg" />
  <span className="bg-black text-white rounded-lg px-2 py-1 text-xs">HOME</span>
</div>

                <div>
                  <p className="font-medium">{address.name}</p>
                  <p className="text-sm text-gray-500">{address.phone}</p>
                  <p className="text-sm text-gray-500">{address.fullAddress}</p>
                </div>
              </div>
              <input type="radio" name="address" className="text-pink-500" />
            </label>
          ))}
        </div>

        {/* New Address */}
        <button className="w-full mt-4 border border-pink-500  text-color3 hover:text-white py-4  rounded-lg hover:bg-color3 transition"
        onClick={() => setIsModalOpen(true)} >
          + New Address
        </button>
      </div>
       <NewAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewAddress}
      />
    </div>
  );
};

export default SavedAddressModal;
