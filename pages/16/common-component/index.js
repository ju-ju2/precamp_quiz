import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Button01 from "@/src/components/commons/button/01";
import Input01 from "@/src/components/commons/inputs/01";

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
      작성자: <Input01 type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 : <Input01 type="text" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 title="등록하기" isActive={formState.isValid}></Button01>
      <button type="reset">리셋</button>
    </form>
  );
}
