
'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import blogimg from '../../../../public/images/blogimg.png'

const Page = () => {

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
                    <Image className='w-full h-[600px]' src={blogimg}/>

                  <div className='space-y-2 pt-6'>
                    <h3 className='text-white text-[16px] font-bold'>Winter Wardrobe Essentials for a Cozy Yet Chic Look</h3>
                    <p className='text-sm font-medim text-[#888888]'>Dec 10, 2024</p>
                    <p className='text-sm text-[#D1D1D1] pt-4'>
                        Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly. Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.Dive into the latest fashion trends taking the world by storm. From bold colors to retro-inspired pieces, discover how to incorporate these must-haves into your wardrobe effortlessly.
                    </p>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Page;