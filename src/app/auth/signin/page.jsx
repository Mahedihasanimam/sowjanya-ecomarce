"use client";

import { Checkbox, Form, Input, message } from "antd";

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/mainlogo.png";
import { setUser } from "@/redux/features/users/userSlice";
import signupimg from "../../../public/images/loginimg.png";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/redux/features/users/UserApi";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const [form] = Form.useForm();
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  // console.log('user', user)

  const onFinish = async (values) => {
    console.log("Form values:", values);

    try {
      // Wait for the mutation to resolve
      const respons = await loginUser(values).unwrap();

      console.log("response", respons);

      // Check for success and handle navigation
      if (respons?.access_token) {
        message.success("login success");
        Cookies.set("role", respons?.user_information?.role);
        Cookies.set("token", respons?.access_token);
        dispatch(setUser(respons));
        console.log(respons);
        if (respons?.user_information?.role === "ADMIN") {
          return router.push("/dashboard");
        } else if (respons?.user_information?.role === "USER") {
          router.push("/");
        }
      }

      // Handle errors returned in the response
      if (respons?.error) {
        message.error(respons?.error?.error);
      }
    } catch (error) {
      // Catch and display any errors
      console.error("Error during login:", error);
      message.error(
        error?.data?.error ||
          "An error occurred during login. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col">
        {/* Logo */}
        <div className="mb-4 mx-auto">
          <Image src={logo} alt="Logo" width={200} height={200} className=" " />
        </div>

        {/* Form Content */}
        <div className="max-w-md w-full mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back!
            </h1>
            <p className="text-gray-400 mb-8">
              Please enter the below information to logged in.
            </p>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              name="email"
              label={<span className="text-white">Email</span>}
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{ backgroundColor: "#8888884D", color: "#D1D1D1" }}
                placeholder="test21@gmail.com"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333] text-white h-12 rounded"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-white">Password</span>}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                style={{ backgroundColor: "#8888884D", color: "#D1D1D1" }}
                placeholder="Enter password"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333]  h-12 rounded"
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <Form.Item valuePropName="Remember me">
                <Checkbox className="text-white font-medium">
                  Remember me
                </Checkbox>
              </Form.Item>

              <Link
                className="mb-3 text-secondary font-medium"
                href={"/auth/verifyemail"}
              >
                forgot password
              </Link>
            </div>

            <Form.Item>
              <button
                type="submit"
                className="w-full bg-[#D4B57E] hover:bg-[#C4A56E] text-black font-medium h-12 rounded transition-colors"
              >
                Log in
              </button>
            </Form.Item>
          </Form>

          <p className="text-gray-400 text-center mt-6">
            Don’t have an account?
            <Link
              href="/auth/signup"
              className="text-[#D4B57E] hover:text-[#C4A56E]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src={signupimg}
          alt="Fashion model"
          fill
          className="object-cover "
          priority
        />
      </div>
    </div>
  );
}
