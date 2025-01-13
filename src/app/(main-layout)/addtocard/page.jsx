'use client';

import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/util/product-card';
import { useRouter } from 'next/navigation';
import PaymentForm from '@/components/CheckoutForm';

const Page = () => {
  const [allproducts, setAllProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Access localStorage only on the client
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setAllProducts(JSON.parse(cartItems));
    }
  }, []); // Empty dependency array ensures this runs only on the client

  return (
    <div className="bg-primary">
      <div className="container mx-auto py-20 flex items-center gap-6 justify-between">


        <div className='w-full'>
          <h3
            onClick={() => router.back()}
            className="!text-white text-4xl font-bold mb-4 flex items-center space-x-2 cursor-pointer"
          >
            <svg
              width="22"
              height="36"
              viewBox="0 0 22 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 35.5L0.5 18L18 0.5L21.1063 3.60625L6.7125 18L21.1063 32.3938L18 35.5Z"
                fill="white"
              />
            </svg>
            <span> Items in your carts</span>
          </h3>
          <p className="!text-[#888888] text-[16px] font-medium mb-8 pl-8">
            Your shopping journey continues here. Review your picks and get ready to complete your
            purchase.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {allproducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        <div className="bg-[#4545454D] p-4 rounded-lg mt-6 text-white w-1/2">


        <div>
            <PaymentForm product={allproducts} />
        </div>
        </div>


      </div>
    </div>
  );
};

export default Page;
