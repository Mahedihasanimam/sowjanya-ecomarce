// pages/returns-and-refunds.js

import Head from 'next/head';

export default function ReturnsAndRefunds() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <Head>
        <title>Returns and Refunds Policy | Alder and Rhodes</title>
        <meta name="description" content="Read the returns and refunds policy of Alder and Rhodes." />
      </Head>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Returns and Refunds Policy</h1>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            At Alder and Rhodes ("we", "us", "our"), we are committed to providing high-quality products and excellent customer service. This Returns and Refunds Policy outlines your rights and our obligations regarding returns, refunds, and exchanges. Please read this policy carefully to understand your rights and responsibilities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Return and Refund Policy</h2>
          <p className="text-gray-600 mb-4">
            We offer refunds for items returned within 7 days of receipt. This refund period is an additional policy and does not affect your statutory rights, which remain at 14 days.
          </p>
          <p className="text-gray-600 mb-4">
            This Returns and Refunds Policy does not replace your statutory rights under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. For eligible purchases, customers retain the statutory right to cancel their order and return the goods within 14 days of receipt for a full refund. For more details on your statutory rights, please visit the UK Government website or contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Conditions for Returns</h2>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Items must be returned in their original condition, unused, unworn, and with all tags and packaging intact.</li>
            <li>For hygiene reasons, we cannot accept returns for certain items such as underwear or swimwear if the hygiene seal has been removed.</li>
            <li>Items must not show any signs of wear, damage, or alterations made by the customer.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Refund Method</h2>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Refunds will be processed to the same payment method used for the original purchase.</li>
            <li>Refunds will be issued within 7 days of receiving the returned item.</li>
            <li>Refunds will include the cost of the item(s) but exclude original shipping fees, unless the item is faulty or incorrectly supplied.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Return Postage Costs</h2>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>Customers are responsible for the cost of returning items unless the item is faulty or incorrectly supplied.</li>
            <li>We recommend using a trackable postage service, as we cannot be held responsible for returns that are lost or damaged in transit.</li>
            <li>If a customer chooses a premium shipping option for the return, Alder and Rhodes will only reimburse standard shipping costs (if applicable).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Exceptions and Exemptions</h2>
          <p className="text-gray-600 mb-4">
            Returns received outside the refund period may be accepted at our discretion and may be subject to additional fees or partial refunds based on the condition of the item.
          </p>
          <p className="text-gray-600 mb-4">
            Items purchased through gift cards are refundable only as store credit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">How to Return an Item</h2>
          <ol className="list-decimal pl-5 text-gray-600 mb-4">
            <li>Contact us at <a href="mailto:alderandrhodes@gmail.com" className="text-blue-600 underline">alderandrhodes@gmail.com</a> within the refund period to initiate a return. Provide your order number and details of the item(s) you wish to return.</li>
            <li>Ensure the item is securely packaged to prevent damage during transit. Include your original receipt or proof of purchase in the package.</li>
            <li>Send the package to our returns address:
              <address className="italic">
                Alder and Rhodes Returns <br />
                128 City Road <br />
                London, United Kingdom <br />
                EC1V 2NX
              </address>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this policy or need assistance with a return, please contact us:
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:alderandrhodes@gmail.com" className="text-blue-600 underline">alderandrhodes@gmail.com</a>
          </p>
          <p className="text-gray-600">
            Postal Address: 128 City Road, London, United Kingdom, EC1V 2NX
          </p>
        </section>
      </div>
    </div>
  );
}
