'use client'

import { useState } from 'react'
import { Form, Input, Checkbox, message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import signupimg from '../../../public/images/signupimg.png'
import logo from '../../../public/images/mainlogo.png'
import { useRouter } from 'next/navigation'
import { useForgetpasswordMutation } from '@/redux/features/users/UserApi'

export default function SignupPage() {
  const [form] = Form.useForm()
  const router = useRouter()

  const [forgetpassword]=useForgetpasswordMutation()
  const onFinish = async(values) => {
    console.log('Form values:', values)
    try {
      const respons =await forgetpassword(values).unwrap()
      console.log(respons)
      if(respons?.status==='success'){
        message.success(respons?.message)
        router.push(`/auth/otpverify?email=${encodeURIComponent(values?.email)}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 flex items-center justify-center flex-col">


        {/* Form Content */}
        <div className="max-w-md w-full mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Forgot password?    </h1>
            <p className="text-gray-400 mb-8">We’ll send a verification code to
              example@gmail.com email</p>

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



            <Form.Item>
              <button
                type="submit"
                className="w-full bg-[#D4B57E] hover:bg-[#C4A56E] text-black font-medium h-12 rounded transition-colors"
              >
                Submit
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

