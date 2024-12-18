'use client';

import { useEffect, useState } from 'react';
import { Button, Layout, theme } from 'antd';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from "../../public/images/logo.png";
const { Header } = Layout;

const MainHeader = ({ setCollapsed, collapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pathname = usePathname();
  const [greeting, setGreeting] = useState('Hello, Ali 👋🏼');

  useEffect(() => {
    // Set the greeting based on the current route
    switch (pathname) {
      case '/':
        setGreeting('Hello, Ali 👋🏼');
        break;
      case '/notification':
        setGreeting('Check your Notifications 🔔');
        break;
      case '/profile':
        setGreeting('Your Profile Page 👤');
        break;
      case '/settings':
        setGreeting('Settings');
        break;
      case '/editcontent':
        setGreeting('Edit Content');
        break;
      default:
        setGreeting('Hello, Ali 👋🏼');
    }

    // Optionally set the document title based on the route
    switch (pathname) {
      case '/':
        document.title = 'Hello, Ali 👋🏼';
        break;
      case '/notification':
        document.title = 'Notifications - Your App';
        break;
      case '/profile':
        document.title = 'Profile - Your App';
        break;
      default:
        document.title = 'Your App';
    }
  }, [pathname]);

  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div className="flex justify-between pr-4 bg-primary font-popins px-8">
          <Button
            type="text"
            icon={<MenuOutlined className="text-white -ml-8 w-8 h-8" />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-white"
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="flex justify-between items-center w-full">
            <div className="text-white text-[34px] font-bold">
            <Image   src={logo} alt="image" className="" />
            </div>
            <div className="text-white">
              <Link href="/notification" className="text-white">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="47" height="47" rx="12" fill="#383838" />
                  <path
                    d="M23.5 16C20.4624 16 18 18.4624 18 21.5V26H17V27H30V26H29V21.5C29 18.4624 26.5376 16 23.5 16Z"
                    fill="#EBCA7E"
                  />
                  <path
                    d="M21 28.5V28H26V28.5C26 29.8807 24.8807 31 23.5 31C22.1193 31 21 29.8807 21 28.5Z"
                    fill="#EBCA7E"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MainHeader;
