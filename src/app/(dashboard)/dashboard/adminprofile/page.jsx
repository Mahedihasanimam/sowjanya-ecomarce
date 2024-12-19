// 'use client'

// import { useState } from 'react'
// import { Form, Input, Button, message, Tabs } from 'antd'
// import Image from 'next/image'
// import { EditOutlined } from '@ant-design/icons'
// import avater from '../../../../public/images/Avater.png'
// export default function AdminProfile() {
//   const [profileForm] = Form.useForm()
//   const [passwordForm] = Form.useForm()
//   const [imageUrl, setImageUrl] = useState('/placeholder.svg')
//   const [activeTab, setActiveTab] = useState('1')

//   const onProfileFinish = (values) => {
//     console.log('Profile form values:', values)
//     message.success('Profile updated successfully')
//   }

//   const onPasswordChange = (values) => {
//     console.log('Password change values:', values)
//     message.success('Password changed successfully')
//     passwordForm.resetFields()
//   }

//   const items = [
//     {
//       key: '1',
//       label: 'Edit profile',
//       children: (
//         <Form
//           form={profileForm}
//           layout="vertical"
//           onFinish={onProfileFinish}
//           initialValues={{
//             name: 'Jhon Doe',
//             email: 'example@gmail.com',
//             contact: '+96589632147',
//             address: 'lorem ipsum dolor sit'
//           }}
//         >
//           <Form.Item
//             label={<span className="text-white">Name</span>}
//             name="name"
//           >
//             <Input 
//             style={{backgroundColor:'#201F1F',height:'44px'}}
//               className="bg-zinc-800 border-zinc-700 text-white" 
//               placeholder="Enter your name"
//             />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white">Email</span>}
//             name="email"
//           >
//             <Input 
//               style={{backgroundColor:'#201F1F',height:'44px'}}
//               className="bg-zinc-800 border-zinc-700 text-white" 
//               placeholder="Enter your email"
//             />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white">Contact info</span>}
//             name="contact"
//           >
//             <Input 
//               style={{backgroundColor:'#201F1F',height:'44px'}}
//               className="bg-zinc-800 border-zinc-700 text-white" 
//               placeholder="Enter your contact number"
//             />
//           </Form.Item>

//           <Form.Item
//             label={<span className="text-white">Address</span>}
//             name="address"
//           >
//             <Input 
//               style={{backgroundColor:'#201F1F',height:'44px'}}
//               className="bg-zinc-800 border-zinc-700 text-white" 
//               placeholder="Enter your address"
//             />
//           </Form.Item>

//           <Form.Item className="text-center">
//             <Button 
//               style={{backgroundColor:'#DBBC7E',height:'44px',fontSize:'16px',fontWeight:'600'}}
//               htmlType="submit"
//               className="bg-yellow-500 hover:bg-yellow-400 border-none text-black px-8"
//             >
//               Save
//             </Button>
//           </Form.Item>
//         </Form>
//       ),
//     },
//     {
//       key: '2',
//       label: 'Change Password',
//       children: (
//         <Form
//           form={passwordForm}
//           layout="vertical"
//           onFinish={onPasswordChange}
//         >
//           <Form.Item
//             name="currentPassword"
//             label={<span className="text-white">Your current password</span>}
//             rules={[{ required: true, message: 'Please input your current password!' }]}
//           >
//             <Input.Password className=""   style={{backgroundColor:'#201F1F',height:'44px'}} />
//           </Form.Item>
//           <Form.Item
//             name="newPassword"
//             label={<span className="text-white">New password</span>}
//             rules={[{ required: true, message: 'Please input your new password!' }]}
//           >
//             <Input.Password className="bg-zinc-800 border-zinc-700 text-white"   style={{backgroundColor:'#201F1F',height:'44px'}}/>
//           </Form.Item>
//           <Form.Item
//             name="confirmPassword"
//             label={<span className="text-white">Confirm new password</span>}
//             dependencies={['newPassword']}
//             rules={[
//               { required: true, message: 'Please confirm your new password!' },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue('newPassword') === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(new Error('The two passwords do not match!'));
//                 },
//               }),
//             ]}
//           >
//             <Input.Password className="bg-zinc-800 border-zinc-700 text-white"   style={{backgroundColor:'#201F1F',height:'44px'}} />
//           </Form.Item>
//           <Form.Item className="text-center">
//             <Button 
//             style={{backgroundColor:'#DBBC7E',height:'44px',fontSize:'16px',fontWeight:'600'}}
//               htmlType="submit"
//               className="bg-yellow-500 hover:bg-yellow-400 border-none text-black px-8"
//             >
//               Change Password
//             </Button>
//           </Form.Item>
//         </Form>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-white text-2xl font-bold mb-6">Admin profile</h1>
        
