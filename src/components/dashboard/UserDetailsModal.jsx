import { Button, Modal } from "antd";

import Image from "next/image";

const ViewModal = ({ isVisible, onCancel, initialData }) => {
  // Updated prop names
  return (
    <Modal
      open={isVisible} // Updated prop name
      onCancel={onCancel}
      footer={
        <Button
          style={{ width: "100%", backgroundColor: "#DBBC7E", height: "48px" }}
          onClick={onCancel}
          className="bg-[#d4b062] text-black font-medium hover:bg-[#c2a256] mt-4"
        >
          CLOSE
        </Button>
      }
      centered
      width={400}
      className="custom-modal"
    >
      <div className="flex flex-col items-center gap-4">
        {/* User Image */}
        {initialData?.image && (
          <Image
            src={initialData?.image} // Updated prop name
            alt="User"
            width={100}
            height={100}
            className="w-24 h-24 mb-4 "
          />
        )}

        {/* User Details */}
        <div className="w-full text-white space-y-2">
          {initialData?.name && (
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{initialData?.name || "no name"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}

          {initialData?.email && (
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{initialData?.email || "not found"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}

          {initialData?.contact && (
            <div className="flex justify-between">
              <span className="font-medium">Contact:</span>
              <span>{initialData?.contact || "not found"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}

          {initialData?.id && (
            <div className="flex justify-between">
              <span className="font-medium">User ID:</span>
              <span>{initialData?.id || "not found"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}

          {initialData?.boughtProducts && (
            <div className="flex justify-between">
              <span className="font-medium">Bought Product:</span>
              <span>{initialData?.boughtProducts || "not found"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}

          {initialData?.address && (
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span>{initialData?.address || "not found"}</span>{" "}
              {/* Updated prop name */}
            </div>
          )}
          {initialData?.created_at && (
            <div className="flex justify-between">
              <span className="font-medium">Register Date:</span>
              <span>
                {(initialData?.created_at &&
                  new Date(initialData?.created_at).toLocaleDateString()) ||
                  "not found"}
              </span>{" "}
              {/* Updated prop name */}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewModal;
