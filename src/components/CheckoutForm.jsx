'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Input, Button, message } from 'antd';
import { useCreatePaymentIntentMutation, usePaymentSuccessMutation } from '@/redux/features/payment/productApi';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ product }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();


  const user = useSelector((state) => state.user.user);


  const [createIntent] = useCreatePaymentIntentMutation();

  const [paymentSuccess] = usePaymentSuccessMutation();

  const onFinish = async (values) => {
    setLoading(true);

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet.');
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      console.error('CardElement not found.');
      setLoading(false);
      return;
    }

    const res = await createIntent({
      amount: 100,
      payment_method: "pm_card_visa"
    });





    //  console.log(values,product);

    if (res.data?.data?.client_secret) {
      console.log(res.data.data.client_secret)


      const clientSecret = res.data.data.client_secret;
      const paymentMethodId = res.data.data.payment_method;

      const paymentIntent = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodId,
      });


      if (paymentIntent.paymentIntent?.status === "succeeded") {

        const successData = {
          user_id: user?.id,
          product_id: product?.id,
          transaction_id: paymentIntent?.paymentIntent?.id,
          amount: product?.price,
          street_address: values?.streetAddress,
          city: values?.city,
          contact: values?.contactNumber,
          payment_method: 'card',
          payment_status  : "success"
        }

         await paymentSuccess(successData)



        message?.success("Payment successfull");


       
        setLoading(false);
        
     
      } else {
        console.error('Payment failed:', paymentIntent.error);
        setLoading(false);

        message?.error("Payment failed");
      }

    }




    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="space-y-6"
      requiredMark={false}
    >
      <div>
        <h2 className="text-xl font-semibold mb-4">Card details</h2>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#FFFFFFCC',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
          className="p-3  border border-gray-700 rounded-md"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Billing address</h2>
        <Form.Item
          name="streetAddress"
          rules={[{ required: true, message: 'Please enter your street address' }]}
        >
          <Input style={{backgroundColor:'transparent',color:'white'}} placeholder="Street address" className="h-12  border-gray-700" />
        </Form.Item>
        <Form.Item
          name="city"
          rules={[{ required: true, message: 'Please enter your city' }]}
        >
          <Input style={{backgroundColor:'transparent',color:'white'}} placeholder="City" className="h-12  border-gray-700" />
        </Form.Item>
        <Form.Item
          name="contactNumber"
          rules={[
            { required: true, message: 'Please enter your contact number' },

          ]}
        >
          <Input style={{backgroundColor:'transparent',color:'white'}} placeholder="Contact number" className="h-12  border-gray-700" />
        </Form.Item>
      </div>

      <Form.Item>
        <Button
          
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: '#D5B98C' }}
          className="w-full h-12 bg-[#D5B98C] hover:bg-[#C5A97C] text-black font-medium"
        >
          Confirm & pay
        </Button>
      </Form.Item>
    </Form>
  );
};

const PaymentForm = ({ product }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm product={product} />
  </Elements>
);

export default PaymentForm;
