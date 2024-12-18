'use client'
import { Dropdown, Layout, Menu } from "antd";

const { Sider } = Layout;

import avater from "../../public/images/avater.png";
import Swal from "sweetalert2";
import { EditOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons';
import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    const handleLogout=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.clear();
              window.location.href = "/login";
            }
          })
    }

    const menus = (
        <Menu>
          <Menu.Item key="0"> <Link href={"/personalinfo"}><UserOutlined className="pr-2" />Personal information</Link> </Menu.Item>
          <Menu.Item key="1"> <Link href={"/security"}	> <SecurityScanOutlined className="pr-2"/> Security </Link> </Menu.Item>
          <Menu.Item key="2"> <Link href={"/FAQ"}>FAQ</Link> </Menu.Item>
          <Menu.Item key="3"> <Link href={"/terms&conditions"}	>  terms&conditions </Link> </Menu.Item>
          <Menu.Item key="4"> <Link href={"/roomBookingHelp"}	> roomBookingHelps </Link> </Menu.Item>
      
  </Menu>

      );
  return (
    <div className="fixed top-16 left-0 bottom-0 font-popins bg-[#201F1F] rounded-[50px]">
      <Sider
        className=" bg-[#201F1F] h-[100vh] w-[300px] rounded-lg"
        width={270}
        collapsedWidth={80}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
   
        <div className="flex-col items-center justify-between pt-6">
          <div  className="min-h-[calc(100vh-410px)] overflow-y-auto bg-[#201F1F]">
          <Menu
            theme="dark"
            mode="inline"
            className="px-2 font-popins bg-[#201F1F] text-[16px] text-[#FFFFFF] font-bold"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7025 13.7838H16.0944C15.4835 13.7832 14.8974 14.0248 14.4645 14.4557C14.0315 14.8866 13.7872 15.4717 13.785 16.0825V20.6906C13.7847 20.994 13.8442 21.2944 13.9601 21.5747C14.0761 21.8551 14.2462 22.1098 14.4607 22.3243C14.6752 22.5388 14.9299 22.7089 15.2102 22.8248C15.4906 22.9408 15.791 23.0003 16.0944 23H20.7025C21.3131 22.9975 21.8978 22.753 22.3285 22.3201C22.7592 21.8872 23.0006 21.3012 23 20.6906V16.0825C23.0003 15.7807 22.9411 15.4818 22.8258 15.2029C22.7104 14.924 22.5412 14.6706 22.3278 14.4572C22.1144 14.2438 21.861 14.0746 21.5821 13.9592C21.3032 13.8439 21.0043 13.7847 20.7025 13.785M7.90562 13.7838H3.29751C2.68698 13.7872 2.10262 14.0322 1.67213 14.4651C1.24163 14.8981 0.999991 15.4838 1 16.0944V20.7025C0.999688 21.0043 1.0589 21.3032 1.17425 21.5821C1.2896 21.861 1.45882 22.1144 1.67223 22.3278C1.88564 22.5412 2.13904 22.7104 2.41792 22.8258C2.69681 22.9411 2.99571 23.0003 3.29751 23H7.90562C8.51625 23.0006 9.10223 22.7592 9.53512 22.3285C9.96801 21.8978 10.2125 21.3131 10.215 20.7025V16.0944C10.2153 15.791 10.1558 15.4906 10.0399 15.2102C9.92392 14.9299 9.75383 14.6752 9.53932 14.4607C9.32481 14.2462 9.07009 14.0761 8.78976 13.9601C8.50943 13.8442 8.20899 13.7847 7.90562 13.785M7.90562 1H3.29751C2.99571 0.999688 2.69681 1.0589 2.41792 1.17425C2.13904 1.2896 1.88564 1.45882 1.67223 1.67223C1.45882 1.88564 1.2896 2.13904 1.17425 2.41792C1.0589 2.69681 0.999688 2.99571 1 3.29751V7.90562C0.999367 8.51625 1.24084 9.10223 1.67151 9.53512C2.10217 9.96801 2.68689 10.2125 3.29751 10.215H7.90562C8.20899 10.2153 8.50943 10.1558 8.78976 10.0399C9.07009 9.92392 9.32481 9.75383 9.53932 9.53932C9.75383 9.32481 9.92392 9.07009 10.0399 8.78976C10.1558 8.50943 10.2153 8.20899 10.215 7.90562V3.29751C10.2125 2.68689 9.96801 2.10217 9.53512 1.67151C9.10223 1.24084 8.51625 0.999367 7.90562 1ZM20.7025 1H16.0944C15.4837 0.999367 14.8978 1.24084 14.4649 1.67151C14.032 2.10217 13.7875 2.68689 13.785 3.29751V7.90562C13.7853 8.51802 14.0287 9.10524 14.4617 9.53827C14.8948 9.9713 15.482 10.2147 16.0944 10.215H20.7025C21.3131 10.2125 21.8978 9.96801 22.3285 9.53512C22.7592 9.10223 23.0006 8.51625 23 7.90562V3.29751C23.0003 2.99571 22.9411 2.69681 22.8258 2.41792C22.7104 2.13904 22.5412 1.88564 22.3278 1.67223C22.1144 1.45882 21.861 1.2896 21.5821 1.17425C21.3032 1.0589 21.0043 0.999688 20.7025 1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                ),
                label: (
                  <Link  className="" href={`/dashboard`}>
                    {" "}
                    DASHBOARD
                  </Link>
                ),
              },
              {
                key: "2",
                icon: (
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 0H0V6.6H1.1V18.7C1.1 19.2835 1.33178 19.8431 1.74436 20.2556C2.15694 20.6682 2.71652 20.9 3.3 20.9H18.7C19.2835 20.9 19.8431 20.6682 20.2556 20.2556C20.6682 19.8431 20.9 19.2835 20.9 18.7V6.6H22V0ZM2.2 2.2H19.8V4.4H2.2V2.2ZM18.7 18.7H3.3V6.6H18.7V18.7ZM5.5 14.795C5.5 14.264 5.71092 13.7548 6.08637 13.3794C6.46182 13.0039 6.97104 12.793 7.502 12.793H7.601C7.50898 12.3634 7.50544 11.9196 7.5906 11.4886C7.67576 11.0577 7.84784 10.6486 8.09633 10.2863C8.34483 9.924 8.66453 9.61615 9.03593 9.38151C9.40732 9.14686 9.82264 8.99035 10.2565 8.92151C10.6904 8.85268 11.1338 8.87297 11.5596 8.98114C11.9853 9.08931 12.3846 9.28309 12.733 9.55067C13.0815 9.81825 13.3717 10.154 13.5861 10.5375C13.8005 10.9209 13.9345 11.344 13.9799 11.781C14.5445 11.7697 15.0962 11.9502 15.545 12.2929C15.9939 12.6356 16.3133 13.1203 16.4511 13.6679C16.589 14.2155 16.5372 14.7937 16.3041 15.3081C16.071 15.8224 15.6705 16.2426 15.1679 16.5H6.457C6.1643 16.3221 5.92244 16.0717 5.75479 15.7731C5.58715 15.4744 5.49939 15.1375 5.5 14.795Z" fill="white"/>
                    </svg>
                    
                ),
                label: <Link href={`/dashboard/products`}>PRODUCTS</Link>,
              },
              {
                key: "3",
                icon: (
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 0.572266C0.671573 0.572266 0 1.24384 0 2.07227V4.07227C0 4.90069 0.671573 5.57227 1.5 5.57227H3.5C4.32843 5.57227 5 4.90069 5 4.07227V2.07227C5 1.24384 4.32843 0.572266 3.5 0.572266H1.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M7 3.57227H15V2.57227H7V3.57227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M1.5 8.57227C0.671573 8.57227 0 9.24384 0 10.0723V12.0723C0 12.9007 0.671573 13.5723 1.5 13.5723H3.5C4.32843 13.5723 5 12.9007 5 12.0723V10.0723C5 9.24384 4.32843 8.57227 3.5 8.57227H1.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M7 11.5723H15V10.5723H7V11.5723Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: (
                  <Link href={`/CategoryManagement`}>Category Management</Link>
                ),
              },
              {
                key: "4",
                icon: (
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.875 11.6973V6.69727H0.875V5.44727H5.875V0.447266H7.125V5.44727H12.125V6.69727H7.125V11.6973H5.875Z"      fill="white"
                      fill-opacity="0.8"/>
                  </svg>
                  
                ),
                label: (
                  <Link href={`/propertys`}>propertys</Link>
                ),
              },




              {
                key: "5",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 6.07227C5 4.69155 6.11929 3.57227 7.5 3.57227C8.88071 3.57227 10 4.69155 10 6.07227C10 7.45298 8.88071 8.57227 7.5 8.57227C6.11929 8.57227 5 7.45298 5 6.07227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.5 0.572266C3.35786 0.572266 0 3.93013 0 8.07227C0 12.2144 3.35786 15.5723 7.5 15.5723C11.6421 15.5723 15 12.2144 15 8.07227C15 3.93013 11.6421 0.572266 7.5 0.572266ZM1 8.07227C1 4.48241 3.91015 1.57227 7.5 1.57227C11.0899 1.57227 14 4.48241 14 8.07227C14 9.92183 13.2275 11.591 11.9875 12.7746C11.8365 10.9809 10.3328 9.57227 8.5 9.57227H6.5C4.66724 9.57227 3.16345 10.9809 3.01247 12.7746C1.77251 11.591 1 9.92183 1 8.07227Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link href={`/manageusers`}>Manage Users</Link>,
              },
              {
                key: "6",
                icon: (
                  <svg
                    width="9"
                    height="11"
                    viewBox="0 0 9 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.49125 0.438516C0.125 0.804766 0.125 1.39352 0.125 2.57227V8.19727C0.125 9.37602 0.125 9.96477 0.49125 10.331C0.8575 10.6973 1.44625 10.6973 2.625 10.6973H6.375C7.55375 10.6973 8.1425 10.6973 8.50875 10.331C8.875 9.96477 8.875 9.37602 8.875 8.19727V2.57227C8.875 1.39352 8.875 0.804766 8.50875 0.438516C8.1425 0.0722656 7.55375 0.0722656 6.375 0.0722656H2.625C1.44625 0.0722656 0.8575 0.0722656 0.49125 0.438516ZM2.625 2.57227C2.45924 2.57227 2.30027 2.63811 2.18306 2.75532C2.06585 2.87253 2 3.03151 2 3.19727C2 3.36303 2.06585 3.522 2.18306 3.63921C2.30027 3.75642 2.45924 3.82227 2.625 3.82227H6.375C6.54076 3.82227 6.69973 3.75642 6.81694 3.63921C6.93415 3.522 7 3.36303 7 3.19727C7 3.03151 6.93415 2.87253 6.81694 2.75532C6.69973 2.63811 6.54076 2.57227 6.375 2.57227H2.625ZM2.625 5.07227C2.45924 5.07227 2.30027 5.13811 2.18306 5.25532C2.06585 5.37253 2 5.53151 2 5.69727C2 5.86303 2.06585 6.022 2.18306 6.13921C2.30027 6.25642 2.45924 6.32227 2.625 6.32227H6.375C6.54076 6.32227 6.69973 6.25642 6.81694 6.13921C6.93415 6.022 7 5.86303 7 5.69727C7 5.53151 6.93415 5.37253 6.81694 5.25532C6.69973 5.13811 6.54076 5.07227 6.375 5.07227H2.625ZM2.625 7.57227C2.45924 7.57227 2.30027 7.63811 2.18306 7.75532C2.06585 7.87253 2 8.03151 2 8.19727C2 8.36303 2.06585 8.522 2.18306 8.63921C2.30027 8.75642 2.45924 8.82227 2.625 8.82227H5.125C5.29076 8.82227 5.44973 8.75642 5.56694 8.63921C5.68415 8.522 5.75 8.36303 5.75 8.19727C5.75 8.03151 5.68415 7.87253 5.56694 7.75532C5.44973 7.63811 5.29076 7.57227 5.125 7.57227H2.625Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: (
                  <Link href={`/bookingmanagement`}>Booking Management</Link>
                ),
              },
              {
                key: "7",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 2.57227C14.3284 2.57227 15 3.24384 15 4.07227V5.57227H0V4.07227C0 3.24384 0.671573 2.57227 1.5 2.57227H13.5Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6.57227V12.0723C0 12.9007 0.671573 13.5723 1.5 13.5723L13.5 13.5723C14.3284 13.5723 15 12.9007 15 12.0723V6.57227H0ZM2 10.5723H8V9.57227H2V10.5723ZM13 10.5723H10V9.57227H13V10.5723Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label: <Link href={`/transactions`}>Transactions</Link>,
              },
             
              { 
                key: "8",
                icon: (
                  <EditOutlined />
                ),
                label: <Link href={`/editcontent`}>Edit-Content</Link>,
              },
              {
                key: "9",
                icon: (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 0.572266L3 8.62227C1.85888 8.85391 1 9.86279 1 11.0723C1 12.2817 1.85888 13.2906 3 13.5223V15.5723H4V13.5223C5.14112 13.2906 6 12.2817 6 11.0723C6 9.86279 5.14112 8.85391 4 8.62227L4 0.572266H3Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M11 0.572266L11 2.62227C9.85888 2.85391 9 3.86279 9 5.07227C9 6.28174 9.85888 7.29062 11 7.52226V15.5723H12V7.52226C13.1411 7.29062 14 6.28174 14 5.07227C14 3.86279 13.1411 2.85391 12 2.62227L12 0.572266H11Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                ),
                label:  <Dropdown  overlayStyle={{width: 'fit-content',backgroundColor:'#2B2B2B',borderRadius:'10px'}} overlay={menus} trigger={['click']}>
               <p>   Seetings</p>
               </Dropdown>,
              },
            ]}
          />
          </div>

          <div className="flex flex-row items-center justify-around mt-44    ">
            <div
              className="flex flex-row items-center gap-2 text-white  "
              role="menuitem"
            >
              <Image
              
                src={avater}
                alt="avatar"
                className="w-10 h-10 rounded-2xl"
              />
              <div>
                <h1 className={`text-secondaryTitle text-sm font-work font-bold ${collapsed ? "hidden" : ""}`}>
                  Jenny
                </h1>
                <span  className={`text-[#FFFFFFB2] text-xs font-nunito font-semibold ${collapsed? "hidden" : ""}`}>
                  jenny@gmail.com
                </span>
              </div>
            </div>
           <button onClick={handleLogout}> <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 7L9.5 10.25M12.5 7L9.5 4M12.5 7L3 7M7 13L0.5 13L0.500001 1L7 1"
                stroke="#D34635"
              />
            </svg></button>
          </div>

        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
