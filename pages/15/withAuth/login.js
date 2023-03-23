import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const LOGIN_USER = gql`
  mutation typesetting($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [loginUser] = useMutation(LOGIN_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem("accessToken", accessToken);

    router.push("./main");
  };
  return (
    <>
      이메일 : <input onChange={onChangeEmail} type="text" />
      비밀번호 : <input onChange={onChangePassword} type="password" />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
