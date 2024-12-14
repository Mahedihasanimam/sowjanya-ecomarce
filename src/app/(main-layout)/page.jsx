import Blogs from '@/components/home/Blogs';
import CuratedExclusive from '@/components/home/CuratedExclusive';
import HeroSection from '@/components/home/HeroSection';
import React from 'react';

const page = () => {
    return (
        <div>
           <HeroSection/>
           <CuratedExclusive/>
           <Blogs/>
        </div>
    );
};

export default page;