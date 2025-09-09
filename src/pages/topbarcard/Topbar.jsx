// src/components/Topbar.jsx

import React from 'react';

// 1. Import local SVG files instead of react-icons
import SecurePaymentIcon from '../../assets/secure-payment.svg';
import CustomerReviewIcon from '../../assets/customer-review.svg';
import CustomerSupportIcon from '../../assets/support.svg';
import EasyReturnIcon from '../../assets/easy-return.svg';


// 2. Update the data array to use the imported SVG source files
const features = [
  {
    iconSrc: SecurePaymentIcon,
    title: 'Secure Payment Gateways',
    description: '48+ gateways to ensure your security.',
    bgColor: 'bg-[#f0eaff]', // Light purple
  },
  {
    iconSrc: CustomerReviewIcon,
    title: 'Genuine Customer Reviews',
    description: 'Find verified reviews showcased on our platforms.',
    bgColor: 'bg-[#fff4d8]', // Light yellow
  },
  {
    iconSrc: CustomerSupportIcon,
    title: '24/7 Customer Support',
    description: 'Always our support team is available for you.',
    bgColor: 'bg-[#e3f5e9]', // Light green
  },
  {
    iconSrc: EasyReturnIcon,
    title: 'Easy Return Policy',
    description: "If you're not satisfied, return it hassle-free.",
    bgColor: 'bg-[#e0f3ff]', // Light blue
  },
];

const Topbar = () => {
  return (
    <section className="py-8 ">
      {/* 3. Applied your requested Tailwind CSS classes to this container */}
      <div className="mx-auto max-w-8xl p-6 bg-white rounded-xl shadow-lg border border-dashed border-slate-300 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 lg:gap-16">
        {features.map((feature, index) => (
          <div className="flex items-center gap-4" key={index}>
            {/* Icon wrapper with dynamic background color */}
            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${feature.bgColor}`}>
              {/* 4. Use an <img> tag to display the SVG */}
              <img 
                src={feature.iconSrc} 
                alt={`${feature.title} icon`} 
                className="" 
              />
            </div>
            {/* Text content */}
            <div>
              <h3 className="text- font- font-bold">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topbar;