import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation typeSetting($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function EditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onClickSubmit = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.title,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    const { Modal } = await import("antd"); // 코드 스플릿팅
    Modal.success({ content: "등록 성공" });
    void router.push(`/19/editor/detail/${result.data?.createBoard._id}`);
  };
  const onChangeContents = (value) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
