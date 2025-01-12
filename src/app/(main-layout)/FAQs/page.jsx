import React from 'react';

const FAQs = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

        {/* FAQ Item 1 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">What is Alder and Rhodes?</h2>
          <p className="mt-2 text-gray-600">
            Alder and Rhodes is a fashion brand offering exclusive limited-collection drops of seasonal garments.
            Our collections are designed to provide unique pieces with quality craftsmanship.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">How can I place an order?</h2>
          <p className="mt-2 text-gray-600">
            To place an order, simply browse our products and add items to your cart. Once you're ready, proceed to checkout
            where you can securely pay using your preferred method. After completing the payment, you will receive an order
            confirmation via email.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">What payment methods do you accept?</h2>
          <div className="mt-2 text-gray-600">
            We accept the following payment methods:
            <ul className="list-disc list-inside mt-2">
              <li>Credit/Debit Cards</li>
              <li>Apple Pay (via Stripe)</li>
            </ul>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Can I modify or cancel my order?</h2>
          <p className="mt-2 text-gray-600">
            Once an order is placed and payment is confirmed, we are unable to modify or cancel it. Please double-check
            your order before completing the checkout process.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">How do I track my order?</h2>
          <p className="mt-2 text-gray-600">
            After your order is shipped, you will receive a tracking number via email. Use this number to track the progress
            of your delivery through the courier's website.
          </p>
        </div>

        {/* FAQ Item 6 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">What should I do if my order is damaged or incorrect?</h2>
          <p className="mt-2 text-gray-600">
            If your order arrives damaged or incorrect, please contact us within 7 days of receiving your package. We will
            assist you in processing a return or exchange for the correct item.
          </p>
        </div>

        {/* FAQ Item 7 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">How do I return an item?</h2>
          <p className="mt-2 text-gray-600">
            We accept returns within 14 days of receiving your order, provided the item is unused and in its original
            packaging. To initiate a return, please contact our customer support at <a href="mailto:alderandrhodes@gmail.com" className="text-blue-500 underline">alderandrhodes@gmail.com</a>.
          </p>
        </div>

        {/* FAQ Item 8 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Are the sizes accurate?</h2>
          <p className="mt-2 text-gray-600">
            We provide detailed size charts for all of our products. However, sizing may vary depending on the design. If you
            are unsure about sizing, feel free to contact us for assistance.
          </p>
        </div>

        {/* FAQ Item 9 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Do you ship internationally?</h2>
          <p className="mt-2 text-gray-600">
            Yes, we offer international shipping. Shipping fees and delivery times will vary depending on the destination.
            You will be informed of the shipping costs during checkout.
          </p>
        </div>

        {/* FAQ Item 10 */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">How can I contact customer support?</h2>
          <p className="mt-2 text-gray-600">
            You can reach us at <a href="mailto:alderandrhodes@gmail.com" className="text-blue-500 underline">alderandrhodes@gmail.com</a> for any inquiries or assistance. Our support team will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
