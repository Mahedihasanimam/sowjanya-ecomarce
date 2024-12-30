"use client";

import {
  useCreateAboutMutation,
  useGetAboutQuery,
} from "@/redux/features/admin/aboutSlice";
import { Button, Form, Input, Upload, message } from "antd";
import React, { useState } from "react";

const { TextArea } = Input;

export default function AboutPage() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const { data: about } = useGetAboutQuery();

  const [createAboutUs] = useCreateAboutMutation();

  // console.log(about);

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("title", values?.title);
    formData.append("description", values?.description);

    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images[]", file.originFileObj);
      }
    });

    createAboutUs(formData)
      .then((res) => {
        // console.log(res);
        message.success("About page updated successfully");
      })
      .catch((error) => {
        console.error(error);
        message.error("Failed to update about page" + error?.message);
      });
  };

  const handleImageUpload = ({ fileList }) => {
    setFileList(fileList);
  };

  React.useEffect(() => {
    if (about?.about?.[0]) {
      const firstAbout = about.about[0];

      // Prepare the image field if it exists
      const imageField =
        firstAbout?.image?.length > 0
          ? firstAbout.image.map((url, index) => ({
              uid: `-${index}`, // Unique identifier
              name: `image-${index}`, // Optional file name
              status: "done", // Upload status
              url, // URL of the image
            }))
          : [];

      setFileList(imageField);

      // Set all form fields including the image
      form.setFieldsValue(firstAbout);
    }
  }, [about, form]);

  return (
    <div className="min-h-screen bg-[#000000] p-6">
      <div className="">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          <div className="bg-[#000000] rounded-lg p-6">
            <Form.Item
              label={<span className="text-white">Add title</span>}
              name="title"
              rules={[{ required: true, message: "Please input a title!" }]}
            >
              <Input
                style={{ backgroundColor: "#201F1F", height: "44px" }}
                className="bg-zinc-800 border-zinc-700 text-white"
                placeholder="Enter title"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Add description</span>}
              name="description"
              rules={[
                { required: true, message: "Please input a description!" },
              ]}
            >
              <TextArea
                style={{ backgroundColor: "#201F1F", minHeight: "200px" }}
                className="bg-zinc-800 border-zinc-700 text-white resize-none"
                placeholder="Enter description"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white">Add images</span>}
              name="images"
              rules={[
                {
                  required: true,
                  message: "Please upload at least one image!",
                },
              ]}
            >
              <Upload
                accept="image/*"
                listType="picture-card"
                fileList={fileList}
                onChange={handleImageUpload}
                beforeUpload={() => false} // Prevent automatic upload
              >
                {fileList.length >= 3 ? null : <div>+ Upload</div>}
              </Upload>
            </Form.Item>

            <Form.Item className="mt-6 mb-0">
              <Button
                htmlType="submit"
                className="w-full"
                style={{
                  backgroundColor: "#DBBC7E",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
