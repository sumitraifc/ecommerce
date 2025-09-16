import React from "react";

export default function AboutUs() {
  return (
    <div className="px-[2rem] sm:px-[4rem] py-16 text-slate-800 dark:text-darkText">
      <h1 className="text-3xl font-bold mb-6 text-color1">Welcome to ReadyEcommerce</h1>
      <p className="mb-6 leading-relaxed">
        At <span className="font-semibold">ReadyEcommerce</span>, we provide a comprehensive
        solution for those looking to launch their own multi-vendor eCommerce
        platform. Our demo site showcases the robust features and capabilities
        of our system, designed to empower entrepreneurs and businesses to
        thrive in the digital marketplace.
      </p>

      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
      <p className="mb-6 leading-relaxed">
        ReadyEcommerce is developed by <span className="font-semibold">RazinSoft</span>, 
        a leading software development firm specializing in SaaS solutions and
        eCommerce platforms. With years of industry experience, we are dedicated
        to creating innovative tools that make online retail accessible to
        everyone.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6 leading-relaxed">
        Our mission is to simplify the eCommerce experience for both sellers and
        buyers. We understand the complexities involved in setting up and
        managing a multi-vendor marketplace, and our goal is to provide a
        user-friendly platform that streamlines the process.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Choose ReadyEcommerce?</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><span className="font-semibold">Multi-Vendor Support:</span> Multiple vendors under one umbrella, enabling a diverse shopping experience.</li>
        <li><span className="font-semibold">Customizable Features:</span> Tailor your marketplace with extensive customization options.</li>
        <li><span className="font-semibold">Scalable Solutions:</span> Designed to grow with startups and established businesses alike.</li>
        <li><span className="font-semibold">User-Friendly Interface:</span> Ensuring both vendors and customers can navigate with ease.</li>
        <li><span className="font-semibold">Secure Transactions:</span> Built-in robust security measures to protect data and transactions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Explore Our Features</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><span className="font-semibold">Vendor Management:</span> Simplified onboarding and management tools.</li>
        <li><span className="font-semibold">Product Listings:</span> Easy-to-use interface for managing products.</li>
        <li><span className="font-semibold">Payment Integration:</span> Multiple payment gateways for flexibility.</li>
        <li><span className="font-semibold">Order Management:</span> Streamlined order processing and tracking.</li>
        <li><span className="font-semibold">Analytics Dashboard:</span> Insightful reports and analytics to drive decisions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Join the ReadyEcommerce Community</h2>
      <p className="mb-6 leading-relaxed">
        ReadyEcommerce is not just a platform; it's a community of entrepreneurs
        and innovators. We invite you to explore our demo site at{" "}
        <span className="text-color1 font-semibold cursor-pointer hover:underline">
          ReadyEcommerce Demo
        </span>{" "}
        and see for yourself how our system can transform your eCommerce vision
        into reality.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6 leading-relaxed">
        If you have any questions or need further information about our demo or
        the source code available for resale, feel free to reach out to us. Our
        team at <span className="font-semibold">RazinSoft</span> is here to
        assist you on your journey to launching a successful online marketplace.
      </p>

      <p className="font-semibold">Thank you for considering ReadyEcommerce. We look forward to partnering with you!</p>
    </div>
  );
}
