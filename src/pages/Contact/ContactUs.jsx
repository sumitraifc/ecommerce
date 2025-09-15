import React from "react";
import contactImg from "../../assets/contact-us.png"; // replace with your image path

const ContactUs = () => {
  return (
    <div className="py-14 px-4 lg:px-16 bg-gray-50 dark:bg-darkBg dark:text-darkText transition-colors duration-300">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-darkText">
          Can’t find the answer you are looking for?
        </h1>
        <p className="text-gray-600 dark:text-darkMuted mt-2">
          Our friendly assistant is here to assist you 24 hours a day!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Contact Form */}
        <form className="bg-white dark:bg-darkCard rounded-2xl md:col-span-2 w-full order-2 md:order-1 p-6 transition-colors duration-300 dark:bg-darkcard dark:text-darkText">
          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-darkText mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg dark:text-darkText rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-darkText mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg dark:text-darkText rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-darkText mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject line"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg dark:text-darkText rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-darkText mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Write your message ..."
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg dark:text-darkText rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-color3"
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
        <div className="flex justify-center md:col-span-1 order-1 md:order-2">
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-2xl shadow-lg w-full max-h-[700px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
