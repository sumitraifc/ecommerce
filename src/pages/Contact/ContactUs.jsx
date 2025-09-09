import React from "react";
import contactImg from "../../assets/contact-us.png"; // replace with your image path

const ContactUs = () => {
  return (
    <div className="py-12 px-4 lg:px-16 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Can’t find the answer you are looking for?
        </h1>
        <p className="text-gray-600 mt-2">
          Our friendly assistant is here to assist you 24 hours a day!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-6 lg:p-8 w-full">
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject line"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Write your message ..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-color3 text-white font-semibold px-8 py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Send
            </button>
          </div>
        </form>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-2xl shadow-lg w-full max-h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
