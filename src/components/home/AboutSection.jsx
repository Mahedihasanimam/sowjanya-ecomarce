

'use client'
import { Button } from 'antd'
import Image from 'next/image'
import aboutimg1 from '../../public/images/aboutimg.png'
import aboutimg2 from '../../public/images/abou2.png'
import aboutimg3 from '../../public/images/about3.png'
import Link from 'next/link'
import { useGetAbotUsQuery } from '@/redux/features/users/UserApi'
export default function AboutSection() {
    const {data} =useGetAbotUsQuery()
    console.log('images',data?.about[0]?.image?.[0])
    return (
        <div className=" bg-primary p-6">
            <div className="container mx-auto">
                <div className="lg:flex md:flex-row flex-col items-center justify-between lg:space-y-0 space-y-4 ">
                    {/* Text Content */}
                    <div className="space-y-6 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                          {data?.about?.[0]?.title}
                        </h1>
                        <div className="text-[#888888] space-y-4">
                           {data?.about?.[0]?.description}
                        </div>
                        <Link href="/aboutus">
                            <Button
                                className="text-[#FFFFFF] text-[16px] font-semibold  bg-secondary rounded-none px-6 mt-8"
                                size="large"
                                type="primary"

                                style={{ backgroundColor: '#DBBC7E', color: '#262626', height: '35px' }}
                            >
                                Read more

                            </Button>
                        </Link>
                    </div>

                    {/* Images */}
                    <div className="w-full max-w-2xl flex justify-center items-center gap-4">
                        <div>
                            <Image className='rounded-lg' src={data?.about[0]?.image?.[0]} alt="aboutimg" width={250} height={250} />
                        </div>
                        <div className='space-y-4'>
                            <Image  className='rounded-lg' src={data?.about[0]?.image?.[1]} alt="aboutimg" width={250} height={250} />
                            <Image className='rounded-lg' src={data?.about[0]?.image?.[2]} alt="aboutimg" width={250} height={250} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

