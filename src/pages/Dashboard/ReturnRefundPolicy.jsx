import React from "react";

export default function ReturnRefundPolicy() {
  return (
    <div className="px-[2rem] sm:px-[4rem] py-16 text-slate-800 dark:text-darkText">
      <h1 className="text-3xl font-bold mb-6 text-color1">
        Return and Refund Policy
      </h1>

      <p className="mb-6 leading-relaxed">
        Welcome to the Return and Refund Policy of{" "}
        <span className="font-semibold">ReadyEcommerce</span>, a demo platform
        designed to showcase the capabilities of our multi-vendor eCommerce
        system. While this website is a demonstration and not an operational
        online store, we believe it is essential to outline our return and
        refund practices to provide transparency and clarity.
      </p>

      <h2 className="text-2xl font-semibold mb-4">General Overview</h2>
      <p className="mb-6 leading-relaxed">
        At ReadyEcommerce, we are committed to ensuring customer satisfaction.
        Although this is a demo site, our return and refund policy is modeled on
        best practices typically found in the eCommerce industry. This policy
        applies to any potential transactions that may occur within our demo
        environment, and it is subject to change based on future operational
        needs.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Products must be returned within 30 days of the original purchase date.</li>
        <li>Items must be unused, in their original packaging, and include all accessories.</li>
        <li>
          Digital products (such as software licenses or downloadables) are not
          eligible for returns once accessed or downloaded.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>
          Contact our support team at{" "}
          <span className="text-color1 font-semibold">support@readyecommerce.app</span>{" "}
          with your order number and reason for return.
        </li>
        <li>
          Receive confirmation from our support team with further instructions.
        </li>
        <li>
          Pack the item securely and ship it to the address provided in the
          confirmation email.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          Once your return is received and inspected, you’ll be notified via
          email.
        </li>
        <li>
          If approved, your refund will be processed, and a credit applied to
          your original payment method.
        </li>
        <li>
          Refunds may take 5-10 business days depending on your bank or card
          provider.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Non-Refundable Items</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Gift cards</li>
        <li>Downloadable software products accessed or downloaded</li>
        <li>Items marked as non-returnable at time of sale</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
      <p className="mb-6 leading-relaxed">
        Currently, we do not offer exchanges for items purchased through our
        demo site. If you need a different item, please return the original and
        place a new order.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="mb-6 leading-relaxed">
        If you have any questions or concerns, please reach out to our customer
        support team:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          Email:{" "}
          <span className="text-color1 font-semibold">
            support@readyecommerce.app
          </span>
        </li>
        <li>Phone: (123) 456-7890</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
      <p className="mb-6 leading-relaxed">
        ReadyEcommerce reserves the right to update or modify this return and
        refund policy at any time. Customers are encouraged to review this
        policy periodically for changes. Continued use of the site indicates
        acceptance of any modifications.
      </p>

      <p className="font-semibold">
        Thank you for considering ReadyEcommerce. We strive to provide a
        transparent and efficient shopping experience, even in our demo
        environment.
      </p>
    </div>
  );
}
