'use client'
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeWrapper() {
  const [clientSecret, setClientSecret] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    // Check the URL for query parameters (e.g., for payment confirmation)
    const query = new URLSearchParams(window.location.search);
    const paymentStatus = query.get("status");  // Use 'status' or the correct query parameter you expect
    setConfirmed(paymentStatus === "succeeded");  // Adjust this according to your needs
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://192.168.12.79:8000/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),  // Modify as per your data structure
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {/* Always render CheckoutForm within the Elements provider */}
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
