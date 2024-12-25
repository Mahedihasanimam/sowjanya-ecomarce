'use client'
import productimg from '../../public/images/productimg.png'
import { Card, Rate } from 'antd'
import Image from 'next/image'

import Link from 'next/link'



export function ProductCard({ title, price, description, image, rating, reviews, id }) {
  return (
    <Link href={`/products/${id}`}>

      <Card
        className="w-full  p-2 overflow-hidden bg-[#4545454D] border-none rounded-lg hover:shadow-xl transition-shadow "
        bodyStyle={{ padding: "0" }}
      >
        <div className="  w-full">
          <Image
          preview={false}
            src={image?.[1] || productimg }
            alt={title}
          
            height={200}
            width={100}
            className="object-cover w-full h-[250px] rounded-lg"
            priority
          />
        </div>
        <div className="p-4 text-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[16px] font-bold">{title}</h3>
            <span className="text-[16px] font-semibold text-secondary">
              ${price}
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
              {rating} ( Reviews)
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

