import React from 'react';

function PrivacyPolicy() {
  return (
    <div className=" px-[2rem] sm:px-[4rem] py-16 text-gray-800 dark:bg-darkBg dark:text-darkText">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Privacy Policy for ReadyEcommerce</strong>
      </p>

      <p className="mb-6">
        At <strong>ReadyEcommerce</strong>, accessible from{' '}
        <a
          href="https://demo.readyecommerce.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://demo.readyecommerce.app
        </a>
        , your privacy is of utmost importance to us. This Privacy Policy
        outlines the types of personal information we collect, how we use it,
        and the measures we take to protect your information. By accessing our
        demo website, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-2">
          We may collect and process the following types of information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Identification Information:</strong> This may
            include your name, email address, phone number, and any other
            details you provide while interacting with our demo website.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you access and use the website. This could include your IP address,
            browser type, pages visited, and the time and date of your visit.
          </li>
          <li>
            <strong>Cookies:</strong> Our website may use cookies to enhance
            user experience. Cookies are files with small amounts of data which
            may include an anonymous unique identifier.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="mb-2">ReadyEcommerce uses the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our demo website.</li>
          <li>Improve, personalize, and expand our website.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information.
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">Last updated: September 15, 2025</p>
    </div>
  );
}

export default PrivacyPolicy;
