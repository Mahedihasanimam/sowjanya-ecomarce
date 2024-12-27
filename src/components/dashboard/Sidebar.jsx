"use client";

import { Dropdown, Layout, Menu } from "antd";

import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import avater from "../../public/images/avater.png";

const { Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/auth/signin";
      }
    });
  };

  const menus = (

    <Menu style={{ width: "200px" }}>
      <Menu.Item key="0">
        {" "}
        <Link
          className="flex items-center space-x-2 font-bold"
          href={"/dashboard/FAQ"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 7H11V5H9M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM9 15H11V9H9V15Z"
              fill="#D1D0D0"
            />
          </svg>
          <span>FAQ</span>
        </Link>{" "}
      </Menu.Item>
      <Menu.Item key="1">
        {" "}
        <Link
          className="flex items-center space-x-2 font-bold"
          href={"/dashboard/addaboutus"}
        >
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0003 6.2857C9.21171 6.2857 8.57171 6.9257 8.57171 7.71427V7.83655C8.57171 8.06388 8.4814 8.2819 8.32066 8.44265C8.15991 8.60339 7.94189 8.6937 7.71456 8.6937C7.48724 8.6937 7.26922 8.60339 7.10847 8.44265C6.94773 8.2819 6.85742 8.06388 6.85742 7.83655V7.71427C6.85742 6.88073 7.18854 6.08133 7.77794 5.49193C8.36734 4.90253 9.16674 4.57141 10.0003 4.57141H10.1329C10.7477 4.57169 11.3477 4.76023 11.8522 5.11167C12.3566 5.4631 12.7414 5.96058 12.9547 6.53721C13.1681 7.11384 13.1997 7.74197 13.0454 8.33712C12.8911 8.93227 12.5583 9.46591 12.0917 9.86627L11.2117 10.6206C11.1013 10.7164 11.0126 10.8347 10.9515 10.9675C10.8904 11.1003 10.8583 11.2446 10.8574 11.3908V12C10.8574 12.2273 10.7671 12.4453 10.6064 12.6061C10.4456 12.7668 10.2276 12.8571 10.0003 12.8571C9.77295 12.8571 9.55493 12.7668 9.39419 12.6061C9.23344 12.4453 9.14314 12.2273 9.14314 12V11.3908C9.14314 10.5943 9.49056 9.8377 10.0951 9.31998L10.9763 8.5657C11.1773 8.39336 11.3208 8.16358 11.3873 7.90726C11.4538 7.65095 11.4402 7.38041 11.3484 7.13205C11.2565 6.8837 11.0907 6.66944 10.8734 6.51813C10.6561 6.36681 10.3977 6.2857 10.1329 6.2857H10.0003ZM10.0003 15.7143C10.3034 15.7143 10.5941 15.5939 10.8084 15.3795C11.0227 15.1652 11.1431 14.8745 11.1431 14.5714C11.1431 14.2683 11.0227 13.9776 10.8084 13.7633C10.5941 13.549 10.3034 13.4286 10.0003 13.4286C9.69717 13.4286 9.40648 13.549 9.19216 13.7633C8.97783 13.9776 8.85742 14.2683 8.85742 14.5714C8.85742 14.8745 8.97783 15.1652 9.19216 15.3795C9.40648 15.5939 9.69717 15.7143 10.0003 15.7143Z"
              fill="#D1D0D0"
            />
            <path
              d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM10 1.71429C8.91191 1.71429 7.83446 1.9286 6.82919 2.345C5.82393 2.76139 4.91051 3.37172 4.14112 4.14112C3.37172 4.91052 2.76139 5.82393 2.345 6.82919C1.9286 7.83446 1.71429 8.91191 1.71429 10C1.71429 11.0881 1.9286 12.1655 2.345 13.1708C2.76139 14.1761 3.37172 15.0895 4.14112 15.8589C4.91051 16.6283 5.82393 17.2386 6.82919 17.655C7.83446 18.0714 8.91191 18.2857 10 18.2857C12.1975 18.2857 14.305 17.4128 15.8589 15.8589C17.4128 14.305 18.2857 12.1975 18.2857 10C18.2857 7.80249 17.4128 5.69499 15.8589 4.14112C14.305 2.58724 12.1975 1.71429 10 1.71429Z"
              fill="#D1D0D0"
            />
          </svg>
          <span> About us</span>{" "}
        </Link>{" "}
      </Menu.Item>
      <Menu.Item key="2">
        {" "}
        <Link
          className="flex items-center space-x-2 font-bold"
          href={"/dashboard/adminprofile"}
        >
          {" "}
          <svg
            width="25"
            height="13"
            viewBox="0 0 25 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.0128 7.49194C5.59831 7.49194 5.24797 7.34924 4.96176 7.06383C4.67555 6.77842 4.53245 6.42808 4.53245 6.01279C4.53245 5.59751 4.67555 5.24717 4.96176 4.96176C5.24797 4.67635 5.59831 4.53325 6.0128 4.53244C6.42728 4.53164 6.77762 4.67475 7.06383 4.96176C7.35004 5.24877 7.49315 5.59911 7.49315 6.01279C7.49315 6.42647 7.35004 6.77682 7.06383 7.06383C6.77762 7.35084 6.42728 7.49395 6.0128 7.49314M6.0128 12.0256C4.34765 12.0256 2.92943 11.4399 1.75814 10.2687C0.58685 9.09736 0.000802527 7.67874 8.2142e-07 6.01279C-0.000800885 4.34685 0.585246 2.92863 1.75814 1.75814C2.93104 0.58765 4.34926 0.00160341 6.0128 0C7.24742 0 8.36099 0.334712 9.35351 1.00414C10.346 1.67276 11.0704 2.54061 11.5265 3.60768H22.5949L25 6.01279L21.1602 9.80567L19.1015 8.25677L16.9284 9.85136L14.7891 8.41791H11.5265C11.0696 9.46975 10.3452 10.334 9.35351 11.0106C8.36179 11.6873 7.24823 12.0256 6.0128 12.0256ZM6.0128 10.823C7.19692 10.823 8.20707 10.4667 9.04325 9.75395C9.87943 9.04124 10.415 8.19504 10.6499 7.21535H15.1715L16.8911 8.37823L19.1255 6.77522L21.0748 8.24474L23.3068 6.01279L22.1042 4.81024H10.6499C10.4158 3.82975 9.88023 2.98355 9.04325 2.27163C8.20626 1.55972 7.19611 1.20336 6.0128 1.20256C4.68998 1.20256 3.55757 1.67356 2.61557 2.61557C1.67356 3.55757 1.20256 4.68998 1.20256 6.01279C1.20256 7.33561 1.67356 8.46802 2.61557 9.41002C3.55757 10.352 4.68998 10.823 6.0128 10.823Z"
              fill="#D1D0D0"
            />
          </svg>
          <span> Change password</span>
        </Link>{" "}
      </Menu.Item>

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
          <div className="min-h-[calc(100vh-410px)] overflow-y-auto bg-[#201F1F]">
            <Menu
              theme="dark"
              mode="inline"
              className="px-2 font-popins bg-[#201F1F] text-[16px] text-[#FFFFFF] font-bold space-y-4"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.7025 13.7838H16.0944C15.4835 13.7832 14.8974 14.0248 14.4645 14.4557C14.0315 14.8866 13.7872 15.4717 13.785 16.0825V20.6906C13.7847 20.994 13.8442 21.2944 13.9601 21.5747C14.0761 21.8551 14.2462 22.1098 14.4607 22.3243C14.6752 22.5388 14.9299 22.7089 15.2102 22.8248C15.4906 22.9408 15.791 23.0003 16.0944 23H20.7025C21.3131 22.9975 21.8978 22.753 22.3285 22.3201C22.7592 21.8872 23.0006 21.3012 23 20.6906V16.0825C23.0003 15.7807 22.9411 15.4818 22.8258 15.2029C22.7104 14.924 22.5412 14.6706 22.3278 14.4572C22.1144 14.2438 21.861 14.0746 21.5821 13.9592C21.3032 13.8439 21.0043 13.7847 20.7025 13.785M7.90562 13.7838H3.29751C2.68698 13.7872 2.10262 14.0322 1.67213 14.4651C1.24163 14.8981 0.999991 15.4838 1 16.0944V20.7025C0.999688 21.0043 1.0589 21.3032 1.17425 21.5821C1.2896 21.861 1.45882 22.1144 1.67223 22.3278C1.88564 22.5412 2.13904 22.7104 2.41792 22.8258C2.69681 22.9411 2.99571 23.0003 3.29751 23H7.90562C8.51625 23.0006 9.10223 22.7592 9.53512 22.3285C9.96801 21.8978 10.2125 21.3131 10.215 20.7025V16.0944C10.2153 15.791 10.1558 15.4906 10.0399 15.2102C9.92392 14.9299 9.75383 14.6752 9.53932 14.4607C9.32481 14.2462 9.07009 14.0761 8.78976 13.9601C8.50943 13.8442 8.20899 13.7847 7.90562 13.785M7.90562 1H3.29751C2.99571 0.999688 2.69681 1.0589 2.41792 1.17425C2.13904 1.2896 1.88564 1.45882 1.67223 1.67223C1.45882 1.88564 1.2896 2.13904 1.17425 2.41792C1.0589 2.69681 0.999688 2.99571 1 3.29751V7.90562C0.999367 8.51625 1.24084 9.10223 1.67151 9.53512C2.10217 9.96801 2.68689 10.2125 3.29751 10.215H7.90562C8.20899 10.2153 8.50943 10.1558 8.78976 10.0399C9.07009 9.92392 9.32481 9.75383 9.53932 9.53932C9.75383 9.32481 9.92392 9.07009 10.0399 8.78976C10.1558 8.50943 10.2153 8.20899 10.215 7.90562V3.29751C10.2125 2.68689 9.96801 2.10217 9.53512 1.67151C9.10223 1.24084 8.51625 0.999367 7.90562 1ZM20.7025 1H16.0944C15.4837 0.999367 14.8978 1.24084 14.4649 1.67151C14.032 2.10217 13.7875 2.68689 13.785 3.29751V7.90562C13.7853 8.51802 14.0287 9.10524 14.4617 9.53827C14.8948 9.9713 15.482 10.2147 16.0944 10.215H20.7025C21.3131 10.2125 21.8978 9.96801 22.3285 9.53512C22.7592 9.10223 23.0006 8.51625 23 7.90562V3.29751C23.0003 2.99571 22.9411 2.69681 22.8258 2.41792C22.7104 2.13904 22.5412 1.88564 22.3278 1.67223C22.1144 1.45882 21.861 1.2896 21.5821 1.17425C21.3032 1.0589 21.0043 0.999688 20.7025 1Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ),
                  label: (
                    <Link className="" href={`/dashboard`}>
                      {" "}
                      DASHBOARD
                    </Link>
                  ),
                },
                {
                  key: "2",
                  icon: (
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 0H0V6.6H1.1V18.7C1.1 19.2835 1.33178 19.8431 1.74436 20.2556C2.15694 20.6682 2.71652 20.9 3.3 20.9H18.7C19.2835 20.9 19.8431 20.6682 20.2556 20.2556C20.6682 19.8431 20.9 19.2835 20.9 18.7V6.6H22V0ZM2.2 2.2H19.8V4.4H2.2V2.2ZM18.7 18.7H3.3V6.6H18.7V18.7ZM5.5 14.795C5.5 14.264 5.71092 13.7548 6.08637 13.3794C6.46182 13.0039 6.97104 12.793 7.502 12.793H7.601C7.50898 12.3634 7.50544 11.9196 7.5906 11.4886C7.67576 11.0577 7.84784 10.6486 8.09633 10.2863C8.34483 9.924 8.66453 9.61615 9.03593 9.38151C9.40732 9.14686 9.82264 8.99035 10.2565 8.92151C10.6904 8.85268 11.1338 8.87297 11.5596 8.98114C11.9853 9.08931 12.3846 9.28309 12.733 9.55067C13.0815 9.81825 13.3717 10.154 13.5861 10.5375C13.8005 10.9209 13.9345 11.344 13.9799 11.781C14.5445 11.7697 15.0962 11.9502 15.545 12.2929C15.9939 12.6356 16.3133 13.1203 16.4511 13.6679C16.589 14.2155 16.5372 14.7937 16.3041 15.3081C16.071 15.8224 15.6705 16.2426 15.1679 16.5H6.457C6.1643 16.3221 5.92244 16.0717 5.75479 15.7731C5.58715 15.4744 5.49939 15.1375 5.5 14.795Z"
                        fill="white"
                      />
                    </svg>
                  ),
                  label: <Link href={`/dashboard/products`}>PRODUCTS</Link>,
                },
                {
                  key: "3",
                  icon: (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.04335 5.25432C7.45217 4.80353 7.72133 4.24374 7.81814 3.64293C7.91495 3.04212 7.83525 2.42612 7.58872 1.86973C7.34219 1.31334 6.93943 0.840483 6.42934 0.50858C5.91925 0.176677 5.32378 0 4.71521 0C4.10665 0 3.51117 0.176677 3.00108 0.50858C2.491 0.840483 2.08824 1.31334 1.8417 1.86973C1.59517 2.42612 1.51547 3.04212 1.61228 3.64293C1.70909 4.24374 1.97825 4.80353 2.38707 5.25432C2.26135 5.32033 2.14087 5.39157 2.02563 5.46805C1.30747 5.94735 0.847025 6.57436 0.559445 7.15424C0.216673 7.85272 0.0259934 8.61597 0 9.39359V12.5711C0 12.9879 0.165566 13.3876 0.460274 13.6823C0.754983 13.977 1.15469 14.1426 1.57148 14.1426H5.50016C5.77525 13.5844 6.13817 13.074 6.57505 12.6308L6.55462 12.5711H1.57148V9.42816C1.57148 9.42816 1.57148 6.28521 4.71443 6.28521C6.2969 6.28521 7.08264 7.08195 7.47236 7.8724C7.82595 7.47325 8.2471 7.13381 8.71854 6.87294C8.32209 6.18769 7.74182 5.62702 7.04335 5.25432ZM4.71443 4.71374C5.13121 4.71374 5.53092 4.54817 5.82563 4.25346C6.12034 3.95875 6.2859 3.55904 6.2859 3.14226C6.2859 2.72548 6.12034 2.32577 5.82563 2.03106C5.53092 1.73635 5.13121 1.57079 4.71443 1.57079C4.29764 1.57079 3.89793 1.73635 3.60322 2.03106C3.30852 2.32577 3.14295 2.72548 3.14295 3.14226C3.14295 3.55904 3.30852 3.95875 3.60322 4.25346C3.89793 4.54817 4.29764 4.71374 4.71443 4.71374ZM20.4292 14.1426H16.5005C16.2254 13.5844 15.8625 13.074 15.4256 12.6308L15.446 12.5711H20.4292V9.42816C20.4292 9.42816 20.4292 6.28521 17.2862 6.28521C15.7038 6.28521 14.918 7.08195 14.5283 7.8724C14.1728 7.47079 13.7513 7.13278 13.2821 6.87294C13.6786 6.18769 14.2588 5.62702 14.9573 5.25432C14.5485 4.80353 14.2793 4.24374 14.1825 3.64293C14.0857 3.04212 14.1654 2.42612 14.4119 1.86973C14.6585 1.31334 15.0612 0.840483 15.5713 0.50858C16.0814 0.176677 16.6769 0 17.2854 0C17.894 0 18.4895 0.176677 18.9996 0.50858C19.5097 0.840483 19.9124 1.31334 20.1589 1.86973C20.4055 2.42612 20.4852 3.04212 20.3884 3.64293C20.2916 4.24374 20.0224 4.80353 19.6136 5.25432C19.7393 5.32033 19.8598 5.39157 19.975 5.46805C20.6932 5.94735 21.1536 6.57436 21.4412 7.15424C21.7789 7.83558 21.9695 8.58035 22.0007 9.34016V12.5711C22.0007 12.9879 21.8351 13.3876 21.5404 13.6823C21.2457 13.977 20.846 14.1426 20.4292 14.1426ZM17.2862 4.71374C17.703 4.71374 18.1027 4.54817 18.3974 4.25346C18.6921 3.95875 18.8577 3.55904 18.8577 3.14226C18.8577 2.72548 18.6921 2.32577 18.3974 2.03106C18.1027 1.73635 17.703 1.57079 17.2862 1.57079C16.8694 1.57079 16.4697 1.73635 16.175 2.03106C15.8803 2.32577 15.7148 2.72548 15.7148 3.14226C15.7148 3.55904 15.8803 3.95875 16.175 4.25346C16.4697 4.54817 16.8694 4.71374 17.2862 4.71374Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.1435 10.9997C14.1435 11.8121 13.8355 12.5538 13.3295 13.1117C14.1213 13.5405 14.7601 14.205 15.1571 15.0132C15.5012 15.71 15.6914 16.4726 15.715 17.2494V20.4285C15.715 20.8453 15.5494 21.245 15.2547 21.5397C14.96 21.8344 14.5603 22 14.1435 22H7.85761C7.44083 22 7.04112 21.8344 6.74641 21.5397C6.4517 21.245 6.28613 20.8453 6.28613 20.4285V17.251C6.28689 17.1802 6.29003 17.1094 6.29556 17.0388C6.34697 16.334 6.53371 15.6458 6.84558 15.0116C7.24222 14.2037 7.8804 13.5392 8.67163 13.1101C8.32895 12.732 8.08349 12.2761 7.95649 11.7818C7.82949 11.2875 7.82475 10.7698 7.9427 10.2733C8.06064 9.77675 8.29771 9.31643 8.63343 8.93207C8.96914 8.54772 9.3934 8.25089 9.86954 8.06725C10.3457 7.8836 10.8594 7.81866 11.3662 7.87804C11.8731 7.93741 12.3579 8.11932 12.7787 8.40804C13.1995 8.69675 13.5437 9.0836 13.7815 9.53514C14.0192 9.98668 14.1435 10.4893 14.1435 10.9997ZM7.85761 17.2856V20.4285H14.1435V17.2856C14.1435 17.2856 14.1435 14.1426 11.0006 14.1426C7.85761 14.1426 7.85761 17.2856 7.85761 17.2856ZM12.572 10.9997C12.572 11.4164 12.4065 11.8161 12.1118 12.1109C11.8171 12.4056 11.4173 12.5711 11.0006 12.5711C10.5838 12.5711 10.1841 12.4056 9.88936 12.1109C9.59465 11.8161 9.42908 11.4164 9.42908 10.9997C9.42908 10.5829 9.59465 10.1832 9.88936 9.88846C10.1841 9.59375 10.5838 9.42818 11.0006 9.42818C11.4173 9.42818 11.8171 9.59375 12.1118 9.88846C12.4065 10.1832 12.572 10.5829 12.572 10.9997Z"
                        fill="white"
                      />
                    </svg>
                  ),
                  label: <Link href={`/dashboard/usermanagement`}>USERS</Link>,
                },
                // {
                //   key: "4",
                //   icon: (
                //     <svg
                //       width="24"
                //       height="24"
                //       viewBox="0 0 24 24"
                //       fill="none"
                //       xmlns="http://www.w3.org/2000/svg"
                //     >
                //       <mask
                //         id="path-1-outside-1_2228_196"
                //         maskUnits="userSpaceOnUse"
                //         x="0"
                //         y="0"
                //         width="24"
                //         height="24"
                //         fill="black"
                //       >
                //         <rect fill="white" width="24" height="24" />
                //         <path d="M6.1847 9.37877L11.3694 1L16.5554 9.38125L6.1847 9.37877ZM18.2991 22.9988C16.9829 22.9988 15.8704 22.5526 14.9615 21.6603C14.0527 20.768 13.5982 19.6747 13.5982 18.3803C13.5982 17.086 14.0527 15.9927 14.9615 15.1004C15.8704 14.2081 16.9829 13.7615 18.2991 13.7607C19.6154 13.7599 20.7279 14.2064 21.6367 15.1004C22.5456 15.9944 23 17.0877 23 18.3803C23 19.673 22.5456 20.7663 21.6367 21.6603C20.7279 22.5543 19.6154 23.0008 18.2991 23M1 22.3809V14.3798H9.13928V22.3809H1ZM18.2991 21.7618C19.2617 21.7618 20.0761 21.4349 20.7422 20.7812C21.4083 20.1274 21.7409 19.3271 21.74 18.3803C21.7392 17.4335 21.4066 16.6333 20.7422 15.9795C20.0778 15.3258 19.2634 14.9989 18.2991 14.9989C17.3348 14.9989 16.5205 15.3258 15.8561 15.9795C15.1917 16.6333 14.859 17.4335 14.8582 18.3803C14.8574 19.3271 15.19 20.1274 15.8561 20.7812C16.5222 21.4349 17.3365 21.7618 18.2991 21.7618ZM2.25995 21.1427H7.87933V15.618H2.25995V21.1427ZM8.37953 8.14183H14.3593L11.3694 3.43179L8.37953 8.14183Z" />
                //       </mask>
                //       <path
                //         d="M6.1847 9.37877L11.3694 1L16.5554 9.38125L6.1847 9.37877ZM18.2991 22.9988C16.9829 22.9988 15.8704 22.5526 14.9615 21.6603C14.0527 20.768 13.5982 19.6747 13.5982 18.3803C13.5982 17.086 14.0527 15.9927 14.9615 15.1004C15.8704 14.2081 16.9829 13.7615 18.2991 13.7607C19.6154 13.7599 20.7279 14.2064 21.6367 15.1004C22.5456 15.9944 23 17.0877 23 18.3803C23 19.673 22.5456 20.7663 21.6367 21.6603C20.7279 22.5543 19.6154 23.0008 18.2991 23M1 22.3809V14.3798H9.13928V22.3809H1ZM18.2991 21.7618C19.2617 21.7618 20.0761 21.4349 20.7422 20.7812C21.4083 20.1274 21.7409 19.3271 21.74 18.3803C21.7392 17.4335 21.4066 16.6333 20.7422 15.9795C20.0778 15.3258 19.2634 14.9989 18.2991 14.9989C17.3348 14.9989 16.5205 15.3258 15.8561 15.9795C15.1917 16.6333 14.859 17.4335 14.8582 18.3803C14.8574 19.3271 15.19 20.1274 15.8561 20.7812C16.5222 21.4349 17.3365 21.7618 18.2991 21.7618ZM2.25995 21.1427H7.87933V15.618H2.25995V21.1427ZM8.37953 8.14183H14.3593L11.3694 3.43179L8.37953 8.14183Z"
                //         fill="white"
                //       />
                //       <path
                //         d="M6.1847 9.37877L5.75952 9.11567L5.28745 9.87855L6.18458 9.87877L6.1847 9.37877ZM11.3694 1L11.7946 0.736912L11.3694 0.0497658L10.9442 0.736902L11.3694 1ZM16.5554 9.38125L16.5552 9.88125L17.4528 9.88146L16.9805 9.11816L16.5554 9.38125ZM1 22.3809H0.5V22.8809H1V22.3809ZM1 14.3798V13.8798H0.5V14.3798H1ZM9.13928 14.3798H9.63928V13.8798H9.13928V14.3798ZM9.13928 22.3809V22.8809H9.63928V22.3809H9.13928ZM18.2991 21.7618V22.2618V21.7618ZM2.25995 21.1427H1.75995V21.6427H2.25995V21.1427ZM7.87933 21.1427V21.6427H8.37933V21.1427H7.87933ZM7.87933 15.618H8.37933V15.118H7.87933V15.618ZM2.25995 15.618V15.118H1.75995V15.618H2.25995ZM8.37953 8.14183L7.9574 7.87386L7.46991 8.64183H8.37953V8.14183ZM14.3593 8.14183V8.64183H15.2689L14.7814 7.87386L14.3593 8.14183ZM11.3694 3.43179L11.7915 3.16382L11.3694 2.49882L10.9473 3.16382L11.3694 3.43179ZM6.60988 9.64187L11.7946 1.2631L10.9442 0.736902L5.75952 9.11567L6.60988 9.64187ZM10.9442 1.26309L16.1302 9.64433L16.9805 9.11816L11.7946 0.736912L10.9442 1.26309ZM16.5555 8.88125L6.18482 8.87877L6.18458 9.87877L16.5552 9.88125L16.5555 8.88125ZM18.2991 22.4988C17.109 22.4988 16.1237 22.1007 15.3118 21.3035L14.6112 22.0171C15.617 23.0045 16.8568 23.4988 18.2991 23.4988V22.4988ZM15.3118 21.3035C14.5005 20.5069 14.0982 19.5429 14.0982 18.3803H13.0982C13.0982 19.8064 13.6049 21.029 14.6112 22.0171L15.3118 21.3035ZM14.0982 18.3803C14.0982 17.2178 14.5005 16.2538 15.3118 15.4572L14.6112 14.7436C13.6049 15.7317 13.0982 16.9543 13.0982 18.3803H14.0982ZM15.3118 15.4572C16.1238 14.6599 17.1092 14.2614 18.2994 14.2607L18.2988 13.2607C16.8565 13.2616 15.6169 13.7562 14.6112 14.7436L15.3118 15.4572ZM18.2994 14.2607C19.4891 14.2599 20.4742 14.6582 21.2861 15.4569L21.9874 14.7439C20.9816 13.7546 19.7416 13.2598 18.2988 13.2607L18.2994 14.2607ZM21.2861 15.4569C22.0979 16.2554 22.5 17.2196 22.5 18.3803H23.5C23.5 16.9558 22.9933 15.7334 21.9874 14.7439L21.2861 15.4569ZM22.5 18.3803C22.5 19.5411 22.0979 20.5053 21.2861 21.3038L21.9874 22.0167C22.9933 21.0273 23.5 19.8049 23.5 18.3803H22.5ZM21.2861 21.3038C20.4742 22.1024 19.4891 22.5007 18.2994 22.5L18.2988 23.5C19.7416 23.5009 20.9816 23.0061 21.9874 22.0167L21.2861 21.3038ZM1.5 22.3809V14.3798H0.5V22.3809H1.5ZM1 14.8798H9.13928V13.8798H1V14.8798ZM8.63928 14.3798V22.3809H9.63928V14.3798H8.63928ZM9.13928 21.8809H1V22.8809H9.13928V21.8809ZM18.2991 22.2618C19.3881 22.2618 20.3296 21.8867 21.0924 21.138L20.3919 20.4243C19.8225 20.9832 19.1353 21.2618 18.2991 21.2618V22.2618ZM21.0924 21.138C21.8559 20.3886 22.241 19.4589 22.24 18.3799L21.24 18.3808C21.2408 19.1954 20.9606 19.8662 20.3919 20.4243L21.0924 21.138ZM22.24 18.3799C22.2391 17.3016 21.8544 16.3724 21.0929 15.6231L20.3915 16.3359C20.9588 16.8941 21.2393 17.5655 21.24 18.3808L22.24 18.3799ZM21.0929 15.6231C20.3314 14.8738 19.3896 14.4989 18.2991 14.4989V15.4989C19.1372 15.4989 19.8241 15.7777 20.3915 16.3359L21.0929 15.6231ZM18.2991 14.4989C17.2087 14.4989 16.2669 14.8738 15.5054 15.6231L16.2068 16.3359C16.7741 15.7777 17.461 15.4989 18.2991 15.4989V14.4989ZM15.5054 15.6231C14.7439 16.3724 14.3592 17.3016 14.3582 18.3799L15.3582 18.3808C15.3589 17.5655 15.6394 16.8941 16.2068 16.3359L15.5054 15.6231ZM14.3582 18.3799C14.3572 19.4589 14.7423 20.3886 15.5058 21.138L16.2063 20.4243C15.6377 19.8662 15.3575 19.1954 15.3582 18.3808L14.3582 18.3799ZM15.5058 21.138C16.2686 21.8867 17.2101 22.2618 18.2991 22.2618V21.2618C17.4629 21.2618 16.7757 20.9832 16.2063 20.4243L15.5058 21.138ZM2.25995 21.6427H7.87933V20.6427H2.25995V21.6427ZM8.37933 21.1427V15.618H7.37933V21.1427H8.37933ZM7.87933 15.118H2.25995V16.118H7.87933V15.118ZM1.75995 15.618V21.1427H2.75995V15.618H1.75995ZM8.37953 8.64183H14.3593V7.64183H8.37953V8.64183ZM14.7814 7.87386L11.7915 3.16382L10.9473 3.69975L13.9371 8.40979L14.7814 7.87386ZM10.9473 3.16382L7.9574 7.87386L8.80166 8.40979L11.7915 3.69975L10.9473 3.16382Z"
                //         fill="white"
                //         mask="url(#path-1-outside-1_2228_196)"
                //       />
                //     </svg>
                //   ),
                //   label: <Link href={`/dashboard/category`}>CATEGORY</Link>,
                // },

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
                  label: (
                    <Dropdown
                      overlayStyle={{
                        width: "fit-content",
                        backgroundColor: "#2B2B2B",
                        borderRadius: "10px",
                      }}
                      overlay={menus}
                      trigger={["click"]}
                    >
                      <p> Seetings</p>
                    </Dropdown>
                  ),
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
                <h1
                  className={`text-secondaryTitle text-sm font-work font-bold ${
                    collapsed ? "hidden" : ""
                  }`}
                >
                  Jenny
                </h1>
                <span
                  className={`text-[#FFFFFFB2] text-xs font-nunito font-semibold ${
                    collapsed ? "hidden" : ""
                  }`}
                >
                  jenny@gmail.com
                </span>
              </div>
            </div>
            <button onClick={handleLogout}>
              {" "}
              <svg
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
              </svg>
            </button>
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
