import { Button, Modal } from "antd";
import { useState } from "react";
export default function ModalAlert() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("게시글이 등록되었습니다");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setModalText("처리중");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달열기
      </Button>
      <Modal
        title="게시글 등록"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
