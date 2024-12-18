import MainHeader from "@/components/dashboard/MainHeader";
import Sidebar from "@/components/dashboard/Sidebar";


export default function RootLayout({ children }) {
  return (

    <div className="">
     <MainHeader/>

      <div className="flex items-center justify-start">

        <Sidebar/>
        {children}
      </div>
    </div>

  );
}
