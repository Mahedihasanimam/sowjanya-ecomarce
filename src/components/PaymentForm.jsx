'use client'

import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { CreditCardOutlined } from '@ant-design/icons'

export function PaymentForm() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('All form values:', values)
      // Log individual values
      Object.entries(values).forEach(([key, value]) => {
        console.log(`${key}:`, value)
      })
    } finally {
      setLoading(false)
    }
  }

  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
  }

  const formatExpiration = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5)
  }

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-6"
        requiredMark={false}
      >
        <div>
          <h2 className="text-xl font-semibold mb-4">Card details</h2>
          <Form.Item
            name="cardNumber"
            rules={[
              { required: true, message: 'Please enter your card number' },
              { 
                pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/,
                message: 'Please enter a valid card number' 
              }
            ]}
          >
            <Input
             style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
              prefix={<CreditCardOutlined className="text-gray-400" />}
              placeholder="Card number"
              className="h-12 bg-gray-900 border-gray-700"
              onChange={e => {
                const formatted = formatCardNumber(e.target.value.replace(/\D/g, ''))
                form.setFieldValue('cardNumber', formatted)
              }}
              maxLength={19}
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="expiration"
              rules={[
                { required: true, message: 'Required' },
                { pattern: /^\d{2}\/\d{2}$/, message: 'Invalid format' }
              ]}
            >
              <Input
               style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                placeholder="Expiration"
                className="h-12 bg-gray-900 border-gray-700"
                onChange={e => {
                  const formatted = formatExpiration(e.target.value)
                  form.setFieldValue('expiration', formatted)
                }}
                maxLength={5}
              />
            </Form.Item>

            <Form.Item
              name="cvv"
              rules={[
                { required: true, message: 'Required' },
                { pattern: /^\d{3,4}$/, message: 'Invalid CVV' }
              ]}
            >
              <Input
               style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                placeholder="CVV"
                className="h-12 bg-gray-900 border-gray-700"
                maxLength={4}
              />
            </Form.Item>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Billing address</h2>
          <div className="space-y-4">
            <Form.Item
              name="streetAddress"
              rules={[{ required: true, message: 'Please enter your street address' }]}
            >
              <Input
              style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                placeholder="Street address"
                className="h-12  border-gray-700"
              />
            </Form.Item>

            <Form.Item
              name="city"
              rules={[{ required: true, message: 'Please enter your city' }]}
            >
              <Input
               style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                placeholder="City"
                className="h-12 bg-gray-900 border-gray-700"
              />
            </Form.Item>

            <Form.Item
              name="contactNumber"
              rules={[
                { required: true, message: 'Please enter your contact number' },
                { pattern: /^\d{10}$/, message: 'Please enter a valid phone number' }
              ]}
            >
              <Input
               style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                placeholder="Contact number"
                className="h-12 bg-gray-900 border-gray-700"
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="state"
                rules={[{ required: true, message: 'Required' }]}
              >
                <Input
                 style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                  placeholder="State"
                  className="h-12 bg-gray-900 border-gray-700"
                />
              </Form.Item>

              <Form.Item
                name="zipCode"
                rules={[
                  { required: true, message: 'Required' },
                  { pattern: /^\d{5}(-\d{4})?$/, message: 'Invalid ZIP code' }
                ]}
              >
                <Input
                 style={{backgroundColor:'#4545454D',color:'#FFFFFFCC',fontSize:'16px',fontWeight:'500'}}
                  placeholder="ZIP code"
                  className="h-12 bg-gray-900 border-gray-700"
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{backgroundColor:'#D5B98C'}}
            className="w-full h-12 bg-[#D5B98C] hover:bg-[#C5A97C] text-black font-medium"
          >
            Confirm & pay
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

