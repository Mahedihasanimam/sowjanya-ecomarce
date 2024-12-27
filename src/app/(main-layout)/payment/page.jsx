'use client'

import { Button, Rate, Typography } from 'antd'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { ProductGallery } from '@/components/util/ProductGallery'
import { ReviewCard } from '@/components/util/ReviewCard'
import product1 from '../../../public/images/fashoion.png'
import product2 from '../../../public/images/catimg2.png'
import product3 from '../../../public/images/fashion2.png'
import { useRouter } from 'next/navigation'
import avater from '../../../public/images/avater.png'
import { PaymentForm } from '@/components/PaymentForm'
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


export default function ProductPage() {
    const router = useRouter()
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

                    Payment procedure
                </p>

                <div className="">
                    <ProductGallery images={productImages} />

                </div>

                <div className='bg-[#4545454D] p-4 rounded-lg  mt-6'>
                    <div>
                        <div className="mb-8">
                    <div className='flex items-center justify-between'>
                    <Title level={1} className="!text-white !text-[28px] font-bold md:!text-4xl mb-4">
                    Colorful lather denim jacket
                            </Title>
                            <div className="text-2xl font-bold mb-4 text-secondary">$3,400.80</div>

                    </div>
                            <Paragraph className="!text-[#888888] text-[16px] font-medium">
                                Lorem ipsum dolor sit amet consectetur. Auctor amet ipsum in nisi. Diam et sed amet mauris adipiscing adipiscing in dignissim sed eu. Amet et amet consectetur. Duis viterra facilisis purus purus tempor pharetra netus.
                            </Paragraph>
                        </div>

                    </div>
     

                </div>
                <PaymentForm/>
            </div>
        </div>
    )
}


