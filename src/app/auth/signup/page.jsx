'use client'

import { useState } from 'react'
import { Form, Input, Checkbox, message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import signupimg from '../../../public/images/signupimg.png'
import logo from '../../../public/images/mainlogo.png'
import { useRegisterUserMutation } from '@/redux/features/users/UserApi'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [form] = Form.useForm()
  const router=useRouter()
const [registerUser]=useRegisterUserMutation()
  const onFinish = async(values) => {
    console.log('Form values:', values)
    const respons= await registerUser(values)
    console.log('response',respons)
    console.log('response',values?.email)
    if(respons?.data?.status==='success'){
      message.success(respons?.data?.message)
      router.push(`/auth/signup/otpverify?email=${encodeURIComponent(values?.email)}`)
    }
    if(respons?.error){
      message.error(respons?.error?.data?.message?.email[0])
     
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
    <h1 className="text-3xl font-bold text-white mb-2">Welcome!</h1>
          <p className="text-gray-400 mb-8">Give us some information to create the account</p>

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
              style={{backgroundColor:'#8888884D',color:'#D1D1D1'}}
                placeholder="test21@gmail.com"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333] text-white h-12 rounded"
              />
            </Form.Item>

            <Form.Item
              name="name"
              label={<span className="text-white">Name</span>}
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input 
               style={{backgroundColor:'#8888884D',color:'#D1D1D1'}}
                placeholder="Enter your full name"
                className="bg-[#1a1a1a] placeholder:text-[#888888] border-[#333] text-white h-12 rounded"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-white">Password</span>}
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password 
               style={{backgroundColor:'#8888884D',color:'#D1D1D1'}}
                placeholder="Enter password"
                className="bg-[#1a1a1a] placeholder:text-[#888888]  border-[#333]  h-12 rounded"
              />
            </Form.Item>

            <Form.Item
            
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('please review and accept the agreement to proceed with signing up')),
                },
              ]}
            >
              <Checkbox className="text-gray-400">
                By creating an account, you agree to the{' '}
                <Link href="/terms&conditions" className="text-[#D4B57E] hover:text-[#C4A56E]">
                  terms of conditions
                </Link>{' '}
                &{' '}
                <Link href="/privacy&policy" className="text-[#D4B57E] hover:text-[#C4A56E]">
                  privacy policy
                </Link>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="w-full bg-[#D4B57E] hover:bg-[#C4A56E] text-black font-medium h-12 rounded transition-colors"
              >
                Sign up
              </button>
            </Form.Item>
          </Form>

          <p className="text-gray-400 text-center mt-6">
            Have an account?{' '}
            <Link href="/auth/signin" className="text-[#D4B57E] hover:text-[#C4A56E]">
              Sign in
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

