
'use client'
import { useGetallBlogsQuery } from '@/redux/features/blogs/blogsApi';
import product from '../../public/images/blogimg.png'
import { BlogCard } from '../util/BlogCard';
import { Card, Skeleton } from 'antd';



export default function Blogs() {

  const {data,isLoading}=useGetallBlogsQuery()
  console.log('blog data',data?.blogs?.data)
  return (
    <div className=" bg-primary">
      <div className="container mx-auto p-4">

        <h1 className="text-4xl font-bold  text-white mb-10">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">


        {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card key={index}>

                  <Skeleton active   />
                </Card>
              ))
            :data?.blogs?.data?.slice(-6)?.map((product) => (
              <BlogCard
                key={product.id}
                {...product}
              />
            ))}
    
        </div>
      </div>
    </div>
  )
}

