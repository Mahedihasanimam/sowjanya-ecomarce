'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Input, Button } from 'antd';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CheckoutForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

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

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.error('[Stripe Error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      console.log('Form Values:', values);
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
          className="p-3 bg-transparent border border-gray-700 rounded-md"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-white">Billing address</h2>
        <Form.Item
          name="streetAddress"
          rules={[{ required: true, message: 'Please enter your street address' }]}
        >
          <Input style={{backgroundColor:'#242424',color:'white'}} placeholder="Street address" className="h-12 bg-transparent border-gray-700" />
        </Form.Item>
        <Form.Item
          name="city"
          rules={[{ required: true, message: 'Please enter your city' }]}
        >
          <Input style={{backgroundColor:'#242424',color:'white'}} placeholder="City" className="h-12 bg-transparent border-gray-700" />
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

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
