"use client";

import { useState } from "react";
import imageone from '../../../../public/images/avater.png';
import {  LeftOutlined } from '@ant-design/icons';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useGetallnotificationQuery } from "@/redux/features/admin/notificationslice";

const Notificationitem = () => {
    const [isOpen, setIsOpen] = useState(true); // Manage the modal open state
    const router = useRouter()
const {data}=useGetallnotificationQuery()
console.log(data?.notifications?.data)
    const notifications = [
        {
            image: imageone,
            name: "Leslie",
            message: " book a room for stay 2 days.",
            timestamp: "2 mins ago",
        },
        {
            image: imageone,
            name: "Arlene",
            message: "send a support message.",
            timestamp: "1 hour ago",
        },
        {
            image: imageone,
            name: "Mehedi",
            message: "You have received a new message.",
            timestamp: "2 mins ago",
        },
        {
            image: imageone,
            name: "omuk",
            message: "A new update is available for download.",
            timestamp: "1 hour ago",
        },
        {
            image: imageone,
            name: "Mehedi",
            message: "You have received a new message.",
            timestamp: "2 mins ago",
        },
        {
            image: imageone,
            name: "omuk",
            message: "A new update is available for download.",
            timestamp: "1 hour ago",
        },
        {
            image: imageone,
            name: "Mehedi",
            message: "You have received a new message.",
            timestamp: "2 mins ago",
        },
        {
            image: imageone,
            name: "omuk",
            message: "A new update is available for download.",
            timestamp: "1 hour ago",
        },
    ];

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    if (!isOpen) return null;

    return (
        <div className="min-h-screen text-white  p-4 z-50">
            <div className="modal-content w-full ">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl flex text-white space-x-2 items-center font-semibold mb-6 relative ">
                        <>
                            <button onClick={() => router.back()} className="focus:outline-none pt-2">
                                <LeftOutlined className="text-2xl cursor-pointer" />
                            </button>
                        </>
                        Notifications
                        <div className='absolute top-2 -right-[25px]  h-[20px] text-[#000000]'>
                                <span className='bg-[#5DFD92] rounded-full text-sm w-[20px] h-[20px] flex items-center justify-center p-2'>
                                {data?.notifications?.data.length}
                                </span>
                            </div>

                    </h2>

                </div>
                {data?.notifications?.data.length > 0 ? (
                    <ul className="space-y-4">
                        {data.notifications?.data.map((notification, index) => (
                            <li
                                className="flex items-center space-x-4 border-2 p-4 border-[#242424] rounded-lg cursor-pointer p-1 "
                                key={index}
                            >
                               
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                    <div className="flex items-center  space-x-2">
                                        <p className="text-[16px] text-[#DBBC7E] font-semibold font-normal">
                                        New order
                                        </p>
                                     
                                        <p className="text-[#858585] text-sm font-normal ">
                                        5:00pm, today
                                        </p>

                                    </div>
                                    <div>
                                        <h3 className="text-[#D1D0D0]">{notification?.data?.product_title                                        }</h3>

                                        <p className="text-sm text-[#858585]"> quantity : {notification?.data?.quantity}</p>
                                    </div>

                                    </div>

                                    <div>
                                        <div className="timestamp text-[#FFFFFFB2] flex items-center">
                                            <p className="pr-2">{notification.timestamp}</p> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="6" height="6" rx="3" fill="#F42829" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No new notifications</p>
                )}
            </div>
        </div>
    );
};

export default Notificationitem;
