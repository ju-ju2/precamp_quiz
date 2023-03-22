import { accessTokenState } from "@/src/commons/store";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";

const LOGIN_USER = gql`
  mutation groupName($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
    console.log(result);
    const accessToken = result.data?.loginUser.accessToken;
    setAccessToken(accessToken);
  };
  return (
    <>
      이메일 : <input onChange={onChangeEmail} type="text" />
      <br />
      비밀번호 : <input onChange={onChangePassword} type="password" />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
