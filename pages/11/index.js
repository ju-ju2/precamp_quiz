import { checkValidationFile } from "@/src/commons/libraries/validation";
import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation typesetting($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation typeSetting($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadMutation() {
  const fileRef = useRef(null);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickSubmit = async () => {
    if (!writer || !password || !title || !contents) {
      Modal.error({ content: "빈칸을 채워주세요" });
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images: [imageUrl],
          },
        },
      });
      console.log(result.data?.createBoard._id);
      alert("등록완료");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickFile = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter}></input>
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword}></input>
      <br />
      제목 : <input type="text" onChange={onChangeTitle}></input>
      <br />
      내용 : <input type="text" onChange={onChangeContents}></input>
      <br />
      <input
        style={{ display: "none" }}
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
      ></input>
      <br />
      <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
      <LikeOutlined onClick={onClickFile} style={{ fontSize: "100px" }} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
