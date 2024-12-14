'use client'

import { useState } from 'react'
import { Form, Input, Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import signupimg from '../../../public/images/loginimg.png'
import logo from '../../../public/images/mainlogo.png'
import { useRouter } from 'next/navigation'

export default function SigninPage() {
  const [form] = Form.useForm()
const router=useRouter()
  const onFinish = (values) => {
    console.log('Form values:', values)
    router.push('/')
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
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
            <p className="text-gray-400 mb-8">Please enter the below information to logged in.</p>

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
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                style={{ backgroundColor: '#8888884D', color: '#D1D1D1' }}
                placeholder="test21@gmail.com"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333] text-white h-12 rounded"
              />
            </Form.Item>


            <Form.Item
              name="password"
              label={<span className="text-white">Password</span>}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                style={{ backgroundColor: '#8888884D', color: '#D1D1D1' }}
                placeholder="Enter password"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333]  h-12 rounded"
              />
            </Form.Item>

            <div className='flex items-center justify-between'>
              <Form.Item

                name="Rememberme"
                valuePropName="Remember me"

              >
                <Checkbox className="text-white font-medium">
                  Remember me
                </Checkbox>
              </Form.Item>

              <Link className='mb-3 text-secondary font-medium' href={'/auth/otpverify'}>
                forget password
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
            <Link href="/auth/signup" className="text-[#D4B57E] hover:text-[#C4A56E]">
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
  )
}

