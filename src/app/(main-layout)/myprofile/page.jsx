"use client";

import { Button, Input, Modal, Rate, Table, message } from "antd";
import {
  useGetmyorderListQuery,
  useLeaveAreviewMutation,
} from "@/redux/features/users/UserApi";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";

const { TextArea } = Input;
// Static data for the table

// Main component
const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productId, setProductId] = useState(null); // To store product_id
  const [rating, setRating] = useState(0); // Rating state
  const [reviewText, setReviewText] = useState(""); // Review text state

  const { data: myorderlist, isloading } = useGetmyorderListQuery();
  const [leaveAreview] = useLeaveAreviewMutation();
  console.log(myorderlist?.data);
  // Modal handlers
  const openModal = (id) => {
    setProductId(id);
    setRating(0);
    setReviewText(""); // Reset review text when opening modal
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmitReview = async () => {
    try {
      const alldata = {
        product_id: productId,
        rating,
        comment: reviewText,
      };

      const respons = await leaveAreview(alldata);

      if (respons?.data?.status === "success") {
        message.success(respons?.data?.message);
        setIsModalVisible(false);
        console.log("respons", respons);
      }
    } catch (error) {
      message.error("something went wrong !");
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10 rounded-md overflow-hidden">
            <Image
              src={record?.image[0]} // First image from the array
              alt={text}
              layout="fill"
              className="object-cover"
            />
          </div>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <span>${price}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded text-white ${
            status === "Delivered" ? "bg-green-800" : "bg-red-700"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Review",
      dataIndex: "rating",
      key: "rating",
      render: (rating, record) => (
        <div>
          {rating ? (
            <div>
              <Rate allowHalf disabled value={rating} />
            </div>
          ) : (
            <button
              onClick={() => openModal(record?.product_id)}
              className="text-yellow-400 underline"
            >
              <span>Give review</span>
            </button>
          )}
        </div>
      ),
    },
  ];
  console.log("orderlist", myorderlist?.data);
  return (
    <div className="p-4 bg-primary text-white">
      <div className="container mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <Image
              src={user?.image}
              width={180}
              height={180}
              alt="Profile h-[180px] Picture"
              className="rounded-full"
            />
            <div className="absolute bottom-2 right-2 cursor-pointer">
              <span onClick={() => router.push("/myprofile/editprofile")}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#DBBC7E" />
                  <path
                    d="M15.6665 15.667H13.9998C13.1158 15.667 12.2679 16.0182 11.6428 16.6433C11.0177 17.2684 10.6665 18.1163 10.6665 19.0003V34.0003C10.6665 34.8844 11.0177 35.7322 11.6428 36.3573C12.2679 36.9825 13.1158 37.3337 13.9998 37.3337H28.9998C29.8839 37.3337 30.7317 36.9825 31.3569 36.3573C31.982 35.7322 32.3332 34.8844 32.3332 34.0003V32.3337"
                    stroke="#F6F6F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.6667 12.3335L35.6667 17.3335M37.975 14.9752C38.6314 14.3188 39.0002 13.4285 39.0002 12.5002C39.0002 11.5719 38.6314 10.6816 37.975 10.0252C37.3186 9.36877 36.4283 9 35.5 9C34.5717 9 33.6814 9.36877 33.025 10.0252L19 24.0002V29.0002H24L37.975 14.9752Z"
                    stroke="#F6F6F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <h2 className="text-2xl text-white font-bold mt-2">{user?.name}</h2>
          <p className="text-white">{user?.email}</p>
        </div>

        {/* Order Table */}
        <div className="bg-black p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Your order list</h3>
          <Table
            style={{ backgroundColor: "#4545454D" }}
            dataSource={myorderlist?.data}
            columns={columns}
            pagination={false}
            className="custom-table text-white border-none"
            scroll={{ x: "max-content" }}
            rowKey={(record, index) => index} // Use index as a unique key
          />
        </div>

        {/* Review Modal */}
        <Modal
          title={`Product review`}
          visible={isModalVisible}
          onCancel={handleModalCancel}
          footer={[
            <Button key="cancel" onClick={handleModalCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
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
          <div className=" space-y-4">
            <p className="text-lg font-semibold">Give rating</p>
            <Rate
              value={rating}
              onChange={(value) => setRating(value)}
              style={{ color: "#EBCA7E" }}
            />

            <p className="text-lg font-semibold">Give review</p>

            <TextArea
              value={reviewText} // Bind to reviewText state
              onChange={(e) => setReviewText(e.target.value)} // Update state on change
              placeholder="Write your review here"
              rows={4}
              name="review"
              aria-controls="none"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProfilePage;
