"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, Col, Row, Select } from "antd";
import { useGetAnalyticsQuery, useGetMostEarningQuery, useGetStatisticsQuery } from "@/redux/features/admin/dashboard";
import { useState } from "react";
const Option = Select;
const monthlyData = [
  {
    month: "Jan",
    appUser: 35000,
    activeUser: 40000
  },
  { month: "Feb", appUser: 25000, activeUser: 30000 },
  { month: "Mar", appUser: 45000, activeUser: 25000 },
  { month: "Apr", appUser: 35000, activeUser: 25000 },
  { month: "May", appUser: 15000, activeUser: 20000 },
  { month: "Jun", appUser: 20000, activeUser: 15000 },
  { month: "Jul", appUser: 35000, activeUser: 40000 },
  { month: "Aug", appUser: 45000, activeUser: 40000 },
  { month: "Sep", appUser: 30000, activeUser: 25000 },
  { month: "Oct", appUser: 35000, activeUser: 30000 },
  { month: "Nov", appUser: 40000, activeUser: 35000 },
  { month: "Dec", appUser: 35000, activeUser: 40000 },
];

const trafficData = [
  { name: "Organic search", value: 45, color: "#ff7a45" },
  { name: "Direct", value: 30, color: "#36cfc9" },
  { name: "Social media", value: 15, color: "#4096ff" },
  { name: "Others", value: 10, color: "#73d13d" },
];


