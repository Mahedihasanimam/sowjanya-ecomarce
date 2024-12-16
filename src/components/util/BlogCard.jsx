'use client'

import { Card, Rate } from 'antd'
import Image from 'next/image'
import Link from 'next/link'



export function BlogCard({ title, price, description, image, rating, reviews,id }) {
  return (
    <Link href={`/blogs/${id}`}>
    
    <Card 
      className="w-full  p-2 overflow-hidden bg-[#4545454D] border-none rounded-lg hover:shadow-xl transition-shadow "
      bodyStyle={{ padding: "0" }}
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
          <div>
          <h3 className="text-[16px] font-bold">{title}</h3>
           <p className='text-sm text-[#888888] font-normal'>Dec 10, 2024</p>
          </div>
          <span className="text-[16px] font-semibold text-secondary">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM3.8 19C3.8 27.3947 10.6053 34.2 19 34.2C27.3947 34.2 34.2 27.3947 34.2 19C34.2 10.6053 27.3947 3.8 19 3.8C10.6053 3.8 3.8 10.6053 3.8 19Z" fill="#DBBC7E"/>
<mask id="mask0_67_269"  maskUnits="userSpaceOnUse" x="7" y="7" width="24" height="24">
<rect x="7" y="7" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_67_269)">
<path d="M13.4 25L12 23.6L21.6 14H13V12H25V24H23V15.4L13.4 25Z" fill="#DBBC7E"/>
</g>
</svg>

          </span>
        </div>
        <div>
      <div>
    
      <p className="text-[#D1D1D1] font-medium text-sm mb-3 line-clamp-2">

          {description}
        </p>
      </div>
      
        </div>
        
      </div>
    </Card>
    </Link>
  )
}

