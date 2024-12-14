
import React from "react";
// import logo from "/public/images/logo.png";
import logo from '../../public/images/logo.png'




import Image from "next/image";
import {
  PhoneOutlined,
  MailFilled,
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
                  Street name, Area address <br /> goes here
                </h4>
              </div>
              <div className="text-[#000000CC] text-[16px] font-normal space-y-2 pt-2">
                <div>
                  <PhoneOutlined className="rotate-90 text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC]">+(00)-000-000-0000</span>
                </div>
                <div className="pl-2">
                  <MailFilled className=" text-[16px] text-[#000000] pr-2" />
                  <span className="text-[#000000CC] ">infoname@mail.com</span>
                </div>
              </div>

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
                  Programs
                </h3>
                <div className="   gap-6">
                  <ul className="space-y-[12px] text-[#000000CC] font-medium text-sm">
                    <li>
                      <Link rel="noopener noreferrer" href="/browsemore">
                        Book your  Home
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/browsemore">
                        Estimate  your  Property
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/auth/GuestLogin">
                        Guest  Login
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" href="/auth/OwnarLogin">
                        Owner  Login
                      </Link>
                    </li>

                  </ul>

                </div>
              </div>
              {/* MENU ITEM TWO  */}
              <div className="space-y-3 pl-12">
                <h3 className="   font-bold text-[16px] pb-3 font-Merriweather">
                  Help & Support
                </h3>
                <ul className="space-y-[12px] text-[#000000CC] text-sm">
                  <li>
                    <Link rel="noopener noreferrer" href="/FAQ">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/contactus">
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link rel="noopener noreferrer" href="/TermsAndConditions ">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" href="/RoomBookingHelp">
                      Room booking help
                    </Link>
                  </li>
                </ul>
              </div>
              {/* SOCIAL MEDIA MENU ITEM   */}
              <div className="space-y-3">
                <h3 className="   font-bold text-[16px] pb-3 font-Merriweather">
                  Social Media
                </h3>
                <div className="flex space-x-6">
                  <Link href="https://facebook.com" target="_blank" >

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
                    </svg>


                  </Link>
                  <Link href={'https://google.com'} target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
                    </svg>


                  </Link>
                  <Link href={'https://youtube.com'} target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_7_4310)">
                        <path d="M23.5216 6.18541C23.3859 5.67482 23.1185 5.20883 22.7462 4.83407C22.3738 4.4593 21.9095 4.18891 21.3998 4.04996C19.5234 3.54541 12.0234 3.54541 12.0234 3.54541C12.0234 3.54541 4.52344 3.54541 2.64707 4.04996C2.13737 4.18891 1.6731 4.4593 1.30073 4.83407C0.928354 5.20883 0.660943 5.67482 0.525256 6.18541C0.0234376 8.06996 0.0234375 12 0.0234375 12C0.0234375 12 0.0234376 15.93 0.525256 17.8145C0.660943 18.3251 0.928354 18.7911 1.30073 19.1658C1.6731 19.5406 2.13737 19.811 2.64707 19.95C4.52344 20.4545 12.0234 20.4545 12.0234 20.4545C12.0234 20.4545 19.5234 20.4545 21.3998 19.95C21.9095 19.811 22.3738 19.5406 22.7462 19.1658C23.1185 18.7911 23.3859 18.3251 23.5216 17.8145C24.0234 15.93 24.0234 12 24.0234 12C24.0234 12 24.0234 8.06996 23.5216 6.18541Z" fill="#FF0302" />
                        <path d="M9.56934 15.5689V8.43164L15.8421 12.0003L9.56934 15.5689Z" fill="#FEFEFE" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_4310">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </Link>

                </div>

              </div>
            </div>
          </div>
          {/* copyright  */}
          <div className="flex justify-center  border-t-2 border-[#475467] py-4">
            <p className="text-sm text-[#000000CC]">
              © appartali  2024 | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