//         <div className="bg-zinc-900 rounded-lg  mb-6">
//           <div className="flex flex-col items-center mb-6">
//             <div className="relative">
//               <Image
//                 src={avater}
//                 alt="Profile"
//                 width={140}
//                 height={140}
//                 className="rounded-full"
//               />
//               <button 
//                 className="absolute bottom-0 right-0 bg-zinc-700 p-2 rounded-full"
//                 onClick={() => console.log('Edit image clicked')}
//               >
//                 <EditOutlined className="text-white" />
//               </button>
//             </div>
//             <h2 className="text-white text-xl mt-4">Jhon Doe</h2>
//             <p className="text-gray-400">example@gmail.com</p>
//           </div>

//           <Tabs 
//           style={{backgroundColor:'#000000'}}
//             activeKey={activeTab} 
//             onChange={setActiveTab}
//             items={items}
//             className="custom-tabs"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { Form, Input, Button, message, Tabs, Upload } from 'antd'
import Image from 'next/image'
import { EditOutlined, UploadOutlined } from '@ant-design/icons'
import avatar from '../../../../public/images/Avater.png'

export default function AdminProfile() {
  const [profileForm] = Form.useForm()
  const [passwordForm] = Form.useForm()
  const [imageUrl, setImageUrl] = useState(avatar)
  const [activeTab, setActiveTab] = useState('1')

  const onProfileFinish = (values) => {
    console.log('Profile form values:', values)
    message.success('Profile updated successfully')
  }

  const onPasswordChange = (values) => {
    console.log('Password change values:', values)
    message.success('Password changed successfully')
    passwordForm.resetFields()
  }

  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      setImageUrl(URL.createObjectURL(info.file.originFileObj))
      message.success('Profile picture updated successfully')
      console.log('Image upload info:', info.file)
    }
  }

  const items = [
    {
      key: '1',
      label: 'Edit profile',
      children: (
        <Form
          form={profileForm}
          layout="vertical"
          onFinish={onProfileFinish}
          initialValues={{
            name: 'Jhon Doe',
            email: 'example@gmail.com',
            contact: '+96589632147',
            address: 'lorem ipsum dolor sit'
          }}
        >
          <Form.Item
            label={<span className="text-white">Name</span>}
            name="name"
          >
            <Input 
              style={{backgroundColor:'#201F1F', height:'44px'}}
              className="bg-zinc-800 border-zinc-700 text-white" 
              placeholder="Enter your name"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Email</span>}
            name="email"
          >
            <Input 
              style={{backgroundColor:'#201F1F', height:'44px'}}
              className="bg-zinc-800 border-zinc-700 text-white" 
              placeholder="Enter your email"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Contact info</span>}
            name="contact"
          >
            <Input 
              style={{backgroundColor:'#201F1F', height:'44px'}}
              className="bg-zinc-800 border-zinc-700 text-white" 
              placeholder="Enter your contact number"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Address</span>}
            name="address"
          >
            <Input 
              style={{backgroundColor:'#201F1F', height:'44px'}}
              className="bg-zinc-800 border-zinc-700 text-white" 
              placeholder="Enter your address"
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button 
              style={{backgroundColor:'#DBBC7E', height:'44px', fontSize:'16px', fontWeight:'600'}}
              htmlType="submit"
              className="bg-yellow-500 hover:bg-yellow-400 border-none text-black px-8"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: '2',
      label: 'Change Password',
      children: (
        <Form
          form={passwordForm}
          layout="vertical"
          onFinish={onPasswordChange}
        >
          <Form.Item
            name="currentPassword"
            label={<span className="text-white">Your current password</span>}
            rules={[{ required: true, message: 'Please input your current password!' }]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{backgroundColor:'#201F1F', height:'44px'}} />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label={<span className="text-white">New password</span>}
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{backgroundColor:'#201F1F', height:'44px'}}/>
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={<span className="text-white">Confirm new password</span>}
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{backgroundColor:'#201F1F', height:'44px'}} />
          </Form.Item>
          <Form.Item className="text-center">
            <Button 
              style={{backgroundColor:'#DBBC7E', height:'44px', fontSize:'16px', fontWeight:'600'}}
              htmlType="submit"
              className="bg-yellow-500 hover:bg-yellow-400 border-none text-black px-8"
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Admin profile</h1>
        
        <div className="bg-zinc-900 rounded-lg mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <Image
                src={imageUrl}
                alt="Profile"
                width={140}
                height={140}
                className="rounded-full"
              />
              <Upload
                accept="image/*"
                showUploadList={false}
                onChange={handleImageUpload}
              >
                <button 
                  className="absolute bottom-[25px] right-0 bg-zinc-700 p-2 rounded-full"
                >
                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9979 11.0156C18.9979 10.7866 19.0889 10.5669 19.2509 10.405C19.4128 10.243 19.6325 10.1521 19.8615 10.1521C20.0905 10.1521 20.3102 10.243 20.4721 10.405C20.6341 10.5669 20.725 10.7866 20.725 11.0156V20.5146C20.725 20.7436 20.6341 20.9632 20.4721 21.1252C20.3102 21.2871 20.0905 21.3781 19.8615 21.3781H0.863543C0.634517 21.3781 0.414872 21.2871 0.252926 21.1252C0.0909803 20.9632 0 20.7436 0 20.5146V1.51662C0 1.28759 0.0909803 1.06795 0.252926 0.906002C0.414872 0.744057 0.634517 0.653076 0.863543 0.653076H10.3625C10.5915 0.653076 10.8112 0.744057 10.9731 0.906002C11.1351 1.06795 11.2261 1.28759 11.2261 1.51662C11.2261 1.74565 11.1351 1.96529 10.9731 2.12724C10.8112 2.28918 10.5915 2.38016 10.3625 2.38016H1.72709V19.651H18.9979V11.0156Z" fill="white"/>
