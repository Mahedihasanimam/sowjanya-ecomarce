'use client';

import { useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUpdateProfileMutation } from '@/redux/features/users/UserApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/features/users/userSlice';
import { message } from 'antd';
import { useRouter } from 'next/navigation';


export default function EditProfilePage() {
    const [imageFile, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const [updateProfile] = useUpdateProfileMutation();
    const router = useRouter();
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'];
            
            if (!allowedTypes.includes(file.type)) {
                setError("Please select a valid image file (jpeg, png, jpg, gif, webp, svg).");
                return;
            }

            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        const formData = new FormData();
        formData.append('name', e.target.firstname.value + ' ' + e.target.lastname.value);
    
        if (imageFile) {
            formData.append('image', imageFile);
        }
        

        formData.forEach((value, key) => {
            console.log(key, value);
        });
        try {


            const response = await updateProfile(formData);
            if(response?.data?.status === 'success'){
                console.log('Profile updated successfully:', response);
                message.success('Profile updated successfully');
                dispatch(setUser(response.data.user));
                router.push('/myprofile');
                return;
            }
           
        } catch (error) {
            console.error('Error updating profile:', error);
            message.error('Failed to update profile');
            setError(error?.data?.message || 'Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="container mt-8 mx-auto">
                {/* Header */}
                <div className="flex items-center mb-8">
                    <Link href="/myprofile" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                    <div className="ml-4">
                        <h1 className="text-2xl font-semibold">Edit profile</h1>
                        <p className="text-sm text-gray-500">
                            You can edit your profile picture & personal information
                        </p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="max-w-md mx-auto">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative">
                            <div
                                className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden cursor-pointer"
                                onClick={triggerFileInput}
                            >
                                {previewUrl ? (
                                    <Image
                                        src={previewUrl}
                                        alt="Profile"
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <svg
                                        width="182"
                                        height="182"
                                        viewBox="0 0 182 182"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="182" height="182" rx="91" fill="#D9D9D9" />
                                        <path
                                            d="M67.6667 121C65.8333 121 64.2644 120.348 62.96 119.043C61.6556 117.739 61.0022 116.169 61 114.333V67.6667C61 65.8333 61.6533 64.2644 62.96 62.96C64.2667 61.6556 65.8356 61.0022 67.6667 61H114.333C116.167 61 117.737 61.6533 119.043 62.96C120.35 64.2667 121.002 65.8356 121 67.6667V114.333C121 116.167 120.348 117.737 119.043 119.043C117.739 120.35 116.169 121.002 114.333 121H67.6667ZM67.6667 114.333H114.333V67.6667H67.6667V114.333ZM71 107.667H111L98.5 91L88.5 104.333L81 94.3333L71 107.667Z"
                                            fill="#888888"
                                        />
                                    </svg>
                                )}
                            </div>
                            <button
                                type="button"
                                className="absolute left-1/2 transform -translate-x-1/2 px-2 py-2 text-secondary font-medium bg-transparent"
                                onClick={triggerFileInput}
                            >
                                Add
                            </button>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-white">First Name</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your first name"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-white">Last Name</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your last name"
                            />
                        </div>

                        {/* Change Password */}
                        <div className="text-right">
                            <Link
                                href="/myprofile/editprofile/updatepassword"
                                className="text-sm text-blue-400 hover:text-blue-300"
                            >
                                Change password
                            </Link>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

