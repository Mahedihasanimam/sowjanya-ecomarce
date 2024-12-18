import { Modal, Button } from 'antd'
import userimg from '../../public/images/Rectangle 1 (6).png'
import Image from 'next/image'
const ViewModal = ({ isVisible, onCancel, initialData }) => { // Updated prop names
  return (
    <Modal
      open={isVisible} // Updated prop name
      onCancel={onCancel}
      footer={
        <Button
        style={{width:'100%',backgroundColor:'#DBBC7E',height:'48px'}}
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
        <Image
          src={userimg} // Updated prop name
          alt="User"
          className="w-24 h-24 mb-4 "
        />

        {/* User Details */}
        <div className="w-full text-white space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{initialData?.name || 'no name'}</span> {/* Updated prop name */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{initialData?.email || 'ex@gmail.com'}</span> {/* Updated prop name */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Contact:</span>
            <span>{initialData?.contact || "21321311"}</span> {/* Updated prop name */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">User ID:</span>
            <span>{initialData?.userId || '695655'}</span> {/* Updated prop name */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Bought Product:</span>
            <span>{initialData?.boughtProducts || "4k"}</span> {/* Updated prop name */}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Address:</span>
            <span>{initialData?.address || 'not found'}</span> {/* Updated prop name */}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ViewModal
