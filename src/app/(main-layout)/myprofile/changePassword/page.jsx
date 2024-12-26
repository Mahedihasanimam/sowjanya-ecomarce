'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // Password visibility toggle
    const [visibleCurrent, setVisibleCurrent] = useState(false);
    const [visibleNew, setVisibleNew] = useState(false);
    const [visibleRewrite, setVisibleRewrite] = useState(false);
const router=useRouter()
    // Form submit handler
    const onFinish = (values) => {
        console.log('Password values:', values);
    };

    return (
        <div className="min-h-screen bg-primary text-white p-6">
            <div className="container mt-8 mx-auto">
                {/* Header */}
                <div className="flex items-center mb-8">
                    <div onClick={router.back()}  className="text-gray-400 hover:text-white">
                        <ArrowLeftOutlined className="text-xl" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-2xl font-semibold">Change Password</h1>
                        <p className="text-sm text-gray-500">
                            Update your account password
                        </p>
                    </div>
                </div>

                {/* Change Password Form */}
                <div className="max-w-xl mx-auto bg-[#343434] p-4 rounded-lg text-center">
                    <div className="py-2 pb-6 ">
                    <h2 className='text-4xl font-bold'>Change password</h2>
                    <p className='text-[#888888]'>Password should be match with current password</p>
                    </div>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                    >
                        {/* Current Password */}
                        <Form.Item
                            name="currentPassword"
                            label={<span className="text-white">Current Password</span>}
                            rules={[{ required: true, message: 'Please enter your current password' }]}
                        >
                            <Input.Password
                            style={{backgroundColor:'#8888884D'}}
                                placeholder="Enter current password"
                                className="h-12 bg-[#8888884D] text-white"
                                visibilityToggle={{
                                    visible: visibleCurrent,
                                    onVisibleChange: setVisibleCurrent,
                                }}
                                iconRender={(visible) =>
                                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                }
                            />
                        </Form.Item>

                        {/* New Password */}
                        <Form.Item
                            name="newPassword"
                            label={<span className="text-white">New Password</span>}
                            rules={[
                                { required: true, message: 'Please enter your new password' },
                                { min: 6, message: 'Password must be at least 6 characters long' },
                            ]}
                        >
                            <Input.Password
                             style={{backgroundColor:'#8888884D'}}
                                placeholder="Enter new password"
                                className="h-12  text-white"
                                visibilityToggle={{
                                    visible: visibleNew,
                                    onVisibleChange: setVisibleNew,
                                }}
                                iconRender={(visible) =>
                                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                }
                            />
                        </Form.Item>

                        {/* Rewrite New Password */}
                        <Form.Item
                            name="rewritePassword"
                            label={<span className="text-white">Rewrite New Password</span>}
                            dependencies={['newPassword']}
                            rules={[
                                { required: true, message: 'Please confirm your new password' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The two passwords do not match!')
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                             style={{backgroundColor:'#8888884D'}}
                                placeholder="Re-enter new password"
                                className="h-12  text-white"
                                visibilityToggle={{
                                    visible: visibleRewrite,
                                    onVisibleChange: setVisibleRewrite,
                                }}
                                iconRender={(visible) =>
                                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                }
                            />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                        <Button
                        style={{backgroundColor:'#DBBC7E'}}
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="w-full h-12 bg-[#D5B98C] hover:bg-[#C5A97C] text-black font-medium"
                        >
                            Save changes
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
