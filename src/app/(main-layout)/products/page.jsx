'use client'
import { CategoryCard } from '@/components/products/CategoryCard'
import catimg from "../../../public/images/catimg.png"
import catimg2 from "../../../public/images/catimg2.png"

import { AntiFashionCard } from '@/components/util/AntiFashionCard'


import product from '../../../public/images/fashoion.png'
import product2 from '../../../public/images/fashion2.png'
import { Button, Card, Skeleton } from 'antd'
import { useGetallproductQuery } from '@/redux/features/product/productApi'
import { ProductCard } from '@/components/util/product-card'
import { useState } from 'react'

const products = [
  {
    id: 1,
    title: "Mystic Moonlight Maxi",
    price: 560.00,
    description: "Men's Denim Jacket distressed Casual Winter warm loose fit large size vintage",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.5,
    reviews: 1200,
    image: product
  },
  {
    id: 2,
    title: "Tropical Paradise Shirt",
    price: 480.00,
    description: "Men's Hawaiian Print Shirt Summer Collection loose fit breathable cotton blend",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.7,
    reviews: 890,
    image: product2
  },
  {
    id: 3,
    title: "Urban Bloom Tee",
    price: 520.00,
    description: "Men's Floral Print T-Shirt Premium Cotton casual summer wear comfort fit",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.3,
    reviews: 750,
    image: product
  },
  {
    id: 4,
    title: "Sunset Flora Shirt",
    price: 495.00,
    description: "Men's Short Sleeve Shirt tropical print vacation wear premium quality",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.6,
    reviews: 980,
    image: product2
  },
  {
    id: 5,
    title: "Island Breeze Collection",
    price: 540.00,
    description: "Men's Resort Wear Shirt botanical print summer collection premium cotton",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.4,
    reviews: 670,
    image: product
  },
  {
    id: 6,
    title: "Palm Springs Casual",
    price: 510.00,
    description: "Men's Casual Shirt tropical motif weekend wear comfortable fit",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.8,
    reviews: 1100,
    image: product2
  },
  {
    id: 7,
    title: "Coastal Breeze Shirt",
    price: 530.00,
    description: "Men's Beach Wear Shirt summer collection light fabric premium quality",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.2,
    reviews: 560,
    image: product
  },
  {
    id: 8,
    title: "Coastal Breeze Shirt",
    price: 530.00,
    description: "Men's Beach Wear Shirt summer collection light fabric premium quality",
    image: "/placeholder.svg?height=600&width=500",
    rating: 4.2,
    reviews: 560,
    image: product2
  },

];

// const categories = [
//   {
//     title: 'Anti fashion',
//     image: catimg2,
//     href: '/categories/anti-fashion'
//   },
//   {
//     title: 'Flappers fashion',
//     image: catimg2,
//     href: '/categories/flappers-fashion'
//   },
//   {
//     title: 'Gothic fashion',
//     image: catimg,
//     href: '/categories/gothic-fashion'
//   },
//   {
//     title: 'Fetish clothing',
//     image: catimg2,
//     href: '/categories/fetish-clothing'
//   },
//   {
//     title: 'Hip hop fashion',
//     image: catimg,
//     href: '/categories/hip-hop-fashion'
//   },
//   {
//     title: 'Lolita fashion',
//     image: catimg,
//     href: '/categories/lolita-fashion'
//   },
//   {
//     title: 'Punk fashion',
//     image: catimg2,
//     href: '/categories/punk-fashion'
//   },
//   {
//     title: 'Casual wear',
//     image: catimg,
//     href: '/categories/casual-wear'
//   }
// ]

export default function Page() {

    const { data, isLoading, isError } = useGetallproductQuery();
    const [visibleCount, setVisibleCount] = useState(8); // Initial number of products to display

    // Function to load more items
    const handleLoadMore = () => {
      setVisibleCount(data?.products?.data?.length || 0); // Show all items
    };
  return (
    <div className=" bg-primary text-white p-8">
      <div className="container mx-auto">
   



        <h1 className="text-4xl font-bold  text-white py-9">Enssentials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card key={index}>

                  <Skeleton active   />
                </Card>
              ))
            : data?.products?.data?.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
        {visibleCount < (data?.products?.data?.length || 0) && ( // Show the button only if there are more items
          <div className="max-w-md mx-auto py-[72px]">
            <Button
              className="w-full rounded-none"
              style={{
                backgroundColor: '#DBBC7E',
                color: '#262626',
                height: '35px',
                fontSize: '16px',
                fontWeight: '500',
              }}
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}

      </div>



    </div>
  )
}
