

import { Avatar, Rate } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Image from 'next/image'


export function ReviewCard({ author, rating, content, image }) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-[#4545454D]">
      <Avatar icon={
        <Image alt='revimg' src={image} />
      } />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center justify-between gap-2 mb-6 w-full">
            <h4 level={2} className="!text-white !text-[16px] !mb-0">
             {author}
            </h4>
            <div>
              <Rate count={1} disabled defaultValue={rating} className="text-sm" />
              <span className="text-white text-sm">{rating}</span>
            </div>
          </div>


        </div>
        <p className="text-gray-300 text-sm">{content}</p>
      </div>
    </div>
  )
}

