"use client";

import { Skeleton, Card } from "antd";
import { ProductCard } from "../util/product-card";
import { useGetallproductQuery } from "@/redux/features/product/productApi";

export default function CuratedExclusive() {
  const { data, isLoading, isError } = useGetallproductQuery();
console.log( data?.products?.data)
  return (
    <div className="bg-primary">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-10">Curated Exclusive</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card key={index}>

                  <Skeleton active   />
                </Card>
              ))
            : data?.products?.data?.slice(-8).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
}
