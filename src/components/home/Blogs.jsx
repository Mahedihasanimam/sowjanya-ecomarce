
'use client'
import { useGetallBlogsQuery } from '@/redux/features/blogs/blogsApi';
import product from '../../public/images/blogimg.png'
import { BlogCard } from '../util/BlogCard';
import { Card, Skeleton } from 'antd';



const products = [
    {
      id: 1,
      title: "Winter Wardrobe Essentials for a Cozy Yet Chic Look",
      price: 560.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.5,
      reviews: 1200,
      image: product,
      date:'Dec 10, 2024'
    },
    {
      id: 2,
      title: "Winter Wardrobe Essentials for a Cozy Yet Chic Look",
      price: 480.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.7,
      reviews: 890,
      image: product,
         date:'Dec 10, 2024'
    },
    {
      id: 3,
      title: "Urban Bloom Tee",
      price: 520.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.3,
      reviews: 750,
      image: product,
      date:'Dec 10, 2024'
    },
    {
      id: 4,
      title: "Sunset Flora Shirt",
      price: 495.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.6,
      reviews: 980,
      image: product,
      date:'Dec 10, 2024'
    },
    {
      id: 5,
      title: "Island Breeze Collection",
      price: 540.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.4,
      reviews: 670,
      image: product,
      date:'Dec 10, 2024',
    },
    {
      id: 6,
      title: "Palm Springs Casual",
      price: 510.00,
      description:"Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
      rating: 4.8,
      reviews: 1100,
      image: product,
      date:'Dec 10, 2024',
    },
    
  ];
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
            :data?.blogs?.data?.slice(-8)?.map((product) => (
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

