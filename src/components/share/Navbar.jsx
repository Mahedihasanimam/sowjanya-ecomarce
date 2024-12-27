'use client';

import React, { useContext, useEffect, useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import Image from 'next/image';
import logo from '../../public/images/mainlogo.png';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetProfileQuery } from '@/redux/features/users/UserApi';
import Cookies from 'js-cookie';
import { clearUser, setUser } from '@/redux/features/users/userSlice';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Manage cart count state
  const { logoutUser } = useContext(UserContext);
  const router = useRouter();
  const dispatch = useDispatch();
  const [getProfile] = useLazyGetProfileQuery();
  const addedToken = Cookies.get('token');

  const handlesetUser = async () => {
    const user = await getProfile(addedToken);
    if (user?.data?.data) {
      dispatch(setUser(user?.data?.data));
    }
  };

  useEffect(() => {
    if (addedToken) {
      handlesetUser();
    }
  }, [addedToken]);

  useEffect(() => {
    // Update cart count on the client side
    const allProducts = typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    setCartCount(allProducts.length || 0);
  }, []);

  const handleLogout = () => {
    logoutUser();
    dispatch(clearUser());
    Cookies.remove('token');
    router.push('/auth/signin');
  };

  const user = useSelector((state) => state.user.user);

  const userMenuItems = (
    <Menu>
      <Link href="/myprofile">
        <Menu.Item key="profile">Profile</Menu.Item>
      </Link>
      <Menu.Item onClick={handleLogout} style={{ color: 'red' }} key="logout">
        Logout
      </Menu.Item>
    </Menu>
  );

  const menuItems = [
    { label: 'Home', key: '/' },
    { label: 'Products', key: 'products' },
    { label: 'Blogs', key: 'blogs' },
    { label: 'About us', key: 'aboutus' },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-[130px] w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={`/${item.key}`}
              className="text-white hover:text-yellow-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart and Login */}
        <div className="flex items-center space-x-4">
          <Link href="/addtocard">
            <div className="relative">
            <svg width="31" height="38" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3 18C5.66667 18 5.125 17.7708 4.675 17.3125C4.225 16.8542 4 16.3083 4 15.675V6.4L2.175 2H0V0H3.525L5.175 4H19.95C20.3333 4 20.625 4.15833 20.825 4.475C21.025 4.79167 21.0333 5.11667 20.85 5.45L18 11.025C18.85 11.1583 19.5625 11.55 20.1375 12.2C20.7125 12.85 21 13.6167 21 14.5C21 15.4667 20.6625 16.2917 19.9875 16.975C19.3125 17.6583 18.4917 18 17.525 18C16.5417 18 15.7125 17.6583 15.0375 16.975C14.3625 16.2917 14.025 15.4667 14.025 14.5C14.025 14.1667 14.0667 13.8583 14.15 13.575C14.2333 13.2917 14.35 13.0167 14.5 12.75L11.225 12.45L8.225 16.95C8.00833 17.2833 7.72917 17.5417 7.3875 17.725C7.04583 17.9083 6.68333 18 6.3 18ZM15.85 10.875L18.325 6H6L7.25 9C7.38333 9.33333 7.59583 9.6125 7.8875 9.8375C8.17917 10.0625 8.51667 10.1917 8.9 10.225L15.85 10.875ZM6.325 15.975C6.35833 15.975 6.43333 15.9333 6.55 15.85L8.975 12.25C8.15833 12.1667 7.51667 11.9708 7.05 11.6625C6.58333 11.3542 6.23333 11.0333 6 10.7V15.7C6 15.7833 6.03333 15.85 6.1 15.9C6.16667 15.95 6.24167 15.975 6.325 15.975ZM17.5 16C17.9333 16 18.2917 15.8542 18.575 15.5625C18.8583 15.2708 19 14.9167 19 14.5C19 14.0667 18.8583 13.7083 18.575 13.425C18.2917 13.1417 17.9333 13 17.5 13C17.0833 13 16.7292 13.1417 16.4375 13.425C16.1458 13.7083 16 14.0667 16 14.5C16 14.9167 16.1458 15.2708 16.4375 15.5625C16.7292 15.8542 17.0833 16 17.5 16Z" fill="white"/>
</svg>

              {cartCount > 0 && (
                <span className="absolute top-0 -right-2 w-4 h-4 bg-red-500 rounded-full text-center text-white text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {user ? (
            <Dropdown overlay={userMenuItems} trigger={['click']} placement="bottomRight">
              <Button
                className="w-fit"
                style={{
                  backgroundColor: '#DBBC7E',
                  color: '#262626',
                  fontSize: '14px',
                  fontWeight: '700',
                  height: '40px',
                }}
              >
                <Avatar size={30}>
                  <Image
                    alt="profile"
                    height={30}
                    width={30}
                    src={user?.image || '/default-profile.png'}
                  />
                </Avatar>{' '}
                {user?.name}
              </Button>
            </Dropdown>
          ) : (
            <Link href="/auth/signin">
              <Button
                style={{ backgroundColor: '#DBBC7E', color: '#262626', height: '40px' }}
                className="bg-secondary text-primary border-none text-[16px] font-bold"
              >
                Login
              </Button>
            </Link>
          )}
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
            <Link
              key={item.key}
              href={`/${item.key}`}
              className="block py-2 text-white hover:text-yellow-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
