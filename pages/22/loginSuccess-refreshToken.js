import { gql, useApolloClient, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

export default function LoginSuccessPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const client = useApolloClient();
  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
    setEmail(result.data.fetchUserLoggedIn.email);
    setName(result.data.fetchUserLoggedIn.name);
  };
  return (
    <>
      <button onClick={onClickButton}>API 요청하기</button>
      <div>사용자의 이메일은 {email}입니다.</div>
      <div>사용자의 이름은 {name}입니다.</div>
    </>
  );
}
