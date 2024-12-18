'use client'

import { useState } from 'react'
import { Table, Input, Button, Select } from 'antd'
import { SearchOutlined, EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import tableimg from '../../../../public/images/tableavtar.png'

const { Search } = Input

// Generate 50 products for pagination demo
const allProducts = Array.from({ length: 20 }, (_, i) => ({
  key: i + 1,
  srNo: i + 1,
  name: 'Celestial Charm Dress',
  price: 560.00,
  quantity: 1500,
  sale: 188,
  stock: i % 3 === 2 ? 'Out of stock' : 'In stock',
  image: tableimg
}))

export default function ProductTable() {
  const [products, setProducts] = useState(allProducts)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: allProducts.length,
  })

  const columns = [
    {
      title: 'Sr. no.',
      dataIndex: 'srNo',
      key: 'srNo',
      width: 70,
    },
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <Image
            src={record.image}
            alt={text}
            width={40}
            height={40}
            className="rounded-sm object-cover"
          />
          <span className='text-[16px] font-medium text-[#D1D0D0]'>{text}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <span className='text-[#DBBC7E] text-[16px] font-medium'>{price.toFixed(2)}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity) => <span className='text-[#D1D0D0] text-[16px] font-medium'>{quantity}</span>,
    },
    {
      title: 'Sale',
      dataIndex: 'sale',
      key: 'sale',
      render: (sale) => <span className='text-[#D1D0D0] text-[16px] font-medium'>{sale}</span>,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock) => (
        <span className={stock === 'In stock' ? 'text-[#00FF55] txt-[16px] font-medium' : 'text-[#FF6767] txt-[16px] font-medium'}>
          {stock}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex gap-3">
          <button className="text-gray-400 hover:text-white">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9541 1C4.6471 1 1.5871 6.683 1.0441 7.808C1.01508 7.86784 1 7.93349 1 8C1 8.06651 1.01508 8.13216 1.0441 8.192C1.5861 9.317 4.6461 15 10.9541 15C17.2621 15 20.3211 9.317 20.8641 8.192C20.8931 8.13216 20.9082 8.06651 20.9082 8C20.9082 7.93349 20.8931 7.86784 20.8641 7.808C20.3221 6.683 17.2621 1 10.9541 1Z" stroke="#DBBC7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9541 11C12.611 11 13.9541 9.65685 13.9541 8C13.9541 6.34315 12.611 5 10.9541 5C9.29725 5 7.9541 6.34315 7.9541 8C7.9541 9.65685 9.29725 11 10.9541 11Z" stroke="#DBBC7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <button className="text-gray-400 hover:text-white">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5229 2.87997L13.12 5.47712M8.79145 15H15.7172M1.86572 11.5371L1 15L4.46287 14.1343L14.4931 4.10409C14.8177 3.7794 15 3.33908 15 2.87997C15 2.42085 14.8177 1.98054 14.4931 1.65584L14.3442 1.50694C14.0195 1.18235 13.5791 1 13.12 1C12.6609 1 12.2206 1.18235 11.8959 1.50694L1.86572 11.5371Z" stroke="#00FF55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


          </button>
          <button className="text-gray-400 hover:text-red-500">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.51515 2.12121H8.06061C8.06061 1.78366 7.92652 1.45994 7.68783 1.22126C7.44915 0.982575 7.12543 0.848485 6.78788 0.848485C6.45033 0.848485 6.12661 0.982575 5.88792 1.22126C5.64924 1.45994 5.51515 1.78366 5.51515 2.12121ZM4.66667 2.12121C4.66667 1.55863 4.89015 1.01909 5.28796 0.621289C5.68576 0.223484 6.2253 0 6.78788 0C7.35046 0 7.89 0.223484 8.2878 0.621289C8.68561 1.01909 8.90909 1.55863 8.90909 2.12121H13.1515C13.264 2.12121 13.3719 2.16591 13.4515 2.24547C13.5311 2.32503 13.5758 2.43294 13.5758 2.54545C13.5758 2.65797 13.5311 2.76588 13.4515 2.84544C13.3719 2.925 13.264 2.9697 13.1515 2.9697H12.2572L11.2441 11.7464C11.1725 12.3668 10.8753 12.9393 10.4091 13.3548C9.94287 13.7703 9.34016 14 8.71564 14H4.86012C4.2356 14 3.63288 13.7703 3.16666 13.3548C2.70044 12.9393 2.40325 12.3668 2.33164 11.7464L1.31855 2.9697H0.424242C0.311726 2.9697 0.203819 2.925 0.124258 2.84544C0.0446969 2.76588 0 2.65797 0 2.54545C0 2.43294 0.0446969 2.32503 0.124258 2.24547C0.203819 2.16591 0.311726 2.12121 0.424242 2.12121H4.66667ZM3.17418 11.6497C3.22206 12.0632 3.42028 12.4448 3.73114 12.7217C4.042 12.9986 4.44381 13.1516 4.86012 13.1515H8.71564C9.13195 13.1516 9.53375 12.9986 9.84461 12.7217C10.1555 12.4448 10.3537 12.0632 10.4016 11.6497L11.4028 2.9697H2.17297L3.17418 11.6497ZM5.51515 5.09091C5.62767 5.09091 5.73558 5.13561 5.81514 5.21517C5.8947 5.29473 5.93939 5.40264 5.93939 5.51515V10.6061C5.93939 10.7186 5.8947 10.8265 5.81514 10.906C5.73558 10.9856 5.62767 11.0303 5.51515 11.0303C5.40264 11.0303 5.29473 10.9856 5.21517 10.906C5.13561 10.8265 5.09091 10.7186 5.09091 10.6061V5.51515C5.09091 5.40264 5.13561 5.29473 5.21517 5.21517C5.29473 5.13561 5.40264 5.09091 5.51515 5.09091ZM8.48485 5.51515C8.48485 5.40264 8.44015 5.29473 8.36059 5.21517C8.28103 5.13561 8.17312 5.09091 8.06061 5.09091C7.94809 5.09091 7.84018 5.13561 7.76062 5.21517C7.68106 5.29473 7.63636 5.40264 7.63636 5.51515V10.6061C7.63636 10.7186 7.68106 10.8265 7.76062 10.906C7.84018 10.9856 7.94809 11.0303 8.06061 11.0303C8.17312 11.0303 8.28103 10.9856 8.36059 10.906C8.44015 10.8265 8.48485 10.7186 8.48485 10.6061V5.51515Z" fill="#FF1E00"/>
</svg>


          </button>
        </div>
      ),
    },
  ]

  const handleTableChange = (pagination) => {
    setPagination(pagination)
  }

  const handleSearch = (value) => {
    const filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(value.toLowerCase())
    )
    setProducts(filteredProducts)
    setPagination(prev => ({
      ...prev,
      total: filteredProducts.length,
      current: 1,
    }))
  }

  return (
    <div className="min-h-screen bg-[#141414] p-6">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Showing</span>
          <Select
            defaultValue={pagination.pageSize.toString()}
            className="w-16"
            options={[
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '50', label: '50' },
            ]}
            onChange={(value) => setPagination(prev => ({ ...prev, pageSize: Number(value), current: 1 }))}
          />
          <span className="text-gray-400">on page</span>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <Search
            placeholder="search products by name or SKU..."
            className="max-w-md"
            prefix={<SearchOutlined className="text-gray-400" />}
            onSearch={handleSearch}
          />
          <Button 
            type="primary"
            icon={<PlusOutlined />}
            className="bg-[#141414] border-gray-600 hover:border-white"
          >
            Add new
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={products}
        pagination={{
          ...pagination,
          showSizeChanger: false,
          className: 'custom-pagination',
          itemRender: (page, type, originalElement) => {
            if (type === 'prev') {
              return <button className="px-3 py-1 rounded border border-gray-600 hover:border-white">&lt;</button>
            }
            if (type === 'next') {
              return <button className="px-3 py-1 rounded border border-gray-600 hover:border-white">&gt;</button>
            }
            return (
              <button 
                className={`px-3 py-1 rounded border ${
                  page === pagination.current
                    ? 'border-white bg-white text-black' 
                    : 'border-gray-600 hover:border-white'
                }`}
              >
                {page}
              </button>
            )
          },
        }}
        onChange={handleTableChange}
        className="custom-table"
      />
    </div>
  )
}

