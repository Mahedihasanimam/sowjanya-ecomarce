'use client'

import MainHeader from "@/components/dashboard/MainHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";


export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <div className="">
     <MainHeader setCollapsed={setCollapsed} collapsed={collapsed}/>

      <div className="flex items-center justify-start bg-[#000000]">

        <Sidebar collapsed={collapsed}/>
       <div className={`${collapsed?'ml-[70px]':'ml-[270px]'} bg-[#000000] w-full  text-white min-h-screen `}>
       {children}
       </div>
      </div>
    </div>

  );
}
