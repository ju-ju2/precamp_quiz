import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmitBoards = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitBoards)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="text" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
