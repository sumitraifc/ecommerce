import React from 'react';

function TermsOfService() {
  return (
    <div className=" px-[2rem] sm:px-[4rem] py-16 text-gray-800 dark:bg-darkBg dark:text-darkText">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. It is your responsibility to check this page periodically for changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <p>
          You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Account Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
        <p>
          We may suspend or terminate your access to the service at any time, without prior notice or liability, for any reason whatsoever.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
        <p>
          These Terms are governed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: September 15, 2025
      </p>
    </div>
  );
}

export default TermsOfService;
