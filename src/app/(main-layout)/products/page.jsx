'use client'
import { Button, Card, Skeleton } from 'antd'
import { useGetallproductQuery } from '@/redux/features/product/productApi'
import { ProductCard } from '@/components/util/product-card'
import { useState } from 'react'



export default function Page() {

    const { data, isLoading, isError } = useGetallproductQuery();
    const [visibleCount, setVisibleCount] = useState(8); 
    // Function to load more items
    console.log('data', data)
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
