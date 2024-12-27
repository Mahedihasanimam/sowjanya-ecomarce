import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Initialize stripePromise
const stripePromise = loadStripe("your-publishable-stripe-key");

function CompletePage({ createdAppointment, setCurrentStep, setIsPaid }) {
  const [isLoading, setIsLoading] = useState(true); // For handling loading state
  const [errorMessage, setErrorMessage] = useState(null); // For error handling
  const price = createdAppointment?.serviceId?.price;

  // Debugging: Log the price and appointment data
  useEffect(() => {
    console.log("Created Appointment:", createdAppointment); // Log the createdAppointment object
    if (!price) {
      setErrorMessage("Invalid price or missing data.");
    }
    setIsLoading(false);
  }, [createdAppointment]);

  // Log the values for debugging
  console.log("Price from Appointment:", price);

  // Ensure the price is a valid number before showing the payment form
  if (isLoading) {
    return <div>Loading payment details...</div>;
  }

  if (errorMessage || isNaN(price) || price <= 0) {
    return <div>{errorMessage || "Error: Unable to load payment details."}</div>;
  }

  // Convert price to cents (Stripe expects price in cents)
  const options = {
    mode: "payment",
    amount: price * 100, // Stripe expects the price in cents
    currency: "usd", // You can change this to your desired currency
  };

  return (
    <div>
      <h1 className="text-secondaryBlack text-[20px] font-merri font-normal mb-6">
        Payment
      </h1>
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-2 bg-white p-4 rounded">
          <h1 className="text-black text-[20px] font-merri font-normal mb-6">
            Pay With
          </h1>

          {/* Render the payment form only when price is valid */}
          {price > 0 ? (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm
                createdAppointment={createdAppointment}
                setCurrentStep={setCurrentStep}
                setIsPaid={setIsPaid}
              />
            </Elements>
          ) : (
            <div>Error: Unable to load payment details. Please try again later.</div>
          )}
        </div>
        <div className="col-span-3 bg-transparent">
          {/* Your consultation summary goes here */}
        </div>
      </div>
    </div>
  );
}

export default CompletePage;
