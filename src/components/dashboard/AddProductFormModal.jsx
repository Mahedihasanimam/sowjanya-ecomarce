'use client'

import { useState } from 'react'
import { Modal, Upload, Input, Select, Button } from 'antd'
import { UploadOutlined, CloudUploadOutlined } from '@ant-design/icons'
import Image from 'next/image'

const { TextArea } = Input

const ProductFormModal = ({ isVisible, onCancel, initialData = null, mode = 'add' }) => {
  const [selectedColor, setSelectedColor] = useState(initialData?.color || null)
  const [selectedSize, setSelectedSize] = useState(initialData?.size || null)
  const [fileList, setFileList] = useState([])

  const colors = [
    { value: 'blue', hex: '#4096ff' },
    { value: 'orange', hex: '#ff7a45' },
    { value: 'lightblue', hex: '#69c0ff' },
    { value: 'white', hex: '#ffffff' },
  ]

  const sizes = ['S', 'M', 'L', 'XL']

  const handleSubmit = () => {
    // Handle form submission
    onCancel()
  }

  return (
    <Modal
    
      title={ 'Add Product'}
      visible={isVisible}
      onCancel={onCancel}
      width={800}
      footer={[
        <Button key="cancel" onClick={onCancel} className="border-gray-600 hover:border-white">
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit} className="bg-[#d4b062] hover:bg-[#bd9c55]">
          Add
        </Button>,
      ]}
      className="product-form-modal bg-black bg-opacity-50"
    >
      <div className="space-y-6">
        {/* Image Upload */}
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 bg-black">
          <Upload.Dragger
            listType="picture-card"
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            className="upload-area"
          >
            <div className="text-center">
            <div className='flex items-center justify-center pb-2'>
            <svg width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.2529 58V41.4286H52.2537L38.5028 24.8571L24.7518 41.4286H35.7526V58H22.0016V57.8619C21.5395 57.8895 21.0995 58 20.6265 58C15.156 58 9.90957 55.8176 6.04135 51.9329C2.17314 48.0482 0 42.7795 0 37.2857C0 26.6579 8.00307 17.9966 18.2723 16.809C19.1727 12.0822 21.685 7.81826 25.3772 4.75051C29.0694 1.68276 33.7107 0.00294981 38.5028 0C43.2955 0.00266061 47.9375 1.68225 51.6307 4.74994C55.3238 7.81763 57.8372 12.0817 58.7387 16.809C69.0079 17.9966 77 26.6579 77 37.2857C77 42.7795 74.8269 48.0482 70.9586 51.9329C67.0904 55.8176 61.844 58 56.3735 58C55.9115 58 55.466 57.8895 54.9984 57.8619V58H41.2529Z" fill="white"/>
</svg>
            </div>

              <p className='text-[16px] font-medium text-white'>Drop your image here or <span className="text-[#d4b062]">BROWSE</span></p>
            </div>
          </Upload.Dragger>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-[14px] text-white font-medium mb-1">Title</label>
            <Input 
            style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              placeholder="Enter title..."
              defaultValue={initialData?.name}
              className="bg-[#262626] border-gray-600"
            />
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-1">Category</label>
            <Select
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              placeholder="Choose category"
              className="w-full placeholder:text-[#D1D0D0]"
              defaultValue={initialData?.category}
            >
              <Select.Option value="clothing">Clothing</Select.Option>
              <Select.Option value="accessories">Accessories</Select.Option>
              <Select.Option value="footwear">Footwear</Select.Option>
            </Select>
          </div>

          <div>
    <label className="block text-[14px] text-white font-medium mb-1">Brand</label>
    <Select
        style={{
            height: '56px',
            backgroundColor: '#262626',
            color: 'white',
        }}
        placeholder={<span style={{ color: 'white' }}>Choose brand</span>}
        className="w-full"
        defaultValue={initialData?.brand}
    >
        <Select.Option value="nike">Nike</Select.Option>
        <Select.Option value="adidas">Adidas</Select.Option>
        <Select.Option value="puma">Puma</Select.Option>
    </Select>
</div>


          <div>
            <label className="block text-[14px] text-white font-medium mb-1">Price</label>
            <Input 
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              prefix="$"
              type="number"
              placeholder="Price"
              defaultValue={initialData?.price}
              className="bg-[#262626] border-gray-600"
            />
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-1">Sale price</label>
            <Input 
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              prefix="$"
              type="number"
              placeholder="Sale price"
              defaultValue={initialData?.salePrice}
              className="bg-[#262626] border-gray-600"
            />
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-1">SKU</label>
            <Input 
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              placeholder="Enter SKU"
              defaultValue={initialData?.sku}
              className="bg-[#262626] border-gray-600"
            />
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-1">Stock</label>
            <Select
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              placeholder="Choose..."
              className="w-full placeholder:text-[#D1D0D0]"
              defaultValue={initialData?.stock}
            >
              <Select.Option value="in-stock">In stock</Select.Option>
              <Select.Option value="out-of-stock">Out of stock</Select.Option>
              <Select.Option value="low-stock">Low stock</Select.Option>
            </Select>
          </div>

          <div className="col-span-2">
            <label className="block text-[14px] text-white font-medium mb-1">Tags</label>
            <Select
             style={{height:'56px',backgroundColor:'#262626',color:"white"}}
              mode="tags"
              placeholder="Type here..."
              className="w-full"
              defaultValue={initialData?.tags}
            />
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-2">Color</label>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-[#d4b062]' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] text-white font-medium mb-2">Size</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded border  text-white border-[#DBBC7E] ${
                    selectedSize === size
                      ? ' text-[#DBBC7E] bg-[#DBBC7E] border-[#DBBC7E]'
                      : 'bg-transparent'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-[14px] text-white font-medium mb-1">Product description</label>
            <TextArea
             style={{backgroundColor:'#262626',color:"white"}}
              rows={4}
              placeholder="Short description about your product..."
              defaultValue={initialData?.description}
              className="bg-[#262626] border-gray-600"
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProductFormModal

