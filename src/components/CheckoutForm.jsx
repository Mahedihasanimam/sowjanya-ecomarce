'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Form, Input, Button, message } from 'antd';
import { useCreatePaymentIntentMutation, usePaymentSuccessMutation } from '@/redux/features/payment/productApi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ clientSecret, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [paymentSuccess] = usePaymentSuccessMutation();
  const [paymentRequest, setPaymentRequest] = useState(null);

  const onFinish = async (values) => {
    if (!stripe || !elements) {
      message.error('Stripe is not yet loaded.');
      return;
    }

    setLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin, 
        },
        redirect: "if_required",
      });

      if (error) {
        message.error(error.message);
        setLoading(false);
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        const successData = {
          user_id: user?.id,
          transaction_id: paymentIntent?.id,
          amount: totalPrice,
          payment_method: 'card',
          payment_status: "success",
        };

        await paymentSuccess(successData);
        message.success("Payment successful");

        Swal.fire({
          icon: "success",
          title: "Payment successful",
          text: `Transaction ID: ${paymentIntent.id} | Amount: ${totalPrice}`,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/myprofile";
        });
      }
    } catch (error) {
      message.error("Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Total Payment",
          amount: totalPrice * 100, 
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
  
      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);
  return (
    <Form style={{ width: '100%',backgroundColor: '#D5B98C ',padding: '20px', }} form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
      <h2 className="text-xl font-semibold mb-4 text-white">Card details</h2>
      {paymentRequest && (
      <PaymentRequestButtonElement options={{ paymentRequest }} />
    )}
      {clientSecret && <PaymentElement />}
      <Form.Item>
        <Button
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: 'black',color: 'white'}}
          className="w-full h-12 bg-black hover:bg-[#C5A97C] text-black font-medium mt-4 border-none"
        >
          Confirm & Pay ${totalPrice}
        </Button>
      </Form.Item>

 
    </Form>
  );
};

const PaymentPage = ({ product }) => {
  const products = Array.isArray(product) ? product : product ? [product] : [];
  const [clientSecret, setClientSecret] = useState('');
  const [createIntent] = useCreatePaymentIntentMutation();

  const totalPrice = products.reduce((total, item) => total + (parseFloat(item?.price) || 0), 0);

  useEffect(() => {
    if (totalPrice > 0) {
      const fetchClientSecret = async () => {
        try {
          const res = await createIntent({ amount: totalPrice * 100, payment_method: "pm_card_visa" });
          if (res?.data?.data?.client_secret) {
            setClientSecret(res.data.data.client_secret);
          }
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      };

      fetchClientSecret();
    }
  }, [totalPrice, createIntent]);

  const options = { clientSecret };




  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div>
      {clientSecret ? (
          <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} totalPrice={totalPrice} />
        </Elements>

        <div>

          {
            products?.length > 1 && <div className="mt-4 bg-[#4545454D] p-4 rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <p>Quantity : </p>
          <p>
            {products?.length > 1 ? cartItems.length : 1}x
          </p>

        </div>
        <div className="flex items-center justify-between">
          <p>Sub Total : </p>
          <p>${totalPrice}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p> Total Price : </p>
          <p>${totalPrice}</p>
        </div>
      </div>
          }
        </div>

        </div>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

export default PaymentPage;
