import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation typeSetting($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation typeSetting($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

export default function PrefetchImage() {
  const { register, handleSubmit } = useForm();
  const [preImageUrl, setPreImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeImage = async (event) => {
    console.log(event);
    const file = event.target.files[0];
    if (!file) return;

    // 방법1.
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 방법2.
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event);
      setPreImageUrl(event.target.result);
    };

    // 이후 뮤테이션
    const result = await uploadFile({
      variables: { file },
    });
    console.log(result);
    setImageUrl(result.data?.uploadFile.url || "");
  };
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")}></input>
      <br />
      비밀번호: <input type="password" {...register("password")}></input>
      <br />
      제목: <input type="text" {...register("title")}></input>
      <br />
      내용: <input type="text" {...register("contents")}></input>
      <br />
      <input type="file" onChange={onChangeImage}></input>
      <br />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={preImageUrl} />
      <button>제출하기</button>
    </form>
  );
}
