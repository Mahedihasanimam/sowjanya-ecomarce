
'use client'
import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', key: 'home' },
    { label: 'Products', key: 'products' },
    { label: 'Blogs', key: 'blogs' },
    { label: 'About us', key: 'about-us' },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-white hover:text-yellow-500 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Cart and Login (Visible on all screens) */}
        <div className="flex items-center space-x-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2_3663"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_3663)">
              <path d="M7.3 21C6.66667 21 6.125 20.7708 5.675 20.3125C5.225 19.8542 5 19.3083 5 18.675V9.4L3.175 5H1V3H4.525L6.175 7H20.95C21.3333 7 21.625 7.15833 21.825 7.475C22.025 7.79167 22.0333 8.11667 21.85 8.45L19 14.025C19.85 14.1583 20.5625 14.55 21.1375 15.2C21.7125 15.85 22 16.6167 22 17.5C22 18.4667 21.6625 19.2917 20.9875 19.975C20.3125 20.6583 19.4917 21 18.525 21C17.5417 21 16.7125 20.6583 16.0375 19.975C15.3625 19.2917 15.025 18.4667 15.025 17.5C15.025 17.1667 15.0667 16.8583 15.15 16.575C15.2333 16.2917 15.35 16.0167 15.5 15.75L12.225 15.45L9.225 19.95C9.00833 20.2833 8.72917 20.5417 8.3875 20.725C8.04583 20.9083 7.68333 21 7.3 21ZM16.85 13.875L19.325 9H7L8.25 12C8.38333 12.3333 8.59583 12.6125 8.8875 12.8375C9.17917 13.0625 9.51667 13.1917 9.9 13.225L16.85 13.875ZM7.325 18.975C7.35833 18.975 7.43333 18.9333 7.55 18.85L9.975 15.25C9.15833 15.1667 8.51667 14.9708 8.05 14.6625C7.58333 14.3542 7.23333 14.0333 7 13.7V18.7C7 18.7833 7.03333 18.85 7.1 18.9C7.16667 18.95 7.24167 18.975 7.325 18.975ZM18.5 19C18.9333 19 19.2917 18.8542 19.575 18.5625C19.8583 18.2708 20 17.9167 20 17.5C20 17.0667 19.8583 16.7083 19.575 16.425C19.2917 16.1417 18.9333 16 18.5 16C18.0833 16 17.7292 16.1417 17.4375 16.425C17.1458 16.7083 17 17.0667 17 17.5C17 17.9167 17.1458 18.2708 17.4375 18.5625C17.7292 18.8542 18.0833 19 18.5 19Z" fill="white" />
            </g>
          </svg>

        <Link href={'/auth/signin'}>
        
        <Button style={{ backgroundColor: '#DBBC7E', color: '#262626' }} className="bg-secondary text-primary border-none text-[16px] font-bold">
            Login
          </Button>
        </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isMobileMenuOpen ? (
            <CloseOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : (
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black text-white px-6 py-4">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="block py-2 text-white hover:text-yellow-500 transition"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
