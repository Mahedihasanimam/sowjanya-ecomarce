'use client';

import { useEffect, useState } from 'react';
import { Avatar, Button, Layout, theme } from 'antd';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from "../../public/images/logo.png";
import userimg from '../../public/images/avater.png'
import { useSelector } from 'react-redux';
import { useGetadminProfileQuery } from '@/redux/features/users/UserApi';

const { Header } = Layout;

const MainHeader = ({ setCollapsed, collapsed }) => {
    const {data:admin} = useGetadminProfileQuery();
    console.log(admin)
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
                            <Image src={logo} alt="image" className="" />
                        </div>
                        <div className="text-white flex items-center justify-end space-x-8">
                            <Link href="/dashboard/notification" className="text-white">
                                <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="19.5" cy="20.5" r="19.5" fill="#DBBC7E" />
                                    <path d="M29.5765 27.3264C28.9068 26.7294 28.3206 26.045 27.8334 25.2917C27.3011 24.252 26.9824 23.1162 26.8959 21.9514V18.5209C26.9005 16.6914 26.2369 14.9233 25.0298 13.5486C23.8227 12.174 22.1551 11.2874 20.3404 11.0556V10.1597C20.3404 9.91386 20.2427 9.67805 20.0688 9.50419C19.895 9.33033 19.6592 9.23266 19.4133 9.23266C19.1674 9.23266 18.9316 9.33033 18.7578 9.50419C18.5839 9.67805 18.4862 9.91386 18.4862 10.1597V11.0695C16.6878 11.318 15.0404 12.2099 13.8491 13.58C12.6578 14.95 12.0034 16.7053 12.0071 18.5209V21.9514C11.9206 23.1162 11.6019 24.252 11.0696 25.2917C10.591 26.0433 10.0141 26.7276 9.35428 27.3264C9.2802 27.3915 9.22083 27.4716 9.18012 27.5614C9.13941 27.6512 9.11829 27.7486 9.11816 27.8472V28.7917C9.11816 28.9759 9.19133 29.1525 9.32156 29.2827C9.4518 29.413 9.62843 29.4861 9.81261 29.4861H29.1182C29.3023 29.4861 29.479 29.413 29.6092 29.2827C29.7394 29.1525 29.8126 28.9759 29.8126 28.7917V27.8472C29.8125 27.7486 29.7914 27.6512 29.7507 27.5614C29.7099 27.4716 29.6506 27.3915 29.5765 27.3264ZM10.5626 28.0972C11.2086 27.4729 11.7774 26.7735 12.2571 26.0139C12.9277 24.7583 13.3186 23.3724 13.4029 21.9514V18.5209C13.3753 17.707 13.5119 16.8959 13.8043 16.1359C14.0968 15.3759 14.5391 14.6825 15.1051 14.097C15.6711 13.5116 16.3492 13.046 17.0988 12.728C17.8485 12.41 18.6545 12.2461 19.4689 12.2461C20.2832 12.2461 21.0892 12.41 21.8389 12.728C22.5886 13.046 23.2666 13.5116 23.8326 14.097C24.3986 14.6825 24.841 15.3759 25.1334 16.1359C25.4259 16.8959 25.5624 17.707 25.5348 18.5209V21.9514C25.6191 23.3724 26.01 24.7583 26.6807 26.0139C27.1603 26.7735 27.7291 27.4729 28.3751 28.0972H10.5626Z" fill="black" />
                                    <path d="M19.4998 31.8056C19.9372 31.7955 20.357 31.631 20.6849 31.3413C21.0128 31.0515 21.2277 30.6551 21.2914 30.2222H17.6387C17.7043 30.6669 17.9292 31.0726 18.2715 31.3638C18.6139 31.6551 19.0504 31.8121 19.4998 31.8056Z" fill="black" />
                                    <circle cx="31.5" cy="7.5" r="7.5" fill="#5DFD92" />
                                    <path d="M30.8115 7.7627L29.6885 7.49414L30.0938 3.89062H34.0879V5.02832H31.251L31.0752 6.60547C31.1696 6.55013 31.3128 6.49154 31.5049 6.42969C31.6969 6.36458 31.9118 6.33203 32.1494 6.33203C32.4945 6.33203 32.8005 6.38574 33.0674 6.49316C33.3343 6.60059 33.5605 6.75684 33.7461 6.96191C33.9349 7.16699 34.0781 7.41764 34.1758 7.71387C34.2734 8.01009 34.3223 8.34538 34.3223 8.71973C34.3223 9.03548 34.2734 9.33659 34.1758 9.62305C34.0781 9.90625 33.93 10.1602 33.7314 10.3848C33.5329 10.6061 33.2839 10.7803 32.9844 10.9072C32.6849 11.0342 32.3301 11.0977 31.9199 11.0977C31.6139 11.0977 31.3177 11.0521 31.0312 10.9609C30.748 10.8698 30.4925 10.7347 30.2646 10.5557C30.04 10.3766 29.8594 10.1602 29.7227 9.90625C29.5892 9.64909 29.5192 9.35612 29.5127 9.02734H30.9092C30.9287 9.22917 30.9808 9.40332 31.0654 9.5498C31.1533 9.69303 31.2689 9.80371 31.4121 9.88184C31.5553 9.95996 31.723 9.99902 31.915 9.99902C32.0941 9.99902 32.2471 9.96484 32.374 9.89648C32.501 9.82812 32.6035 9.73372 32.6816 9.61328C32.7598 9.48958 32.8167 9.34635 32.8525 9.18359C32.8916 9.01758 32.9111 8.83854 32.9111 8.64648C32.9111 8.45443 32.8883 8.28027 32.8428 8.12402C32.7972 7.96777 32.7272 7.83268 32.6328 7.71875C32.5384 7.60482 32.418 7.51693 32.2715 7.45508C32.1283 7.39323 31.9606 7.3623 31.7686 7.3623C31.5081 7.3623 31.3063 7.40299 31.1631 7.48438C31.0231 7.56576 30.9059 7.65853 30.8115 7.7627Z" fill="black" />
                                </svg>

                            </Link>

                            <div className='flex items-center space-x-2'>
                                <Link href={'/dashboard/adminprofile'}>
                                        <Image
                                            alt="profile"
                                            height={50}
                                            width={50}
                                            className='w-[40px] h-[40px] rounded-lg'
                                            src={admin?.user?.image || "/default-profile.png"}
                                        />
                                </Link>
                                <p className='text-white text-lg'> {admin?.user?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </div>
    );
};

export default MainHeader;