<path d="M9.22761 12.1555L10.6525 11.9517L19.4053 3.2006C19.4878 3.12094 19.5536 3.02565 19.5989 2.9203C19.6441 2.81494 19.6679 2.70163 19.6689 2.58697C19.6699 2.47231 19.6481 2.3586 19.6047 2.25247C19.5612 2.14634 19.4971 2.04993 19.416 1.96885C19.335 1.88777 19.2385 1.82365 19.1324 1.78023C19.0263 1.73681 18.9126 1.71496 18.7979 1.71595C18.6833 1.71695 18.5699 1.74077 18.4646 1.78603C18.3592 1.83129 18.2639 1.89707 18.1843 1.97955L9.42968 10.7307L9.22588 12.1555H9.22761ZM20.6264 0.756774C20.8671 0.997358 21.0581 1.28302 21.1884 1.59744C21.3187 1.91186 21.3857 2.24887 21.3857 2.58921C21.3857 2.92956 21.3187 3.26657 21.1884 3.58099C21.0581 3.8954 20.8671 4.18107 20.6264 4.42165L11.6714 13.3766C11.5394 13.5091 11.3679 13.5952 11.1827 13.6218L8.33298 14.0294C8.20017 14.0485 8.06475 14.0364 7.93745 13.994C7.81015 13.9516 7.69448 13.8801 7.59961 13.7853C7.50473 13.6904 7.43327 13.5747 7.39089 13.4474C7.34851 13.3201 7.33638 13.1847 7.35545 13.0519L7.76304 10.2022C7.78921 10.0172 7.87466 9.84573 8.00656 9.71344L16.9632 0.758501C17.449 0.272833 18.1079 0 18.7948 0C19.4817 0 20.1406 0.272833 20.6264 0.758501V0.756774Z" fill="white"/>
</svg>

                </button>
              </Upload>
            </div>
            <h2 className="text-white text-xl mt-4">Jhon Doe</h2>
            <p className="text-gray-400">example@gmail.com</p>
          </div>

          <Tabs 
            style={{backgroundColor:'#000000'}}
            activeKey={activeTab} 
            onChange={setActiveTab}
            items={items}
            className="custom-tabs"
          />
        </div>
      </div>
    </div>
  )
}

