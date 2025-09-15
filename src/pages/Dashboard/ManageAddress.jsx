import { useState } from "react";
import { MapPin, Pencil, Plus } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import NewAddressModal from "../checkout/NewAddressModal";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "HOME",
      name: "hurhmk",
      phone: "10827694818",
      address: "2, 1hy6 37h, 22 sjjdn, 1-100221",
    },
  ]);
   const [isModalOpen, setIsModalOpen] = useState(false);
     const handleNewAddress = (data) => {
    console.log("New Address Submitted:", data);
  };
  const handleEdit = (id) => {
    console.log("Edit address", id);
    // Add edit logic
  };

//   const handleAdd = () => {
//     console.log("Add new address");
//     // Add new address logic
//   };

  return (
    <div className="p-4  mt-10 px-[2rme] sm:px-[4rem] ">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Manage Address</h1>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-lg shadow-sm p-4 border border-gray-200"
          >
            {/* Left side */}
            <div className="flex gap-4">
              {/* Icon */}
                 <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-pink-500 text-lg" />
                <span className="bg-black text-white rounded-lg px-2 py-1 text-xs">{addr.label}</span>
              </div>

              {/* Address details */}
              <div>
                <h2 className="font-semibold text-gray-800">{addr.name}</h2>
                <p className="text-sm text-gray-600">{addr.phone}</p>
                <p className="text-sm text-gray-500">{addr.address}</p>
                {/* <span className="inline-block mt-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                  {addr.label}
                </span> */}
              </div>
            </div>

            {/* Right side */}
            <button
              onClick={() => handleEdit(addr.id)}
              className="mt-3 md:mt-0 flex items-center gap-2 border border-pink-500 text-pink-600 px-3 py-2 rounded-lg text-sm hover:bg-pink-50 transition"
            >
              <Pencil className="w-4 h-4" /> Edit
            </button>
          </div>
        ))}
      </div>

      {/* Add new address button */}
      <div className="absolute  mt-10 right-6">
        <button
        //   onClick={handleAdd}
          onClick={() => setIsModalOpen(true)} 
          className="flex items-center gap-2 bg-color3 hover:bg-pink-700 text-white px-4 py-3 rounded-lg shadow-lg"
        >
          <Plus className="w-4 h-4" /> New Address
        </button>
         <NewAddressModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewAddress}
              />
      </div>
    </div>
  );
};

export default ManageAddress;
