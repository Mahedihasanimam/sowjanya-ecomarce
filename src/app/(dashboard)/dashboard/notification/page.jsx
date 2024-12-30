"use client";

import { useState } from "react";
import imageone from '../../../../public/images/avater.png';
import { LeftOutlined } from '@ant-design/icons';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Pagination, message } from "antd";
import { useGetallnotificationQuery, useReadNotificationMutation, useRedallnotificationMutation } from "@/redux/features/admin/notificationslice";

const Notificationitem = () => {
    const [isOpen, setIsOpen] = useState(true); // Manage the modal open state
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [notificationsPerPage] = useState(5); // Number of notifications per page

    const router = useRouter();
    const { data } = useGetallnotificationQuery();
    const [readNotification] = useReadNotificationMutation();
    const [redallnotification] = useRedallnotificationMutation();
    console.log(data?.unread_notification);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    if (!isOpen) return null;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlereadnotification = async (id) => {
        const respons = await readNotification(id);
        if (respons?.data?.status === 'success') {
            message.success(respons?.data?.message);
        }
        console.log('readnotification', respons);
    };

    const handlereadall = async () => {
        const respons = await redallnotification();
        console.log(respons)
        if (respons?.data?.status === 'success') {
            message.success('message readed successfully');
        }
    }

    // Pagination Logic
    const indexOfLastNotification = currentPage * notificationsPerPage;
    const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
    const currentNotifications = data?.notifications?.data.slice(indexOfFirstNotification, indexOfLastNotification);

    return (
        <div className="min-h-screen text-white p-4 z-50">
            <div className="modal-content w-full">
                <div className="flex items-center justify-between">
                    <div className="text-xl flex text-white space-x-2 items-center font-semibold mb-6 ">
                        <div className="relative">
                        <>
                            <button onClick={() => router.back()} className="focus:outline-none pt-2">
                                <LeftOutlined className="text-2xl cursor-pointer" />
                            </button>
                        </>
                        Notifications
                        <div className='absolute top-2 -right-[25px] h-[20px] text-[#000000]'>
                            <span className='bg-[#5DFD92] rounded-full text-sm w-[20px] h-[20px] flex items-center justify-center p-2'>
                                {data?.unread_notification}
                            </span>
                        </div>

                        </div>


                    </div>
                        <Button onClick={handlereadall}>Read all</Button>
                </div>
                {currentNotifications?.length > 0 ? (
                    <>
                        <ul className="space-y-4">
                            {currentNotifications.map((notification, index) => (
                                <li
                                    onClick={() => handlereadnotification(notification?.id)}
                                    className="flex items-center space-x-4 border-2 p-4 border-[#242424] rounded-lg cursor-pointer"
                                    key={index}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <p className="text-[16px] text-[#DBBC7E] font-semibold font-normal">
                                                    New order
                                                </p>
                                                <p className="text-[#858585] text-sm font-normal">
                                                    {notification?.data?.order_date}
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-[#D1D0D0]">{notification?.data?.product_title}</h3>
                                                <p className="text-sm text-[#858585]"> quantity : {notification?.data?.quantity}</p>
                                            </div>
                                        </div>
                                        {notification?.read_at ? 'read' : (
                                            <div className="timestamp text-[#FFFFFFB2] flex items-center">
                                                <p className="pr-2"></p>
                                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="6" height="6" rx="3" fill="#F42829" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Pagination
                                current={currentPage}
                                pageSize={notificationsPerPage}
                                total={data?.notifications?.data.length}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                            />
                        </div>
                    </>
                ) : (
                    <p>No new notifications</p>
                )}
            </div>
        </div>
    );
};

export default Notificationitem;
