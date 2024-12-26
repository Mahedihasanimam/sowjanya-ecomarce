'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeftOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { IconLeftArray } from '@/public/icons/Icons';

export default function EditProfilePage() {
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    // Handle form submit
    const onFinish = async (values) => {
        setLoading(true);
        try {
            console.log('Form values:', values);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
        } finally {
            setLoading(false);
        }
    };

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="container mt-8 mx-auto">
                {/* Header */}
                <div className="flex items-center mb-8">
                    <Link href="/myprofile" className="text-gray-400 hover:text-white">
                        <ArrowLeftOutlined className="text-xl" />
                    </Link>
                    <div className="ml-4">
                        <h1 className="text-2xl font-semibold">Edit profile</h1>
                        <p className="text-sm text-gray-500">
                            You can edit your profile picture & personal information
                        </p>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative">
                        <div
                            className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden cursor-pointer"
                            onClick={triggerFileInput}
                        >
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt="Profile"
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <svg width="182" height="182" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="182" height="182" rx="91" fill="#D9D9D9" />
                                    <path d="M67.6667 121C65.8333 121 64.2644 120.348 62.96 119.043C61.6556 117.739 61.0022 116.169 61 114.333V67.6667C61 65.8333 61.6533 64.2644 62.96 62.96C64.2667 61.6556 65.8356 61.0022 67.6667 61H114.333C116.167 61 117.737 61.6533 119.043 62.96C120.35 64.2667 121.002 65.8356 121 67.6667V114.333C121 116.167 120.348 117.737 119.043 119.043C117.739 120.35 116.169 121.002 114.333 121H67.6667ZM67.6667 114.333H114.333V67.6667H67.6667V114.333ZM71 107.667H111L98.5 91L88.5 104.333L81 94.3333L71 107.667Z" fill="#888888" />
                                </svg>

                            )}
                        </div>
                        {/* Add Button */}
                        <Button
                            type="default"
                            className="absolute  left-1/2 transform -translate-x-1/2 px-2 py-2  text-secondary font-medium text-white bg-transparent"
                            size="small"
                            onClick={triggerFileInput}
                        >
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.778 18H12.222C15.343 18 16.904 18 18.025 17.265C18.5088 16.9482 18.9254 16.5391 19.251 16.061C20 14.961 20 13.428 20 10.364C20 7.30005 20 5.76705 19.251 4.66705C18.9254 4.18904 18.5088 3.77991 18.025 3.46305C17.305 2.99005 16.403 2.82105 15.022 2.76105C14.363 2.76105 13.796 2.27105 13.667 1.63605C13.5684 1.17092 13.3123 0.754083 12.9418 0.455997C12.5714 0.157912 12.1095 -0.00314481 11.634 4.65308e-05H8.366C7.378 4.65308e-05 6.527 0.685047 6.333 1.63605C6.204 2.27105 5.637 2.76105 4.978 2.76105C3.598 2.82105 2.696 2.99105 1.975 3.46305C1.49154 3.78001 1.07527 4.18914 0.75 4.66705C0 5.76705 0 7.29905 0 10.364C0 13.429 5.96046e-08 14.96 0.749 16.061C1.073 16.537 1.489 16.946 1.975 17.265C3.096 18 4.657 18 7.778 18ZM10 6.27305C7.699 6.27305 5.833 8.10405 5.833 10.363C5.833 12.622 7.7 14.456 10 14.456C12.3 14.456 14.167 12.624 14.167 10.365C14.167 8.10605 12.3 6.27305 10 6.27305ZM10 7.90905C8.62 7.90905 7.5 9.00805 7.5 10.364C7.5 11.719 8.62 12.818 10 12.818C11.38 12.818 12.5 11.719 12.5 10.364C12.5 9.00905 11.38 7.90905 10 7.90905ZM14.722 7.09105C14.722 6.63905 15.095 6.27305 15.556 6.27305H16.666C17.126 6.27305 17.5 6.63905 17.5 7.09105C17.4979 7.30994 17.409 7.51905 17.2528 7.67243C17.0966 7.82581 16.8859 7.91091 16.667 7.90905H15.556C15.4475 7.9101 15.3399 7.88978 15.2393 7.84924C15.1387 7.80871 15.047 7.74874 14.9696 7.67278C14.8921 7.59683 14.8304 7.50636 14.7879 7.40654C14.7454 7.30673 14.723 7.19952 14.722 7.09105Z" fill="#DBBC7E" />
                            </svg>
                            Add
                        </Button>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>



<div className='max-w-md mx-auto'>

                {/* Form */}
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    {/* Name */}
                    <Form.Item
                        name="name"
                        label={<span className="text-white">Name</span>}
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input
                        style={{backgroundColor:'#8888884D'}}
                            placeholder="Enter your full name"
                            prefix={<div dangerouslySetInnerHTML={{__html: IconLeftArray}}  />
                                }
                            className="h-12 bg-gray-800 border-gray-700 text-white"
                        />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        name="password"
                        label={<span className="text-white">Password</span>}
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                          style={{backgroundColor:'#8888884D'}}
                        prefix={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_147_2351"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_147_2351)">
                            <path d="M7 14C6.45 14 5.97917 13.8042 5.5875 13.4125C5.19583 13.0208 5 12.55 5 12C5 11.45 5.19583 10.9792 5.5875 10.5875C5.97917 10.1958 6.45 10 7 10C7.55 10 8.02083 10.1958 8.4125 10.5875C8.80417 10.9792 9 11.45 9 12C9 12.55 8.80417 13.0208 8.4125 13.4125C8.02083 13.8042 7.55 14 7 14ZM7 18C5.33333 18 3.91667 17.4167 2.75 16.25C1.58333 15.0833 1 13.6667 1 12C1 10.3333 1.58333 8.91667 2.75 7.75C3.91667 6.58333 5.33333 6 7 6C8.11667 6 9.12917 6.275 10.0375 6.825C10.9458 7.375 11.6667 8.1 12.2 9H21L24 12L19.5 16.5L17.5 15L15.5 16.5L13.375 15H12.2C11.6667 15.9 10.9458 16.625 10.0375 17.175C9.12917 17.725 8.11667 18 7 18ZM7 16C7.93333 16 8.75417 15.7167 9.4625 15.15C10.1708 14.5833 10.6417 13.8667 10.875 13H14L15.45 14.025L17.5 12.5L19.275 13.875L21.15 12L20.15 11H10.875C10.6417 10.1333 10.1708 9.41667 9.4625 8.85C8.75417 8.28333 7.93333 8 7 8C5.9 8 4.95833 8.39167 4.175 9.175C3.39167 9.95833 3 10.9 3 12C3 13.1 3.39167 14.0417 4.175 14.825C4.95833 15.6083 5.9 16 7 16Z" fill="#888888"/>
                            </g>
                            </svg>
                            }
                            placeholder="••••••••"
                            className="h-12 bg-gray-800 border-gray-700 text-white"
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeOutlined className="text-gray-500" />
                                ) : (
                                    <EyeInvisibleOutlined className="text-gray-500" />
                                )
                            }
                        />
                    </Form.Item>

                    {/* Change Password */}
                    <div className="text-right mb-6">
                        <Link
                            href="/myprofile/changePassword"
                            className="text-sm text-secondary hover:text-white"
                        >
                            Change password
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                        style={{backgroundColor:'#DBBC7E'}}
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="w-full h-12 bg-[#D5B98C] hover:bg-[#C5A97C] text-black font-medium"
                        >
                            Save changes
                        </Button>
                    </Form.Item>
                </Form>
</div>
            </div>
        </div>
    );
}
