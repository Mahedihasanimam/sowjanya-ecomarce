"use client";

import { Button, Form, Input, Modal, Select, Upload, message } from "antd";

import { useState } from "react";

const { TextArea } = Input;

const ProductFormModal = ({
  isVisible,
  onCancel,
  initialData = null,
  mode = "add",
}) => {
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

  const handleBeforeUpload = (file) => {
    if (fileList.length >= 5) {
      message.error("You can only upload up to 5 images.");
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (fileList.length === 0) {
          message.error("Please upload at least one image.");
          return;
        }
        const productData = { ...values, images: fileList };
        console.log("Product Data:", productData);
        setFileList([]);
        form.resetFields();
        onCancel();
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
        message.error(
          "Please correct the errors in the form before submitting."
        );
      });
  };

  return (
    <Modal
      title={"Add Product"}
      visible={isVisible}
      onCancel={onCancel}
      width={800}
      footer={[
        <Button
          key="cancel"
          onClick={onCancel}
          className="border-gray-600 hover:border-white"
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}
          className="bg-[#d4b062] hover:bg-[#bd9c55]"
        >
          Add
        </Button>,
      ]}
      className="product-form-modal bg-black bg-opacity-50"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: "",
          price: "",
          quantity: "",
          stock: "", // Default value
          sale_price: "",
          description: "",
          images: [],
        }} // Initialize form values
        onValuesChange={(changedValues, allValues) => {
          form.setFieldsValue({
            ...allValues,
            images: fileList,
          });
        }}
      >
        <div className="space-y-6">
          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 bg-black">
            <Upload.Dragger
              listType="picture-card"
              fileList={fileList}
              beforeUpload={handleBeforeUpload}
              onChange={({ fileList }) => setFileList(fileList)}
              className="upload-area"
            >
              <div className="text-center">
                <div className="flex items-center justify-center pb-2">
                  <svg
                    width="77"
                    height="58"
                    viewBox="0 0 77 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.2529 58V41.4286H52.2537L38.5028 24.8571L24.7518 41.4286H35.7526V58H22.0016V57.8619C21.5395 57.8895 21.0995 58 20.6265 58C15.156 58 9.90957 55.8176 6.04135 51.9329C2.17314 48.0482 0 42.7795 0 37.2857C0 26.6579 8.00307 17.9966 18.2723 16.809C19.1727 12.0822 21.685 7.81826 25.3772 4.75051C29.0694 1.68276 33.7107 0.00294981 38.5028 0C43.2955 0.00266061 47.9375 1.68225 51.6307 4.74994C55.3238 7.81763 57.8372 12.0817 58.7387 16.809C69.0079 17.9966 77 26.6579 77 37.2857C77 42.7795 74.8269 48.0482 70.9586 51.9329C67.0904 55.8176 61.844 58 56.3735 58C55.9115 58 55.466 57.8895 54.9984 57.8619V58H41.2529Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-[16px] font-medium text-white">
                  Drop your image here or{" "}
                  <span className="text-[#d4b062]">BROWSE</span>
                </p>
              </div>
            </Upload.Dragger>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Title
                </label>
                <Input
                  style={{
                    height: "56px",
                    backgroundColor: "#262626",
                    color: "white",
                  }}
                  onChange={(e) =>
                    form.setFieldsValue({ title: e.target.value })
                  }
                  placeholder="Enter title..."
                  className="bg-[#262626] border-gray-600"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="price"
                rules={[{ required: true, message: "Price is required" }]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Price
                </label>
                <Input
                  style={{
                    height: "56px",
                    backgroundColor: "#262626",
                    color: "white",
                  }}
                  onChange={(e) =>
                    form.setFieldsValue({ price: e.target.value })
                  }
                  prefix="$"
                  type="number"
                  placeholder="Price"
                  className="bg-[#262626] border-gray-600"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="sale_price"
                rules={[
                  { required: true, message: "Enter a valid sale price" },
                ]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Sale price
                </label>
                <Input
                  style={{
                    height: "56px",
                    backgroundColor: "#262626",
                    color: "white",
                  }}
                  onChange={(e) =>
                    form.setFieldsValue({ sale_price: e.target.value })
                  }
                  prefix="$"
                  type="number"
                  placeholder="Sale price"
                  className="bg-[#262626] border-gray-600"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="quantity"
                rules={[{ required: true, message: "Quantity is required" }]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Quantity
                </label>
                <Input
                  onChange={(e) =>
                    form.setFieldsValue({ quantity: e.target.value })
                  }
                  style={{
                    height: "56px",
                    backgroundColor: "#262626",
                    color: "white",
                  }}
                  placeholder="Enter quantity..."
                  className="bg-[#262626] border-gray-600"
                />
              </Form.Item>
            </div>

            <div>
              <Form.Item
                name="stock"
                rules={[
                  { required: true, message: "Stock status is required" },
                ]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Stock
                </label>
                <Select
                  onSelect={(e) => form.setFieldsValue({ stock: e })}
                  style={{
                    height: "56px",
                    backgroundColor: "#262626",
                    color: "white",
                  }}
                  placeholder="Choose..."
                  className="w-full placeholder:text-[#D1D0D0]"
                >
                  <Select.Option value="In Stock">In stock</Select.Option>
                  <Select.Option value="Out Stock">Out of stock</Select.Option>
                </Select>
              </Form.Item>
            </div>

            <div className="col-span-2">
              <Form.Item
                name="description"
                rules={[
                  { required: true, message: "Description is required" },
                  {
                    min: 10,
                    message: "Description must be at least 10 characters",
                  },
                ]}
              >
                <label className="block text-[14px] text-white font-medium mb-1">
                  Product description
                </label>
                <TextArea
                  onChange={(e) =>
                    form.setFieldsValue({ description: e.target.value })
                  }
                  style={{ backgroundColor: "#262626", color: "white" }}
                  rows={4}
                  placeholder="Short description about your product..."
                  className="bg-[#262626] border-gray-600"
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default ProductFormModal;
