import React, { useState } from "react";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import { Eye } from "lucide-react";
// Sample blog data
const blogs = [
  {
    id: 1,
    category: "Clothing, Shoes & Jewelry",
    title: "Top Clothing Trends to Elevate Your Style",
    description: "Fashion is ever-evolving, reflecting boost  shifts in culture...",
    image:blog1,
    date: "27 Jan, 2025",
    views: 5,
    author: "Admin",
  },
  {
    id: 2,
    category: "Gadgets",
    title: "Boosting Productivity with Smartwatches",
    description: "Smartwatches are more than timekeepers, they boost productivity...",
    image: blog2,
    date: "27 Jan, 2025",
    views: 6,
    author: "Admin",
  },
  {
    id: 3,
    category: "Business",
    title: "Using a Complete Solution to Grow Your Business",
    description: "Scaling an eCommerce business has never been easier...",
    image: blog3,
    date: "27 Jan, 2025",
    views: 4,
    author: "Admin",
  },
];

const categories = ["All Blogs", "Clothing, Shoes & Jewelry", "Gadgets", "Business"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");

  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-14 bg-gray-50 min-h-screen dark:bg-darkBg dark:text-darkText">


        <div className="bg-white rounded-lg dark:bg-darkcard dark:text-darkText">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb- py-2 px-2 dark:bg-darkcard dark:text-darkText ">Ready Blogs</h1>

      {/* Categories */}
      <div className="flex flex-wrap  gap-2 mb-10 py-2  ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition border dark:bg-darkBg dark:text-darkText ${
              selectedCategory === cat
                ? " text-color3 border-color3"
                : "bg-white text-gray-700 hover:text-color3 "
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition "
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-color3 text-white text-xs font-semibold px-2 py-1 rounded-md">
                New
              </span>
            </div>
            <div className="p-4 dark:bg-darkcard dark:text-darkText">
              <span className="text-color3 text-xs font-semibold">
                {blog.category}
              </span>
              <h3 className="mt-1 text-lg font-bold text-gray-800 dark:bg-darkcard dark:text-darkText">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                <span>👤 {blog.author}</span>
                <span>{blog.date}</span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
  <Eye className="w-4 h-4" />
  {blog.views}
</span>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center w-full mt-8 flex-wrap gap-4">
        <p className="text-gray-600 text-sm">
          Showing 1 to {filteredBlogs.length} of {blogs.length} results
        </p>
        <div className="flex items-center gap-2">
          <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">
            &lt;
          </button>
          <button className="px-5 py-3 border rounded-md text-sm bg-color3 text-white">
            1
          </button>
          <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">
            2
          </button>
          <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">
            ...
          </button>
          <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">
            10
          </button>
          <button className="px-5 py-3 border rounded-md text-sm hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

