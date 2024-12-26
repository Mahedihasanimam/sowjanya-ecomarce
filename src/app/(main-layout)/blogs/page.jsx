
'use client'
import { BlogCard } from '@/components/util/BlogCard';
import product from '../../../public/images/blogimg.png'
import { Button, Card, Skeleton } from 'antd';
import { useGetallBlogsQuery } from '@/redux/features/blogs/blogsApi';
import { useState } from 'react';
const products = [
    {
        id: 1,
        title: "Winter Wardrobe Essentials for a Cozy Yet Chic Look",
        price: 560.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.5,
        reviews: 1200,
        image: product,
        date: 'Dec 10, 2024'
    },
    {
        id: 2,
        title: "Winter Wardrobe Essentials for a Cozy Yet Chic Look",
        price: 480.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.7,
        reviews: 890,
        image: product,
        date: 'Dec 10, 2024'
    },
    {
        id: 3,
        title: "Urban Bloom Tee",
        price: 520.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.3,
        reviews: 750,
        image: product,
        date: 'Dec 10, 2024'
    },
    {
        id: 4,
        title: "Sunset Flora Shirt",
        price: 495.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.6,
        reviews: 980,
        image: product,
        date: 'Dec 10, 2024'
    },
    {
        id: 5,
        title: "Urban Bloom Tee",
        price: 520.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.3,
        reviews: 750,
        image: product,
        date: 'Dec 10, 2024'
    },
    {
        id: 6,
        title: "Sunset Flora Shirt",
        price: 495.00,
        description: "Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.",
        rating: 4.6,
        reviews: 980,
        image: product,
        date: 'Dec 10, 2024'
    },


];
const BlogPage = () => {

    const [visibleCount, setVisibleCount] = useState(6);
    const {data,isLoading}=useGetallBlogsQuery()
    
    
    const handleLoadMore = () => {
        setVisibleCount(data?.blogs?.data?.length || 0);
    }
    return (
        <div className="bg-primary py-12  ">
            <div className="container mx-auto ">

            <div >
                <h3 className="!text-white text-4xl font-bold mb-4">
                    Latest Blogs
                </h3>
                <p className="!text-[#888888] text-[16px] font-medium mb-8">
                    Explore ideas, insights, and stories from our journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
                
        {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Card key={index}>

                  <Skeleton active   />
                </Card>
              ))
            :data?.blogs?.data?.slice(-visibleCount)?.map((product) => (
              <BlogCard
                key={product.id}
                {...product}
              />
            ))}
            </div>


            {visibleCount < (data?.blogs?.data?.length || 0) && ( // Show the button only if there are more items
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

    );
};
export default BlogPage