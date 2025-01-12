import React from "react";

const PrivacyPolicy = () => {
  return (

    <div className="bg-gray-50 min-h-screen p-6">

    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          Alder and Rhodes ("we", "us", "our") values your privacy and is committed
          to protecting your personal data. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your personal data in compliance
          with the UK General Data Protection Regulation (GDPR) and other applicable laws.
        </p>
        <p className="mt-2">
          By using our website, you agree to the practices described in this Privacy
          Policy. If you have any questions or require further clarification, please
          contact us at <a href="mailto:alderandrhodes@gmail.com" className="text-blue-600">alderandrhodes@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data Controller</h2>
        <p>
          Alder and Rhodes is the Data Controller responsible for your personal data.
          Our company details are as follows:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Company Name: Alder and Rhodes</li>
          <li>Company Number: 16012397</li>
          <li>Registered Address: 128 City Road, London, United Kingdom, EC1V 2NX</li>
        </ul>
        <p className="mt-2">
          As the Data Controller, we determine the purposes and means of processing
          your personal data in accordance with GDPR and other applicable regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Identity Data: Names, titles, and billing/delivery addresses.</li>
          <li>Contact Data: Email addresses and phone numbers.</li>
          <li>Financial Data: Payment details processed securely by third-party providers.</li>
          <li>Transaction Data: Details about payments and purchased products.</li>
          <li>Usage Data: Website browsing behavior, time spent on pages, etc.</li>
          <li>Technical Data: IP address, browser type, operating system, etc.</li>
          <li>Marketing and Communications Data: Preferences for marketing materials.</li>
          <li>Interaction Data: Information provided via direct communication.</li>
        </ul>
        <p className="mt-2">
          We collect this data directly from you when you interact with our website
          or through automated technologies like cookies (see our Cookie Policy).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Legal Basis for Processing</h2>
        <p>We process your personal data under the following legal bases:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Contract Performance: To process and deliver your orders.</li>
          <li>Consent: For sending marketing communications.</li>
          <li>Legal Obligation: To comply with legal requirements.</li>
          <li>Legitimate Interests: To improve our services and ensure security.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Use of Personal Data</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc list-inside mt-2">
          <li>To process and fulfill orders, including payment and delivery.</li>
          <li>To send promotional materials and personalised offers.</li>
          <li>To improve our website, products, and services through analytics.</li>
          <li>To detect and prevent fraud or security issues.</li>
          <li>To comply with legal obligations like financial reporting.</li>
        </ul>
        <p className="mt-2">
          We may also use your personal data for other purposes, provided such uses
          comply with applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sharing of Personal Data</h2>
        <p>We may share your personal data with the following third parties:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Stripe: For secure payment processing.</li>
          <li>Mailchimp: For email marketing communications.</li>
          <li>
            Other service providers assisting us in website operations, logistics, IT
            support, etc.
          </li>
        </ul>
        <p className="mt-2">
          We may also share your data for legal compliance, business transactions, or
          to protect our rights and property.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Data Storage and Security</h2>
        <p>
          We store your personal data securely using encryption, access controls,
          and regular monitoring. Despite our efforts, no method of transmission or
          storage is completely secure. Please take precautions when sharing data online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p>Under the GDPR, you have the following rights:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Right to Access: Request a copy of your personal data.</li>
          <li>Right to Rectification: Request corrections to inaccurate data.</li>
          <li>Right to Erasure: Request deletion of your personal data.</li>
          <li>Right to Restrict Processing: Request limitations on data processing.</li>
          <li>Right to Data Portability: Request transfer of your personal data.</li>
          <li>Right to Object: Object to specific processing activities.</li>
          <li>Right to Withdraw Consent: Withdraw consent for data processing.</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, contact us at
          <a href="mailto:alderandrhodes@gmail.com" className="text-blue-600"> alderandrhodes@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests related to this Privacy
          Policy, contact us at:
        </p>
        <p>Email: <a href="mailto:alderandrhodes@gmail.com" className="text-blue-600">alderandrhodes@gmail.com</a></p>
        <p>
          Postal Address: Alder and Rhodes, 128 City Road, London, United Kingdom, EC1V 2NX
        </p>
      </section>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
