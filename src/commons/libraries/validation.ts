import { Modal } from "antd";

export const checkValidationFile = (file: File) => {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다" });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일 크기가 너무 큽니다." });
    return false;
  }
  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("jpg") &&
    !file.type.includes("png")
  ) {
    Modal.error({ content: "지원하지않는 확장자입니다." });
    return false;
  }
  return true;
};
