// File: /pages/product/[id].js
'use client';

import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useGetSingleproductByidQuery } from '@/redux/features/product/productApi';
import { ProductGallery } from '@/components/util/ProductGallery';
import StripeWrapper from '@/components/StripeWrapper';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Step4 from '@/components/CompletePage';
import CheckoutForm from '@/components/CheckoutForm';
import { PaymentForm } from '@/components/PaymentForm';


const { Title, Paragraph } = Typography;

export default function ProductPage({ params }) {
  const router = useRouter();
  const { data, isLoading, isError } = useGetSingleproductByidQuery(params?.id);
  // const stripePromise = loadStripe("pk_test_51Q51euIE7z8j8FQDRAixwTBcDJS0zyz8wjvgZVn64nZKzjxyVSdzEPIccMiD3hND02GAHRU8y2eB92YO1tcL1PQk00M6ydxlfZ");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.product) {
    return <div>Error fetching product details!</div>;
  }


  // console.log(data?.product);

  return (
    <div className="bg-primary text-white mb-[88px]">
      <div className="container mx-auto p-4 md:p-8">
        <p
          onClick={() => router.back()}
          className="inline-flex items-center text-white mb-2 hover:text-gray-300 cursor-pointer text-4xl"
        >
          Back to product list
        </p>

        <ProductGallery images={data?.product?.image} />

        <div className="bg-[#4545454D] p-4 rounded-lg mt-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <Title level={1} className="!text-white !text-[28px] font-bold md:!text-4xl mb-4">
                {data?.product?.title}
              </Title>
              <div className="text-2xl font-bold mb-4 text-secondary">${data?.product?.price}</div>
            </div>
            <Paragraph className="!text-[#888888] text-[16px] font-medium">
              {data?.product?.description}
            </Paragraph>
          </div>
        </div>

        {/* <Elements stripe={stripePromise}>
          <Step4 />
        </Elements> */}

        {/* <PaymentForm/> */}
        <CheckoutForm product={data?.product}/>


     
      </div>
    </div>
  );
}
