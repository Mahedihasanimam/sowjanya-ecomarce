'use client'

import { Card, Rate } from 'antd'
import Image from 'next/image'



export function ProductCard({ title, price, description, image, rating, reviews }) {
  return (
    <Card 
      className="w-full  p-2 overflow-hidden bg-[#4545454D] border-none rounded-lg hover:shadow-xl transition-shadow"
      bodyStyle={{ padding: "0"}}
    >
      <div className="  w-full">
        <Image
          src={image}
          alt={title}
        

 
          className="object-cover w-full"
          priority
        />
      </div>
      <div className="p-4 text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[16px] font-bold">{title}</h3>
          <span className="text-[16px] font-semibold text-secondary">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-[#D1D1D1] font-medium text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm text-[#D1D1D1]">
          <Rate 
            disabled 
            defaultValue={rating} 
            allowHalf 
            className="text-sm text-[#D4AF37]"
          />
          <span className="text-[#D1D1D1] text-sm">
            {rating} ({reviews.toLocaleString()} Reviews)
          </span>
        </div>
      </div>
    </Card>
  )
}

