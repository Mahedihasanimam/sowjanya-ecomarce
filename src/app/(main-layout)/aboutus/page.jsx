

import { Button } from 'antd'
import Image from 'next/image'
import aboutimg1 from '../../../public/images/aboutimg.png'
import aboutimg2 from '../../../public/images/abou2.png'
import aboutimg3 from '../../../public/images/about3.png'
import Link from 'next/link'
export default function AboutSection() {
    return (
        <div className=" bg-primary p-6">
            <div className="container mx-auto">
                <div className="lg:flex md:flex-row flex-col items-center justify-between lg:space-y-0 space-y-4 ">
                    {/* Text Content */}
                    <div className="space-y-6 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            About Us
                        </h1>
                        <div className="text-[#888888] space-y-4">
                        Ever bought a shirt, loved it, wore it once, and—bam!—you spot three other people wearing the exact same thing? Or maybe it looked great in the store, but after two washes, it turned into something your cat wouldn’t sleep on.

Yeah, we’ve been there too.

At Alder and Rhodes, we got tired of fashion that falls apart faster than your weekend plans. We wanted clothes that didn’t just look good, but felt good, lasted longer, and—most importantly—stood out. Because nothing ruins a vibe like seeing your “unique” outfit at every other table in the pub.

So, we did something about it.

We create limited collections crafted with care, precision, and premium materials. Our drops are rare, because we believe your style should be yours, not everyone else’s. Clothes that are soft, comfortable, and made to last—wash after wash, wear after wear.

Think of us as the antidote to fast fashion: timeless style, effortless elegance, and pieces that make you feel like you. Not a trend-follower. Not a number. Just someone who values quality, individuality, and a bit of exclusivity.

Because let’s face it—clothes should feel special. And you? You deserve the kind of style that people notice, ask about, and never forget.

Alder and Rhodes: Limited pieces for unlimited confidence.
                        </div>
                        {/* <Link href="/aboutus">
            <Button
                className="text-[#FFFFFF] text-[16px] font-semibold  bg-secondary rounded-none px-6 mt-8"
                size="large"
                type="primary"

                style={{backgroundColor:'#DBBC7E',color:'#262626',height:'35px'}}
              >
               Read more
          
              </Button>
            </Link> */}
                    </div>

                    {/* Images */}
                    <div className="w-full max-w-2xl flex justify-center items-center gap-4">
                    <div>
                        <Image src={aboutimg1} alt="aboutimg" width={250} height={250} />
                    </div>
                    <div className='space-y-4'>
                        <Image src={aboutimg2} alt="aboutimg" width={250} height={250} />
                        <Image src={aboutimg3} alt="aboutimg" width={250} height={250} />
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

