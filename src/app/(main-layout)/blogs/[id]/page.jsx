
'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import blogimg from '../../../../public/images/blogimg.png'
import { useGetsingleBlogbyIdQuery } from '@/redux/features/blogs/blogsApi';

const Page = ({params}) => {

const {data}=useGetsingleBlogbyIdQuery(params?.id)
console.log('bolgs details',data)
    const router=useRouter()
    return (
        <div className='bg-primary py-12'>

            <div className="container mx-auto">
                <p
                    onClick={() => router.back()}
                    className="inline-flex items-center text-white mb-2 hover:text-gray-300 cursor-pointer text-4xl pb-6"
                >
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_73_346" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
                            <rect width="42" height="42" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_73_346)">
                            <path d="M28 38.5L10.5 21L28 3.5L31.1063 6.60625L16.7125 21L31.1063 35.3938L28 38.5Z" fill="white" />
                        </g>
                    </svg>

                    Back
                </p>
                <div>
                    <Image height={2000} width={200} className='w-full h-[600px] rounded-lg' src={data?.data?.image}/>

                  <div className='space-y-2 pt-6'>
                    <h3 className='text-white text-[16px] font-bold'>{data?.data?.title}</h3>
                    <p className='text-sm font-medim text-[#888888]'>Dec 10, 2024</p>
                    <p className='text-sm text-[#D1D1D1] pt-4'>
                        {data?.data?.description}
                    </p>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Page;