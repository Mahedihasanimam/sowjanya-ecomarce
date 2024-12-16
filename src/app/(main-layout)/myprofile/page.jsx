"use client";

import { useState } from "react";
import { Modal, Rate, Button, Table } from "antd";
import Image from "next/image";
import avater from '../../../public/images/avater.png'
import { useRouter } from "next/navigation";
// Static data for the table
const orders = [
    {
        key: "1",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Delivered",
        reviewStatus: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
        key: "2",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Pending",
        reviewStatus: "Give review",
    },
    {
        key: "3",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Pending",
        reviewStatus: "Give review",
    },
    {
        key: "4",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Delivered",
        reviewStatus: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
        key: "5",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Delivered",
        reviewStatus: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
        key: "1",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Delivered",
        reviewStatus: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
        key: "2",
        productName: "Radiant Rose Cocktail Dress",
        price: "$5600.00",
        status: "Pending",
        reviewStatus: "Give review",
    },

];

// Main component
const ProfilePage = () => {
    const router=useRouter()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [rating, setRating] = useState(0);

    // Modal handlers
    const openModal = (order) => {
        setSelectedOrder(order);
        setRating(0);
        setIsModalVisible(true);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmitReview = () => {
        console.log("Submitted Rating for:", selectedOrder.productName, rating);
        setIsModalVisible(false);
    };

    // Table columns
    const columns = [
        {
            title: "Product Name",
            dataIndex: "productName",
            key: "productName",
            render: (text) => (
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <span
                    className={`${status === "Delivered" ? "bg-green-800" : "bg-red-700"
                        } px-2 py-1 rounded text-white`}
                >
                    {status}
                </span>
            ),
        },
        {
            title: "Review",
            dataIndex: "reviewStatus",
            key: "reviewStatus",
            render: (review, record) => (
                <div>
                    {review === "Give review" ? (
                        <button
                            onClick={() => openModal(record)}
                            className="text-yellow-400 underline"
                        >
                            {review}
                        </button>
                    ) : (
                        <span>{review}</span>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="p-4 bg-primary text-white">
            <div className="container mx-auto">

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative">
                        <Image
                            src={avater}
                            width={180}
                            height={180}
                            alt="Profile Picture"
                            className="rounded-full"
                        />
                        <div className="absolute bottom-2 right-2 cursor-pointer">
                            <span onClick={()=>router.push('/myprofile/editprofile')}><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#DBBC7E" />
                                <path d="M15.6665 15.667H13.9998C13.1158 15.667 12.2679 16.0182 11.6428 16.6433C11.0177 17.2684 10.6665 18.1163 10.6665 19.0003V34.0003C10.6665 34.8844 11.0177 35.7322 11.6428 36.3573C12.2679 36.9825 13.1158 37.3337 13.9998 37.3337H28.9998C29.8839 37.3337 30.7317 36.9825 31.3569 36.3573C31.982 35.7322 32.3332 34.8844 32.3332 34.0003V32.3337" stroke="#F6F6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.6667 12.3335L35.6667 17.3335M37.975 14.9752C38.6314 14.3188 39.0002 13.4285 39.0002 12.5002C39.0002 11.5719 38.6314 10.6816 37.975 10.0252C37.3186 9.36877 36.4283 9 35.5 9C34.5717 9 33.6814 9.36877 33.025 10.0252L19 24.0002V29.0002H24L37.975 14.9752Z" stroke="#F6F6F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>

                        </div>
                    </div>
                    <h2 className="text-2xl text-white font-bold mt-2">Sent Joseph</h2>
                    <p className="text-white">joseph242@gmail.com</p>
                </div>

                {/* Order Table */}
                <div className="bg-black p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Your order list</h3>
                    <Table
                        style={{ backgroundColor: '#4545454D' }}
                        dataSource={orders}
                        columns={columns}
                        pagination={false}
                        className="custom-table text-white border-none"
                        scroll={{ x: "max-content" }}
                    />
                </div>

                {/* Review Modal */}
                <Modal
                    title={`Review: ${selectedOrder?.productName}`}
                    visible={isModalVisible}
                    onCancel={handleModalCancel}
                    footer={[
                        <Button key="cancel" onClick={handleModalCancel}>
                            Cancel
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={handleSubmitReview}
                            style={{
                                backgroundColor: "#EBCA7E",
                                borderColor: "#EBCA7E",
                                color: "#000",
                                fontWeight: "bold",
                            }}
                        >
                            Submit Review
                        </Button>,
                    ]}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-lg font-semibold">Rate the Product</p>
                        <Rate
                            value={rating}
                            onChange={(value) => setRating(value)}
                            style={{ color: "#EBCA7E" }}
                        />
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ProfilePage;
