import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ComponentUI08 from "./newEdit.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./newEdit.queries";

export default function Component08(props) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickUpload = async () => {
    if (writer && title && contents) {
      const result = await createBoard({
        variables: {
          writer,
          title,
          contents,
        },
      });
      alert("성공");
      console.log(result.data.createBoard.number);
      router.push(`/08/boards/${result.data.createBoard.number}`);
    }
  };

  const myVariable = {
    number: Number(router.query.detail),
  };
  if (writer) myVariable.writer = writer;
  if (title) myVariable.title = title;
  if (contents) myVariable.contents = contents;

  const onClickEdit = async () => {
    const result = await updateBoard({
      variables: myVariable,
    });
    alert("수정완료");
    router.push(`/08/boards/${result.data.updateBoard.number}`);
  };

  return (
    <>
      <ComponentUI08
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickUpload={onClickUpload}
        onClickEdit={onClickEdit}
        isEdit={props.isEdit}
        data={props.data}
      />
    </>
  );
}
