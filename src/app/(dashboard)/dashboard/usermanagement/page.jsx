"use client";

import {
  useDeleteUsersMutation,
  useGetAllUsersQuery,
} from "@/redux/features/admin/userSlice";
import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Image, Input, Modal, Select, Table, message } from "antd";

import ProductFormModal from "@/components/dashboard/AddProductFormModal";
import UserDetailsModal from "@/components/dashboard/UserDetailsModal";
import { useState } from "react";
import tableimg from "../../../../public/images/tableavtar.png";

const { Search } = Input;
const { confirm } = Modal;
// Generate 50 products for pagination demo
const allProducts = Array.from({ length: 20 }, (_, i) => ({
  key: i + 1,
  srNo: i + 1,
  name: "mehedi hasan",
  email: "exampl@gmail.com",
  ID: "#4561500",
  Boughtproduct: 18,
  image: tableimg,
}));

export default function ProductTable() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data: User } = useGetAllUsersQuery({
    page,
    perPage,
    search: searchText,
  });
  const [deleteUser] = useDeleteUsersMutation();

  //

  const [isProductModalVisible, setIsProductModalVisible] = useState(false);
  const [productModalMode, setProductModalMode] = useState("add");

  const [isViewModalVisible, setIsViewModalVisible] = useState(false); // Updated variable name
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewClick = (record) => {
    setIsViewModalVisible(true); // Updated state handler
    setSelectedUser(record);
  };

  const handleCloseModal = () => {
    setIsViewModalVisible(false); // Updated state handler
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const columns = [
    {
      title: "Sr. no.",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => (
        <span className="text-[16px] font-medium text-[#D1D0D0]">
          {/* {index + 1} */}
          {record?.id}
        </span>
      ),
    },
    // {
    //   title: "ID.",
    //   dataIndex: "id",
    //   key: "id",
    //   width: 70,
    // },
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          {record?.image ? (
            <Image
              src={record?.image}
              alt={text}
              width={40}
              height={40}
              className="rounded-sm object-cover"
            />
          ) : (
            ""
          )}

          <span className="text-[16px] font-medium text-[#D1D0D0]">{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => (
        <span className="text-[#D1D0D0] text-[16px] font-medium">{email}</span>
      ),
    },
    // {
    //   title: "ID",
    //   dataIndex: "ID",
    //   key: "ID",
    //   render: (ID) => (
    //     <span className="text-[#D1D0D0] text-[16px] font-medium">{ID}</span>
    //   ),
    // },
    // {
    //   title: "Bought product",
    //   dataIndex: "Boughtproduct",
    //   key: "Boughtproduct",
    //   render: (Boughtproduct) => (
    //     <span className="text-[#D1D0D0] text-[16px] font-medium">
    //       {Boughtproduct}
    //     </span>
    //   ),
    // },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-3">
          <button
            onClick={() => handleViewClick(record)}
            className="text-gray-400 hover:text-white"
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9541 1C4.6471 1 1.5871 6.683 1.0441 7.808C1.01508 7.86784 1 7.93349 1 8C1 8.06651 1.01508 8.13216 1.0441 8.192C1.5861 9.317 4.6461 15 10.9541 15C17.2621 15 20.3211 9.317 20.8641 8.192C20.8931 8.13216 20.9082 8.06651 20.9082 8C20.9082 7.93349 20.8931 7.86784 20.8641 7.808C20.3221 6.683 17.2621 1 10.9541 1Z"
                stroke="#DBBC7E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9541 11C12.611 11 13.9541 9.65685 13.9541 8C13.9541 6.34315 12.611 5 10.9541 5C9.29725 5 7.9541 6.34315 7.9541 8C7.9541 9.65685 9.29725 11 10.9541 11Z"
                stroke="#DBBC7E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => handleDelete(record?.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.51515 2.12121H8.06061C8.06061 1.78366 7.92652 1.45994 7.68783 1.22126C7.44915 0.982575 7.12543 0.848485 6.78788 0.848485C6.45033 0.848485 6.12661 0.982575 5.88792 1.22126C5.64924 1.45994 5.51515 1.78366 5.51515 2.12121ZM4.66667 2.12121C4.66667 1.55863 4.89015 1.01909 5.28796 0.621289C5.68576 0.223484 6.2253 0 6.78788 0C7.35046 0 7.89 0.223484 8.2878 0.621289C8.68561 1.01909 8.90909 1.55863 8.90909 2.12121H13.1515C13.264 2.12121 13.3719 2.16591 13.4515 2.24547C13.5311 2.32503 13.5758 2.43294 13.5758 2.54545C13.5758 2.65797 13.5311 2.76588 13.4515 2.84544C13.3719 2.925 13.264 2.9697 13.1515 2.9697H12.2572L11.2441 11.7464C11.1725 12.3668 10.8753 12.9393 10.4091 13.3548C9.94287 13.7703 9.34016 14 8.71564 14H4.86012C4.2356 14 3.63288 13.7703 3.16666 13.3548C2.70044 12.9393 2.40325 12.3668 2.33164 11.7464L1.31855 2.9697H0.424242C0.311726 2.9697 0.203819 2.925 0.124258 2.84544C0.0446969 2.76588 0 2.65797 0 2.54545C0 2.43294 0.0446969 2.32503 0.124258 2.24547C0.203819 2.16591 0.311726 2.12121 0.424242 2.12121H4.66667ZM3.17418 11.6497C3.22206 12.0632 3.42028 12.4448 3.73114 12.7217C4.042 12.9986 4.44381 13.1516 4.86012 13.1515H8.71564C9.13195 13.1516 9.53375 12.9986 9.84461 12.7217C10.1555 12.4448 10.3537 12.0632 10.4016 11.6497L11.4028 2.9697H2.17297L3.17418 11.6497ZM5.51515 5.09091C5.62767 5.09091 5.73558 5.13561 5.81514 5.21517C5.8947 5.29473 5.93939 5.40264 5.93939 5.51515V10.6061C5.93939 10.7186 5.8947 10.8265 5.81514 10.906C5.73558 10.9856 5.62767 11.0303 5.51515 11.0303C5.40264 11.0303 5.29473 10.9856 5.21517 10.906C5.13561 10.8265 5.09091 10.7186 5.09091 10.6061V5.51515C5.09091 5.40264 5.13561 5.29473 5.21517 5.21517C5.29473 5.13561 5.40264 5.09091 5.51515 5.09091ZM8.48485 5.51515C8.48485 5.40264 8.44015 5.29473 8.36059 5.21517C8.28103 5.13561 8.17312 5.09091 8.06061 5.09091C7.94809 5.09091 7.84018 5.13561 7.76062 5.21517C7.68106 5.29473 7.63636 5.40264 7.63636 5.51515V10.6061C7.63636 10.7186 7.68106 10.8265 7.76062 10.906C7.84018 10.9856 7.94809 11.0303 8.06061 11.0303C8.17312 11.0303 8.28103 10.9856 8.36059 10.906C8.44015 10.8265 8.48485 10.7186 8.48485 10.6061V5.51515Z"
                fill="#FF1E00"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    setPage(pagination?.current);
  };

  const handleDelete = (key) => {
    confirm({
      title: "Are you sure you want to delete this product?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteUser(key).then(() => {
          message.success("User deleted successfully");
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#141414] p-6">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Showing</span>
          <Select
            defaultValue={perPage}
            className="w-16"
            options={[
              { value: "10", label: "10" },
              { value: "20", label: "20" },
              { value: "50", label: "50" },
            ]}
            onChange={(value) => setPerPage(parseInt(value, 10))}
          />
          <span className="text-gray-400">on page</span>
        </div>
        {/* <div>
          <Dropdown
            menu={{ items: sortItems }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <span className="cursor-pointer">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="38"
                  height="38"
                  rx="4.5"
                  stroke="white"
                />
                <path
                  d="M9.75 12.5938C9.75 12.2705 9.8784 11.9605 10.107 11.732C10.3355 11.5034 10.6455 11.375 10.9688 11.375H28.8438C29.167 11.375 29.477 11.5034 29.7055 11.732C29.9341 11.9605 30.0625 12.2705 30.0625 12.5938C30.0625 12.917 29.9341 13.227 29.7055 13.4555C29.477 13.6841 29.167 13.8125 28.8438 13.8125H10.9688C10.6455 13.8125 10.3355 13.6841 10.107 13.4555C9.8784 13.227 9.75 12.917 9.75 12.5938ZM13 19.0938C13 18.7705 13.1284 18.4605 13.357 18.232C13.5855 18.0034 13.8955 17.875 14.2188 17.875H25.5938C25.917 17.875 26.227 18.0034 26.4555 18.232C26.6841 18.4605 26.8125 18.7705 26.8125 19.0938C26.8125 19.417 26.6841 19.727 26.4555 19.9555C26.227 20.1841 25.917 20.3125 25.5938 20.3125H14.2188C13.8955 20.3125 13.5855 20.1841 13.357 19.9555C13.1284 19.727 13 19.417 13 19.0938ZM16.25 25.5938C16.25 25.2705 16.3784 24.9605 16.607 24.732C16.8355 24.5034 17.1455 24.375 17.4688 24.375H22.3438C22.667 24.375 22.977 24.5034 23.2055 24.732C23.4341 24.9605 23.5625 25.2705 23.5625 25.5938C23.5625 25.917 23.4341 26.227 23.2055 26.4555C22.977 26.6841 22.667 26.8125 22.3438 26.8125H17.4688C17.1455 26.8125 16.8355 26.6841 16.607 26.4555C16.3784 26.227 16.25 25.917 16.25 25.5938Z"
                  fill="white"
                />
              </svg>
            </span>
          </Dropdown>
        </div> */}
      </div>
      <div className="flex items-center justify-between py-4 gap-4 w-full sm:w-auto">
        <Input.Search
          size="large"
          placeholder="search products by name or SKU..."
          className="max-w-lg "
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<SearchOutlined className="text-gray-400" />}
          //   onSearch={handleSearch}
        />
      </div>

      <Table
        columns={columns}
        dataSource={User?.users?.data}
        pagination={{
          total: User?.users?.total,
          defaultPageSize: 10,
          current: User?.users?.current_page,
          pageSize: User?.users?.per_page,
          showSizeChanger: false,
          className: "custom-pagination",
          itemRender: (page, type, originalElement) => {
            if (type === "prev") {
              return (
                <button
                  onClick={() => {
                    setPage(page);
                  }}
                  className="px-3 py-1 rounded border border-gray-600 hover:border-white"
                >
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.425972 8.44461L8.6597 0L10.7178 2.11078L3.51308 9.5L10.7178 16.8892L8.6597 19L0.425972 10.5554C0.15311 10.2755 -0.000177383 9.89583 -0.000177383 9.5C-0.000177383 9.10417 0.15311 8.72455 0.425972 8.44461Z"
                      fill="white"
                    />
                  </svg>
                </button>
              );
            }
            if (type === "next") {
              return (
                <button
                  onClick={() => {
                    setPage(page);
                  }}
                  className="px-3 py-1 rounded border border-gray-600 hover:border-white"
                >
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.2918 10.5554L2.05807 19L0 16.8892L7.2047 9.5L0 2.11078L2.05807 0L10.2918 8.44461C10.5647 8.72455 10.718 9.10417 10.718 9.5C10.718 9.89583 10.5647 10.2755 10.2918 10.5554Z"
                      fill="white"
                    />
                  </svg>
                </button>
              );
            }
            return (
              <button
                style={{ height: "30px" }}
                className={`px-3 py-1 rounded border
                                      }`}
              >
                {page}
              </button>
            );
          },
        }}
        onChange={handleTableChange}
        className="custom-table"
      />

      {/* <CustomDeleteModal
        isVisible={isDeleteModalVisible}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      /> */}

      <ProductFormModal
        isVisible={isProductModalVisible}
        onCancel={() => setIsProductModalVisible(false)}
        initialData={selectedProduct}
        mode={productModalMode}
      />

      <UserDetailsModal
        isVisible={isViewModalVisible} // Updated prop name
        onCancel={handleCloseModal}
        initialData={selectedUser} // Updated prop name
      />
    </div>
  );
}
