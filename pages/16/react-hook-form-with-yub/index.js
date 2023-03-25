import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

const Error = styled.div`
  font-size: 10px;
  color: red;
`;

export default function ReactHookForm() {
  const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitBoards = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitBoards)}>
      작성자: <input type="text" {...register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 : <input type="text" {...register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <input type="text" {...register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <input type="text" {...register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <button>등록하기</button>
      <button type="reset">리셋</button>
    </form>
  );
}
