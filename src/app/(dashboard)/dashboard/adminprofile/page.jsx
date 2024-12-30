
'use client';

import { useRef, useState } from 'react';
import { Form, Input, Button, message, Tabs } from 'antd';
import Image from 'next/image';
import { useGetadminProfileQuery, useUpdatePasswordMutation, useUpdateProfileMutation } from '@/redux/features/users/UserApi';
import avatar from '../../../../public/images/avater.png';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/features/users/userSlice';

export default function AdminProfile() {
  const [profileForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(avatar);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('1');

  const { data: admin } = useGetadminProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [resetpassword] = useUpdatePasswordMutation();
const dispatch=useDispatch()
  const onProfileFinish = async (values) => {


    const formData=new FormData();
    formData.append('name',values.name)
    formData.append('email',values.email)
    formData.append('contact',values.contact)
    formData.append('image',imageUrl)

    formData.forEach((value, key) => {
      console.log(key, value);
  });
    try {
      const response = await updateProfile(formData);
      console.log(response)
      if (response?.data?.status === 'success') {
        dispatch(setUser(response?.data?.user));
        message.success('Profile updated successfully');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to update profile');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    console.log('file', file)
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'];

      if (!allowedTypes.includes(file.type)) {
        setError('Please select a valid image file (jpeg, png, jpg, gif, webp, svg).');
        return;
      }

      setError('');
      setImageUrl(file); // Preview image immediately
      setPreviewUrl(URL.createObjectURL(file)); // Show preview after image is selected
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

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
            name: admin?.user?.name || 'John Doe',
            email: admin?.user?.email || 'example@gmail.com',
            contact: admin?.user?.contact || '+123456789',
            address: admin?.user?.address || '1234 Address St',
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input style={{ backgroundColor: '#201F1F', height: '44px',color:'white' }} placeholder="Enter your name" />
          </Form.Item>
          {/* <Form.Item
            label="Email"
            name="email"
          
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item> */}
          <Form.Item
            label="Contact"
            name="contact"
            rules={[{ required: true, message: 'Please enter your contact number!' }]}
          >
            <Input style={{ backgroundColor: '#201F1F', height: '44px',color:'white' }} placeholder="Enter your contact number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address!' }]}
          >
            <Input style={{ backgroundColor: '#201F1F', height: '44px',color:'white' }} placeholder="Enter your address" />
          </Form.Item>
          <Form.Item>
            <Button style={{ backgroundColor: '#DBBC7E', height: '44px', fontSize: '16px', fontWeight: '600' }}  htmlType="submit">
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
          onFinish={async (values) => {
            try {
              const response = await resetpassword(values);
              if (response?.data?.status === 'success') {
                message.success('Password updated successfully');

              } else {
                throw new Error('Failed to update password');
              }
            } catch (error) {
              console.error(error);
              message.error('Failed to update password');
            }
          }}
        >
          <Form.Item
            name="current_password"
            label={<span className="text-white">Your current password</span>}
            rules={[{ required: true, message: 'Please input your current password!' }]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{ backgroundColor: '#201F1F', height: '44px' }} />
          </Form.Item>
          <Form.Item
            name="new_password"
            label={<span className="text-white">New password</span>}
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{ backgroundColor: '#201F1F', height: '44px' }} />
          </Form.Item>
          <Form.Item
            name="new_password_confirmation"
            label={<span className="text-white">Confirm new password</span>}
            dependencies={['new_password']}
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password className="bg-zinc-800 border-zinc-700 text-white" style={{ backgroundColor: '#201F1F', height: '44px' }} />
          </Form.Item>


          <Form.Item>
            <Button style={{ backgroundColor: '#DBBC7E', height: '44px', fontSize: '16px', fontWeight: '600' }}  htmlType="submit">
              Update Password
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Admin Profile</h1>

        <div className="bg-zinc-900 rounded-lg mb-6 p-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full overflow-hidden cursor-pointer"
                onClick={triggerFileInput}
              >
                <Image
                  src={previewUrl || admin?.user?.image}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}





              <div onClick={triggerFileInput} className='absolute bottom-2 right-2 cursor-pointer'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9979 11.0157C18.9979 10.7866 19.0889 10.567 19.2509 10.405C19.4128 10.2431 19.6325 10.1521 19.8615 10.1521C20.0905 10.1521 20.3102 10.2431 20.4721 10.405C20.6341 10.567 20.725 10.7866 20.725 11.0157V20.5146C20.725 20.7437 20.6341 20.9633 20.4721 21.1252C20.3102 21.2872 20.0905 21.3782 19.8615 21.3782H0.863543C0.634517 21.3782 0.414872 21.2872 0.252926 21.1252C0.0909803 20.9633 0 20.7437 0 20.5146V1.51668C0 1.28765 0.0909803 1.06801 0.252926 0.906063C0.414872 0.744118 0.634517 0.653137 0.863543 0.653137H10.3625C10.5915 0.653137 10.8112 0.744118 10.9731 0.906063C11.1351 1.06801 11.2261 1.28765 11.2261 1.51668C11.2261 1.74571 11.1351 1.96535 10.9731 2.1273C10.8112 2.28924 10.5915 2.38022 10.3625 2.38022H1.72709V19.6511H18.9979V11.0157Z" fill="white"/>
<path d="M9.22786 12.1555L10.6527 11.9517L19.4056 3.2006C19.4881 3.12094 19.5538 3.02565 19.5991 2.9203C19.6444 2.81494 19.6682 2.70163 19.6692 2.58697C19.6702 2.47231 19.6483 2.3586 19.6049 2.25247C19.5615 2.14634 19.4974 2.04993 19.4163 1.96885C19.3352 1.88777 19.2388 1.82365 19.1327 1.78023C19.0265 1.73681 18.9128 1.71496 18.7982 1.71595C18.6835 1.71695 18.5702 1.74077 18.4648 1.78603C18.3595 1.83129 18.2642 1.89707 18.1845 1.97955L9.42992 10.7307L9.22613 12.1555H9.22786ZM20.6266 0.756774C20.8674 0.997358 21.0583 1.28302 21.1886 1.59744C21.3189 1.91186 21.386 2.24887 21.386 2.58921C21.386 2.92956 21.3189 3.26657 21.1886 3.58099C21.0583 3.8954 20.8674 4.18107 20.6266 4.42165L11.6717 13.3766C11.5396 13.5091 11.3681 13.5952 11.1829 13.6218L8.33322 14.0294C8.20042 14.0485 8.06499 14.0364 7.9377 13.994C7.8104 13.9516 7.69472 13.8801 7.59985 13.7853C7.50498 13.6904 7.43352 13.5747 7.39114 13.4474C7.34876 13.3201 7.33662 13.1847 7.35569 13.0519L7.76329 10.2022C7.78945 10.0172 7.8749 9.84573 8.00681 9.71344L16.9635 0.758501C17.4493 0.272833 18.1081 0 18.795 0C19.482 0 20.1408 0.272833 20.6266 0.758501V0.756774Z" fill="white"/>
</svg>


              </div>
            </div>
          </div>

          <h2 className="text-white text-xl text-center">{admin?.user?.name || 'John Doe'}</h2>
          <p className="text-gray-400 text-center">{admin?.user?.email || 'example@gmail.com'}</p>
        </div>

        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={items}
        />
      </div>
    </div>
  );
}
