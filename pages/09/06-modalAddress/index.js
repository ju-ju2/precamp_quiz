import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleComplete = (address) => {
    console.log(address);
    setIsModalOpen(false);
    const userAddress = address.address;
    setAddress(userAddress);
  };
  const [address, setAddress] = useState("");
  return (
    <>
      <Button type="primary" onClick={showModal}>
        주소 입력
      </Button>
      {address}
      {isModalOpen && (
        <Modal
          title="주소 검색"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};
export default App;
