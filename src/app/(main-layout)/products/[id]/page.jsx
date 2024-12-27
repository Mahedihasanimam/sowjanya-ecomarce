'use client'

import { Button, Rate, Typography } from 'antd'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { ProductGallery } from '@/components/util/ProductGallery'
import { ReviewCard } from '@/components/util/ReviewCard'
import product1 from '../../../../public/images/fashoion.png'
import product2 from '../../../../public/images/catimg2.png'
import product3 from '../../../../public/images/fashion2.png'
import { useRouter } from 'next/navigation'
import avater from '../../../../public/images/avater.png'
import { useGetreviewByproductidQuery, useGetSingleproductByidQuery } from '@/redux/features/product/productApi'
const { Title, Paragraph } = Typography

const productImages = [
    {
        src: product1,
        alt: 'Denim jacket back view with patches'
    },
    {
        src: product2,
        alt: 'Denim jacket collar detail'
    },

    {
        src: product1,
        alt: 'Denim jacket front view'
    }
]

const reviews = [
    {
        id:'1',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    {
        id:'2',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    {
        id:'3',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    {
        id:'4',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    {
        id:'5',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    {
        id:'6',
        author: 'Chris Sayle',
        rating: 4.5,
        content: 'Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.',
        date: '2 days ago',
        image:avater
    },
    // Add more reviews as needed...
]
export default function ProductPage({params}) {
    const {data,isLoading,isError}=useGetSingleproductByidQuery(params?.id)
    console.log('params id ',params?.id)
    console.log('data',data)
    const router = useRouter()

    const {data:reviewdata,isLoading:reviewisLoading,isError:reviewisError}=useGetreviewByproductidQuery(params?.id)

    if(isLoading || reviewisLoading){
        return <div>Loading...</div>
    }
    console.log('reviewdata',reviewdata)



    return (
        <div className="bg-primary text-white mb-[88px]">
            <div className="container mx-auto p-4 md:p-8">
                <p
                    onClick={() => router.back()}
                    className="inline-flex items-center text-white mb-2 hover:text-gray-300 cursor-pointer text-4xl"
                >
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_73_346" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
                            <rect width="42" height="42" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_73_346)">
                            <path d="M28 38.5L10.5 21L28 3.5L31.1063 6.60625L16.7125 21L31.1063 35.3938L28 38.5Z" fill="white" />
                        </g>
                    </svg>

                    Anti fashion
                </p>

                <div className="">
                    <ProductGallery images={ data?.product?.image} /> 

                </div>

                <div className='bg-[#4545454D] p-4 rounded-lg  mt-6'>
                    <div>
                        <div className="mb-8">
                    <div className='flex items-center justify-between'>
                    <Title level={1} className="!text-white !text-[28px] font-bold md:!text-4xl mb-4">
                               {data?.product?.title}
                            </Title>
                            <div className="text-2xl font-bold mb-4 text-secondary">$  {data?.product?.price}</div>

                    </div>
                            <Paragraph className="!text-[#888888] text-[16px] font-medium">
                            {data?.product?.description}
                            </Paragraph>
                        </div>

                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button onClick={()=>router.push('/payment')} className='w-full    rounded-none' style={{backgroundColor:'#DBBC7E',color:"#262626",height:'35px',fontSize:'20px',fontWeight:'700'}}>Buy now</Button>
                    <Button  className='w-full  border-1 border-secondary  ' style={{backgroundColor:'#4545454D',color:"white",height:'35px',fontSize:'20px',fontWeight:'700'}}> Add to cart</Button>

                    </div>

                </div>

                <div className="mt-12 bg-[#4545454D] p-4">
                    <div className="flex items-center justify-between gap-2 mb-6">
                        <Title level={2} className="!text-white !text-[28px] !mb-0">
                            Review & ratings
                        </Title>
                        <div>
                        <Rate count={1} disabled defaultValue={4.5} className="text-xl" />
                        <span className="text-white text-xl">4.5</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {reviewdata?.reviews?.data?.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

