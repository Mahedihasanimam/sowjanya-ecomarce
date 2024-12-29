import { Carousel, Col, Modal, Row, Typography } from "antd";

import Image from "next/image";

const { Title, Text } = Typography;

const ProductViewModal = ({ visible, onClose, product }) => {
  console.log(product);
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      title={
        <Title level={4} className="!text-white">
          Product Details
        </Title>
      }
      width={800}
      style={{ borderRadius: 8, background: "#141414", color: "#fff" }}
      className="product-form-modal !bg-opacity-25"
    >
      <Row gutter={16}>
        {/* Product Images */}
        <Col span={12}>
          <Carousel autoplay>
            {product?.image?.map((imgUrl, index) => (
              <div key={index}>
                <Image
                  width={400}
                  height={400}
                  src={imgUrl}
                  alt={`Product Image ${index + 1}`}
                  className="object-cover h-[50vh] rounded-lg !!border-gray-200"
                />
              </div>
            ))}
          </Carousel>
        </Col>

        {/* Product Details */}
        <Col span={12}>
          <div>
            <Title level={5} className="!text-gray-200">
              Title:
            <Text className="!text-gray-400">{product?.title}</Text>
            </Title>
          </div>
          <div style={{ marginTop: 12 }}>
            <Title level={5} className="!text-gray-200">
              Price:
            <Text className="!text-gray-400">${product?.price}</Text>
            </Title>
          </div>
          <div style={{ marginTop: 12 }}>
            <Title level={5} className="!text-gray-200">
              Sale Price:
            <Text className="!text-gray-400">${product?.sale_price}</Text>
            </Title>
          </div>
          <div style={{ marginTop: 12 }}>
            <Title level={5} className="!text-gray-200">
              Quantity:
            <Text className="!text-gray-400">{product?.quantity}</Text>
            </Title>
          </div>
          <div style={{ marginTop: 12 }}>
            <Title level={5} className="!text-gray-200">
              Stock:
            <Text className="!text-gray-400">{product?.stock}</Text>
            </Title>
          </div>
        </Col>
      </Row>

      {/* Product Description */}
      <div style={{ marginTop: 24 }}>
        <Title level={5} className="!text-gray-200">
          Description:
        <Text className="!text-gray-400">{product?.description}</Text>
        </Title>
      </div>
    </Modal>
  );
};

export default ProductViewModal;
