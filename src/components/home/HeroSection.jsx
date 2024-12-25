
import Image from "next/image";
import React from "react";
import heroimg from "../../public/images/heroimg.png";

import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
const HeroSection = () => {


  return (
    <div className="bg-primary  min-h-[430px]">
      <section className="">
        <div 
        
          className="container flex flex-col justify-center mx-auto   lg:flex-row lg:justify-between  ">
            {/* LEFT HERO SECTION */}
          <div className="flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left ">
         
            <div className="lg:text-[60px] text-4xl font-semibold  leading-none sm:text-6xl text-[#F6F6F6] font-Merriweather">
           <h1 className="leading-[70px]"> Discover The Art Of Exclusivity At</h1>
            <h1 className="text-secondary leading-[70px] ">ALDER AND RHODES</h1>
            </div>
            <p className="mt-10 mb-8 text-[16px] font-normal sm:mb-12 text-[#888888]  max-w-xl  ">
            Each collection is crafted with precision and purpose, blending modern elegance with lasting quality. Limited to only the most discerning, our drops are designed to make a statement - because style this exclusive doesn’t wait. Shop now before it’s gone.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/products">
            <Button
                className="text-[#FFFFFF] text-[16px] font-semibold  bg-secondary rounded-none px-6"
                size="large"
                type="primary"

                style={{backgroundColor:'#DBBC7E',color:'#262626',height:'35px'}}
              >
               Browse products
          
              </Button>
            </Link>
            </div>
          </div>
          
          {/* RIGHT HERO SECTION */}
          <div  className="w-fit bg-no-repeat bg-contain bg-bottom   flex items-center justify-center ">
            <div  >
            <Image  src={heroimg} alt="heroimg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
