'use client'

import { useEffect, useState } from 'react'
import { Form, Input, Checkbox, message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import signupimg from '../../../public/images/forgetimg.png'
import logo from '../../../public/images/mainlogo.png'
import { useRouter, useSearchParams } from 'next/navigation'
import { useResetpasswordMutation } from '@/redux/features/users/UserApi'



export default function SigninPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const [resetpassword] = useResetpasswordMutation()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("");

 
  // Extract email from query parameters
  useEffect(() => {
    const queryEmail = searchParams.get("email");
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);
  const onFinish = async (values) => {

    // router.push('/')

    try {
      const allinfo = {
        email, // Ensure `email` is defined
        password: values?.password, // Use lowercase for consistency
        password_confirmation: values?.password_confirmation,
      };

      console.log('Form values:', allinfo)


      const respons = await resetpassword(allinfo).unwrap();
      console.log(respons)
      if (respons?.status === 'success') {
        message.success(respons?.message)
        router.push('/auth/signin')
      }


    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col">
        {/* Logo */}
        <div className="mb-4 mx-auto">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={200}
            className=" "
          />
        </div>

        {/* Form Content */}
        <div className="max-w-md w-full mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Create new password</h1>
            <p className="text-gray-400 mb-8">You have to create a new password after recovery</p>

          </div>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >



            <Form.Item
              name="password"
              label={<span className="text-white">Enter password</span>}
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters long!' },
              ]}
            >
              <Input.Password
                style={{ backgroundColor: '#8888884D', color: '#D1D1D1' }}
                placeholder="Enter password"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333]  h-12 rounded"
              />
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              label={<span className="text-white">Rewrite Password</span>}
              dependencies={['password']} // Ensures it reacts to changes in 'password'
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                style={{ backgroundColor: '#8888884D', color: '#D1D1D1' }}
                placeholder="Enter the same password again"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333]  h-12 rounded"
              />
            </Form.Item>



            <Form.Item>
              <button
                type="submit"
                className="w-full bg-[#D4B57E] hover:bg-[#C4A56E] text-black font-bold text-[16px] h-12 rounded transition-colors"
              >
                Confirm
              </button>
            </Form.Item>
          </Form>


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
  )
}

