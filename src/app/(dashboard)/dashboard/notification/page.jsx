"use client";

import { useState } from "react";
import imageone from '../../../../public/images/avater.png';
import {  LeftOutlined } from '@ant-design/icons';

import { useRouter } from "next/navigation";
import Image from "next/image";

const Notificationitem = () => {
    const [isOpen, setIsOpen] = useState(true); // Manage the modal open state
    const router = useRouter()

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
                    <h2 className="text-xl flex text-white space-x-2 items-center font-semibold mb-6 ">
                        <>
                            <button onClick={() => router.back()} className="focus:outline-none pt-2">
                                <LeftOutlined className="text-2xl cursor-pointer" />
                            </button>
                        </>
                        Notifications <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EC474F" />
                            <path d="M9.42234 16V15.076L12.2423 12.052C12.5063 11.764 12.7183 11.5 12.8783 11.26C13.0383 11.012 13.1543 10.776 13.2263 10.552C13.3063 10.32 13.3463 10.088 13.3463 9.856C13.3463 9.408 13.2103 9.068 12.9383 8.836C12.6663 8.604 12.2663 8.488 11.7383 8.488C11.3303 8.488 10.9423 8.564 10.5743 8.716C10.2143 8.868 9.87034 9.1 9.54234 9.412L9.09834 8.464C9.41834 8.152 9.82634 7.904 10.3223 7.72C10.8183 7.528 11.3343 7.432 11.8703 7.432C12.4543 7.432 12.9463 7.524 13.3463 7.708C13.7543 7.884 14.0623 8.144 14.2703 8.488C14.4783 8.832 14.5823 9.252 14.5823 9.748C14.5823 10.004 14.5503 10.256 14.4863 10.504C14.4303 10.744 14.3383 10.984 14.2103 11.224C14.0903 11.464 13.9343 11.712 13.7423 11.968C13.5583 12.224 13.3343 12.488 13.0703 12.76L10.6583 15.304V14.956H14.9183V16H9.42234Z" fill="white" />
                        </svg>

                    </h2>

                </div>
                {notifications.length > 0 ? (
                    <ul className="space-y-4">
                        {notifications.map((notification, index) => (
                            <li
                                className="flex items-center space-x-4 border-2 border-[#242424] rounded-lg cursor-pointer p-1 "
                                key={index}
                            >
                                <Image
                                    className="rounded-full"
                                    height={40}
                                    width={40}
                                    src={notification.image}
                                    alt="User avatar"
                                />
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center  space-x-2">
                                        <strong className="text-[18px] font-normal">
                                            {notification.name}
                                        </strong>
                                        :{" "}
                                        <p className="text-[#FFFFFFB2]">
                                            {notification.message}
                                        </p>

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
