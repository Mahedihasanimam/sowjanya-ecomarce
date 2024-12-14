
'use client'
import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

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
          <ShoppingCartOutlined className="text-xl" />
          <Button className="bg-yellow-500 text-black border-none hover:bg-yellow-600">
            Login
          </Button>
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
