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
       <div className="bg-[#000000] w-full ml-[270px] text-white min-h-screen">
       {children}
       </div>
      </div>
    </div>

  );
}
