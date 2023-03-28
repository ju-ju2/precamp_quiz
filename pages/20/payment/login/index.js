import { accessTokenState } from "@/src/commons/store";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const LOGIN_USER = gql`
  mutation typeSetting($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function PaymentLogin() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const [loginUser] = useMutation(LOGIN_USER);
  const onClickSubmit = async (data) => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
    }
    const accessToken = result.data?.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    Modal.success({ content: "로그인에 성공하였습니다" });
    router.push("./loading");
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 : <input type="text" {...register("email")} />
      비밀번호 : <input type="password" {...register("password")} />
      <button>로그인</button>
    </form>
  );
}
