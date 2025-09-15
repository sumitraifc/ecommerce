import { useState } from "react";
import { X } from "lucide-react";

export default function NewAddressModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    flat: "",
    postalCode: "",
    address1: "",
    address2: "",
    tag: "HOME",
    isDefault: false,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-20">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 relative dark:bg-darkcard dark:text-darkText">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">New Address</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
                className="w-full mt-1 px-3   py-3 border dark:bg-darkBg dark:text-darkText rounded-lg focus:outline-none focus:ring-[1px] focus:ring-color3 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone"
                className="w-full mt-1 px-3 py-3 border  dark:bg-darkBg dark:text-darkText rounded-lg focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
          </div>

          {/* Area, Flat, Postal Code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter Area"
                className="w-full px-3 py-3 border rounded-lg dark:bg-darkBg dark:text-darkText focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Flat</label>
              <input
                type="text"
                name="flat"
                value={formData.flat}
                onChange={handleChange}
                placeholder="Enter Flat no"
                className="w-full px-3 py-3 border rounded-lg  dark:bg-darkBg dark:text-darkText focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter Postal Code"
                className="w-full px-3 py-3 border rounded-lg dark:bg-darkBg dark:text-darkText focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
          </div>

          {/* Address Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                required
                placeholder="Enter address 1"
                className="w-full mt-1 px-3  py-3 border dark:bg-darkBg dark:text-darkText rounded-lg focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address Line 2</label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Enter address 2"
                className="w-full mt-1 px-3  py-3 border dark:bg-darkBg dark:text-darkText rounded-lg focus:ring-1 focus:ring-color3  focus:outline-none"
              />
            </div>
          </div>

          {/* Address Tag + Default + Submit in one line */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Address Tag:</label>
              <div className="flex gap-2">
                {["HOME", "OFFICE", "OTHER"].map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => setFormData((prev) => ({ ...prev, tag }))}
                    className={`px-4 py-1 rounded-full border ${
                      formData.tag === tag
                        ? "bg-color3 text-white border-color3"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                className="w-4 h-6 text-color3 border-gray-300 focus:ring-color3"
              />
              <label className="text-sm">Make it default address</label>
            </div>

            <button
              type="submit"
              className="bg-color3 text-white px-6 py-3 rounded-lg hover:bg-color3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
