
import React from "react";
// import logo from "/public/images/logo.png";
import logo from '../../public/images/logo.png'




import Image from "next/image";
import {
  PhoneOutlined,
  MailFilled,
  InstagramFilled,
  PinterestFilled,
} from "@ant-design/icons";
import Link from "next/link"


const Footer = () => {

  return (
    <div>
      <footer className=" px-4 divide-y bg-[#FFFFFF] text-[#000000CC] relative z-50">
        <div className=" container mx-auto">
          <div className=" flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            {/* left side menu  */}
            <div className="lg:w-1/3  text-sm font-normal space-y-4">
              <div
                rel="noopener noreferrer"
                href="#"
                className="flex justify-start  pl-2 lg:justify-start pb-4"
              >
                <Image src={logo} alt="Pantagonostis" />
              </div>
              <div className="max-w-[120px] text-[16px] pl-2 ">
                <h4 className="">
                Brand Identity
                </h4>
              </div>
              <div>
                <ul className="list-item-none text-[#000000CC] font-medium text-sm">
                  <li>Alder and Rhodes</li>
                  <li>Timeless Style | Limited Collections</li>
                  <li>Crafted for the unique, made to last.</li>
                </ul>
              </div>
              {/* <div className="text-[#000000CC] text-[16px] font-normal space-y-2 pt-2">
                <div>
                  <PhoneOutlined className="rotate-90 text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC]">+(00)-000-000-0000</span>
                </div>
                <div className="pl-2">
                  <MailFilled className=" text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC] ">infoname@mail.com</span>
                </div>
              </div> */}

              {/* <Button
                className=" hover:text-white bg-[#000000] hover:bg-[#000000] border-[1px]  border-[#E4E7EC] text-[16px] font-semibold p-6"
                size="large"
                type="primary"
              >
                English <GlobalOutlined />
              </Button> */}
            </div>
            {/* right side menu items  */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  text-sm gap-x-3 gap-y-8 lg:w-2/3 w-full">
              {/* MENU ITEM ONE  */}
              <div className="space-y-3 text-start">
                <h3 className="   font-bold text-[16px] pb-3 font-Merriweather">
                  Quick Links
                </h3>
                <div className="   gap-6">
                  <ul className="space-y-[12px] text-[#000000CC] font-medium text-sm">
                    <li>
                      <Link rel="noopener noreferrer" href="/aboutus">
                       About Us
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/browsemore">
                       Shop Collections
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/FAQ">
                       FAQs
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/auth/OwnarLogin">
                       Shipping & Returns
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/auth/OwnarLogin">
                       Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/auth/OwnarLogin">
                       Privacy Policy
                      </Link>
                    </li>

                  </ul>

                </div>
              </div>
              {/* MENU ITEM TWO  */}
              <div className="space-y-3 pl-12">
                <h3 className="   font-bold text-[16px] pb-3 font-Merriweather">
                Customer Support
                </h3>
                <ul className="space-y-[12px] text-[#000000CC] text-sm">
                  <li>
                    <Link rel="noopener noreferrer" href="/contactus">
                     Contact Us
                    </Link>
                  </li>
                  <li>
                               <div className="text-[#000000CC] text-[16px] font-normal space-y-2 pt-2">
                <div className="pl-2">
                  <MailFilled className=" text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC] ">support@alderandrhodes.com</span>
                </div>
                <div>
                  <PhoneOutlined className="rotate-90 text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC]"> +44 (0) 1234 567890</span>
                </div>
              </div>
                  </li>

                  <li>
                    <p  >
                    Stay Updated
Sign up for exclusive updates on new drops and limited collections.
Join Our Mailing List
                    </p>
                  </li>
 
                </ul>
              </div>
              {/* SOCIAL MEDIA MENU ITEM   */}
              <div className="space-y-3">
                <h3 className="   font-bold text-[16px] pb-3 font-Merriweather">
                Follow us for the latest updates:
                </h3>
                <div className="flex space-x-6">
                  <Link href="https://www.instagram.com" target="_blank" >

                    <InstagramFilled className="text-[25px]"/>


                  </Link>
                  <Link href={'https://google.com'} target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
                    </svg>


                  </Link>
                  <Link href={'https://www.instagram.com'} target="_blank">
                  <PinterestFilled className="text-[25px]"/>

                  </Link>

                </div>

              </div>
            </div>
          </div>
          {/* copyright  */}
          <div className="flex justify-center  border-t-2 border-[#475467] py-4">
            <p className="text-sm text-[#000000CC]">
            © 2024 Alder and Rhodes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