const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export default function Dashboard() {

  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(1);
  const { data: statisticData, isLoading } = useGetStatisticsQuery();
  const { data: analaticsData, isLoading: analaticLoading } = useGetAnalyticsQuery(year);
  const { data: mostEarningdata, isLoading: earningloading } = useGetMostEarningQuery(year);
  const earningdata = Object.entries(mostEarningdata?.top_months || {}).map(([key, value], index) => ({
    name: value.month_name,
    value: parseFloat(value.total_earnings), // Ensure numeric value
    color: ["#5F9863", "#455EFF", "#FF6767", "#D2873B"][index % 4], // Assign colors
  }));

  // // Calculate total earnings for the central statistic
  // const totalEarnings = earningdata.reduce((acc, item) => acc + item.value, 0);
  console.log(statisticData?.data?.orders)
  return (
    <div className="min-h-screen bg-[#141414] p-6">
      <div className=" flex items-center justify-end mb-2">
        <Select
          style={{ height: "30px" }}
          className="custom-select" // Use the custom class
          defaultValue="weekly"
          onChange={handleChange}
        >
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="yearly">Yearly</Option>
        </Select>
      </div>


      <Row gutter={[16, 16]}>
        <Col style={{ height: " 150px" }} xs={24} md={8}>
          <Card className="bg-[#201F1F] border-0 h-[124px]">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#262626]">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 2.88675C26.094 1.10042 29.906 1.10042 33 2.88675L47.2487 11.1132C50.3427 12.8996 52.2487 16.2008 52.2487 19.7735V36.2265C52.2487 39.7992 50.3427 43.1004 47.2487 44.8868L33 53.1133C29.906 54.8996 26.094 54.8996 23 53.1132L8.75129 44.8867C5.65728 43.1004 3.75129 39.7992 3.75129 36.2265V19.7735C3.75129 16.2008 5.65728 12.8996 8.75129 11.1132L23 2.88675Z"
                    fill="#DBBC7E"
                  />
                  <path
                    d="M33.3423 36.9675L36.8134 33.2634L36.0483 32.4328L33.3423 35.3248L32.1751 34.0331L31.4088 34.8704L33.3423 36.9675ZM20.3856 22.2676H33.1724V20.9428H20.3843L20.3856 22.2676ZM34.1111 40C32.7496 40 31.5946 39.4855 30.6461 38.4566C29.6968 37.4286 29.2222 36.1766 29.2222 34.7008C29.2222 33.225 29.6968 31.9726 30.6461 30.9437C31.5954 29.9148 32.7504 29.4008 34.1111 29.4016C35.4718 29.4025 36.6273 29.9165 37.5773 30.9437C38.5274 31.9709 39.0016 33.2232 39 34.7008C39 36.1758 38.5258 37.4277 37.5773 38.4566C36.6273 39.4855 35.4718 40 34.1111 40ZM17 38.2155V18.1409C17 17.5474 17.1923 17.0422 17.5769 16.6253C17.9615 16.2084 18.4276 16 18.9751 16H34.5817C35.1276 16 35.5933 16.2084 35.9787 16.6253C36.3633 17.0422 36.5556 17.5474 36.5556 18.1409V26.0155C35.8287 25.7567 35.084 25.6238 34.3213 25.6167C33.5587 25.6096 32.807 25.7161 32.0663 25.936H20.3843V27.2608H29.3212C28.7085 27.7209 28.1683 28.261 27.7006 28.881C27.2329 29.501 26.8474 30.1837 26.5443 30.9291H20.3856V32.2539H26.1422C26.0542 32.6107 25.9858 32.9706 25.9369 33.3336C25.888 33.6966 25.8631 34.0755 25.8623 34.4703C25.8623 35.0753 25.9206 35.6754 26.0371 36.2707C26.1536 36.866 26.3288 37.4396 26.5627 37.9916L26.5211 38.0367L25.1339 36.9424L23.4888 38.2155L21.8437 36.9424L20.1986 38.2155L18.5522 36.9424L17 38.2155Z"
                    fill="white"
                  />
                </svg>
              </div>


              
              <div>
                <p className="text-gray-400 text-sm">Total Orders</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white m-0">{statisticData?.data?.orders?.total_orders}</h2>
                  <span className="text-green-500 flex items-center text-sm">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.446 0.464775C13.3775 0.281602 13.2465 0.13604 13.0816 0.059971C13.0005 0.0215588 12.9134 0.00118442 12.8252 0H9.45117C9.27221 0 9.10057 0.0789796 8.97402 0.219564C8.84747 0.360148 8.77637 0.550821 8.77637 0.749638C8.77637 0.948454 8.84747 1.13913 8.97402 1.27971C9.10057 1.4203 9.27221 1.49928 9.45117 1.49928H11.1989L7.42676 5.68975L5.20665 3.21595C5.14392 3.14568 5.06929 3.08992 4.98706 3.05186C4.90483 3.0138 4.81663 2.9942 4.72754 2.9942C4.63846 2.9942 4.55026 3.0138 4.46803 3.05186C4.3858 3.08992 4.31116 3.14568 4.24843 3.21595L0.199606 7.71377C0.136358 7.78346 0.0861561 7.86637 0.0518971 7.95772C0.0176382 8.04907 0 8.14705 0 8.24602C0 8.34498 0.0176382 8.44296 0.0518971 8.53431C0.0861561 8.62566 0.136358 8.70857 0.199606 8.77826C0.262338 8.84852 0.336972 8.90429 0.419203 8.94235C0.501434 8.98041 0.589635 9 0.678717 9C0.767799 9 0.856 8.98041 0.938231 8.94235C1.02046 8.90429 1.0951 8.84852 1.15783 8.77826L4.72754 4.80518L6.94765 7.27898C7.01038 7.34925 7.08502 7.40501 7.16725 7.44307C7.24948 7.48113 7.33768 7.50072 7.42676 7.50072C7.51584 7.50072 7.60404 7.48113 7.68628 7.44307C7.76851 7.40501 7.84314 7.34925 7.90587 7.27898L12.1504 2.55626V4.49783C12.1504 4.69664 12.2215 4.88732 12.348 5.0279C12.4746 5.16848 12.6462 5.24746 12.8252 5.24746C13.0042 5.24746 13.1758 5.16848 13.3024 5.0279C13.4289 4.88732 13.5 4.69664 13.5 4.49783V0.749638C13.4989 0.651677 13.4806 0.554899 13.446 0.464775Z"
                        fill="#00FF55"
                      />
                    </svg>
                    <span className="pl-1"> 23%</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="bg-[#1f1f1f] border-0 h-[124px]">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#262626]">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 2.88675C26.094 1.10042 29.906 1.10042 33 2.88675L47.2487 11.1132C50.3427 12.8996 52.2487 16.2008 52.2487 19.7735V36.2265C52.2487 39.7992 50.3427 43.1004 47.2487 44.8868L33 53.1133C29.906 54.8996 26.094 54.8996 23 53.1132L8.75129 44.8867C5.65728 43.1004 3.75129 39.7992 3.75129 36.2265V19.7735C3.75129 16.2008 5.65728 12.8996 8.75129 11.1132L23 2.88675Z"
                    fill="#DBBC7E"
                  />
                  <path
                    d="M28.2 39.4C34.3856 39.4 39.4 34.3856 39.4 28.2C39.4 22.0144 34.3856 17 28.2 17C22.0144 17 17 22.0144 17 28.2C17 34.3856 22.0144 39.4 28.2 39.4Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M28.1998 21.48V34.92M31.5598 25.4C31.5598 23.8544 30.0557 22.6 28.1998 22.6C26.344 22.6 24.8398 23.8544 24.8398 25.4C24.8398 26.9456 26.344 28.2 28.1998 28.2C30.0557 28.2 31.5598 29.4544 31.5598 31C31.5598 32.5456 30.0557 33.8 28.1998 33.8C26.344 33.8 24.8398 32.5456 24.8398 31"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Earnings</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white m-0">$ {statisticData?.data?.total_earning?.total_earning}</h2>
                  <span className="text-red-500 flex items-center text-sm">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.446 8.53522C13.3775 8.7184 13.2465 8.86396 13.0816 8.94003C13.0005 8.97844 12.9134 8.99882 12.8252 9H9.45117C9.27221 9 9.10057 8.92102 8.97402 8.78044C8.84747 8.63985 8.77637 8.44918 8.77637 8.25036C8.77637 8.05155 8.84747 7.86087 8.97402 7.72029C9.10057 7.5797 9.27221 7.50072 9.45117 7.50072H11.1989L7.42676 3.31025L5.20665 5.78405C5.14392 5.85432 5.06929 5.91008 4.98706 5.94814C4.90483 5.9862 4.81663 6.0058 4.72754 6.0058C4.63846 6.0058 4.55026 5.9862 4.46803 5.94814C4.3858 5.91008 4.31116 5.85432 4.24843 5.78405L0.199606 1.28623C0.136358 1.21654 0.0861561 1.13363 0.0518971 1.04228C0.0176382 0.950928 0 0.852945 0 0.753984C0 0.655024 0.0176382 0.557041 0.0518971 0.465692C0.0861561 0.374341 0.136358 0.29143 0.199606 0.221743C0.262338 0.15148 0.336972 0.0957098 0.419203 0.0576515C0.501434 0.0195932 0.589635 0 0.678717 0C0.767799 0 0.856 0.0195932 0.938231 0.0576515C1.02046 0.0957098 1.0951 0.15148 1.15783 0.221743L4.72754 4.19482L6.94765 1.72102C7.01038 1.65075 7.08502 1.59499 7.16725 1.55693C7.24948 1.51887 7.33768 1.49928 7.42676 1.49928C7.51584 1.49928 7.60404 1.51887 7.68628 1.55693C7.76851 1.59499 7.84314 1.65075 7.90587 1.72102L12.1504 6.44374V4.50217C12.1504 4.30336 12.2215 4.11268 12.348 3.9721C12.4746 3.83152 12.6462 3.75254 12.8252 3.75254C13.0042 3.75254 13.1758 3.83152 13.3024 3.9721C13.4289 4.11268 13.5 4.30336 13.5 4.50217V8.25036C13.4989 8.34832 13.4806 8.4451 13.446 8.53522Z"
                        fill="#FF1E00"
                      />
                    </svg>
                    <span className="pl-1"> {statisticData?.data?.total_earning?.growth_percentage}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="bg-[#1f1f1f] border-0 h-[124px]">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#262626]">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 2.88675C26.094 1.10042 29.906 1.10042 33 2.88675L47.2487 11.1132C50.3427 12.8996 52.2487 16.2008 52.2487 19.7735V36.2265C52.2487 39.7992 50.3427 43.1004 47.2487 44.8868L33 53.1133C29.906 54.8996 26.094 54.8996 23 53.1132L8.75129 44.8867C5.65728 43.1004 3.75129 39.7992 3.75129 36.2265V19.7735C3.75129 16.2008 5.65728 12.8996 8.75129 11.1132L23 2.88675Z"
                    fill="#DBBC7E"
                  />
                  <path
                    d="M17 36.6C17 35.1148 17.59 33.6904 18.6402 32.6402C19.6904 31.59 21.1148 31 22.6 31H33.8C35.2852 31 36.7096 31.59 37.7598 32.6402C38.81 33.6904 39.4 35.1148 39.4 36.6C39.4 37.3426 39.105 38.0548 38.5799 38.5799C38.0548 39.105 37.3426 39.4 36.6 39.4H19.8C19.0574 39.4 18.3452 39.105 17.8201 38.5799C17.295 38.0548 17 37.3426 17 36.6Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.2 25.4C30.5196 25.4 32.4 23.5196 32.4 21.2C32.4 18.8804 30.5196 17 28.2 17C25.8804 17 24 18.8804 24 21.2C24 23.5196 25.8804 25.4 28.2 25.4Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white m-0">{statisticData?.data?.users?.total_users}</h2>
                  <span className="text-green-500 flex items-center text-sm">
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.446 0.464775C13.3775 0.281602 13.2465 0.13604 13.0816 0.059971C13.0005 0.0215588 12.9134 0.00118442 12.8252 0H9.45117C9.27221 0 9.10057 0.0789796 8.97402 0.219564C8.84747 0.360148 8.77637 0.550821 8.77637 0.749638C8.77637 0.948454 8.84747 1.13913 8.97402 1.27971C9.10057 1.4203 9.27221 1.49928 9.45117 1.49928H11.1989L7.42676 5.68975L5.20665 3.21595C5.14392 3.14568 5.06929 3.08992 4.98706 3.05186C4.90483 3.0138 4.81663 2.9942 4.72754 2.9942C4.63846 2.9942 4.55026 3.0138 4.46803 3.05186C4.3858 3.08992 4.31116 3.14568 4.24843 3.21595L0.199606 7.71377C0.136358 7.78346 0.0861561 7.86637 0.0518971 7.95772C0.0176382 8.04907 0 8.14705 0 8.24602C0 8.34498 0.0176382 8.44296 0.0518971 8.53431C0.0861561 8.62566 0.136358 8.70857 0.199606 8.77826C0.262338 8.84852 0.336972 8.90429 0.419203 8.94235C0.501434 8.98041 0.589635 9 0.678717 9C0.767799 9 0.856 8.98041 0.938231 8.94235C1.02046 8.90429 1.0951 8.84852 1.15783 8.77826L4.72754 4.80518L6.94765 7.27898C7.01038 7.34925 7.08502 7.40501 7.16725 7.44307C7.24948 7.48113 7.33768 7.50072 7.42676 7.50072C7.51584 7.50072 7.60404 7.48113 7.68628 7.44307C7.76851 7.40501 7.84314 7.34925 7.90587 7.27898L12.1504 2.55626V4.49783C12.1504 4.69664 12.2215 4.88732 12.348 5.0279C12.4746 5.16848 12.6462 5.24746 12.8252 5.24746C13.0042 5.24746 13.1758 5.16848 13.3024 5.0279C13.4289 4.88732 13.5 4.69664 13.5 4.49783V0.749638C13.4989 0.651677 13.4806 0.554899 13.446 0.464775Z"
                        fill="#00FF55"
                      />
                    </svg>
                    <span className="pl-1"> {statisticData?.data?.users?.growth_percentage}</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>



      <div className=" flex items-center justify-end mt-4">
        <Select
          style={{ height: "30px" }}
          className="custom-select" // Use the custom class
          defaultValue="weekly"
          onChange={handleChange}
        >
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
          <Option value="yearly">Yearly</Option>
        </Select>
      </div>
      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} lg={16}>
          <Card
            className="bg-[#1f1f1f] border-0"
            title={
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">
                  Analytics
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center text-white space-x-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" fill="#DBBC7E" />
                    </svg>
                    <span>User</span>
                  </div>
                  <div className="flex items-center justify-center text-white space-x-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" fill="#00FF55" />
                    </svg>

                    <span>Order</span>
                  </div>
                </div>
              </div>
            }
          >
            <div className="h-[470px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analaticsData?.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month_name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Bar dataKey="total_orders" name="total_orders" fill="#DBBC7E" />
                  <Bar dataKey="total_users" name="total_users" fill="#00FF55" />
                  <Tooltip
                    cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} // Optional: Customize tooltip cursor
                    contentStyle={{
                      backgroundColor: "#333",
                      border: "none",
                      borderRadius: "8px",
                      color: "#fff",
                    }} // Optional: Tooltip styling
                    labelStyle={{ color: "#DBBC7E" }} // Customize label color
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>


          </Card>
        </Col>


        <Col xs={24} lg={8}>
          <Card
            className="bg-[#1f1f1f] border-0"
            title={<span className="text-white">Most earnings</span>}
          >

            <div className="h-[450px] relative">
                 <ResponsiveContainer width="100%" height={450}>
                <PieChart>
                  <Pie
                    data={earningdata}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                    label={({ value, x, y }) => (
                      <text
                        x={x}
                        y={y}
                        fill="#fff"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={12}
                      >
                        ${value.toLocaleString()}
                      </text>
                    )}
                    labelLine={false}
                  >
                    {earningdata.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>




              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="total-earnings text-lg font-semibold text-white">${mostEarningdata?.most_earning_month?.total_earnings}</p>
                <p className="growth-rate">
                  <span style={{ color: "#2ECC71" }}>▲ {mostEarningdata?.most_earning_month?.percentage}%</span>
                </p>
              </div>



            </div> 
        <div className="mt-4 grid grid-cols-1 gap-2">
       
                {/* {mostEarningdata?.most_earning_month?.map((entry, index) => (
                  <div key={index} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
                    <span className="legend-name">{entry}</span>
                  </div>
                ))} */}
        
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
