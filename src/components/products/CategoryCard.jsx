

import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'


export function CategoryCard({ title, image, href }) {
  return (
    <Link href={href} className="block h-full">
      <Card 
        className="h-full overflow-hidden group border-0 rounded-lg"
        bodyStyle={{ padding: 0 }}
      >
        <div className="relative h-[85px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl font-medium">{title}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}

