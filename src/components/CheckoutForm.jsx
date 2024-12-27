import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import Swal from "sweetalert2"; // for showing success messages
import { message } from "antd";

const CheckoutForm = ({ createdAppointment, setCurrentStep, setIsPaid }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    // Get the PaymentElement component and confirm payment
    const paymentElement = elements.getElement(PaymentElement);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success`, // callback URL for success
      },
    });

    if (error) {
      // Display error message if payment failed
      setErrorMessage(error.message);
    } else if (paymentIntent.status === "succeeded") {
      // Payment successful
      setIsPaid(true);
      setCurrentStep("payment-complete");
      message.success("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <div>{errorMessage}</div>}
      <button
        type="submit"
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
