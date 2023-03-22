import { gql, useQuery } from "@apollo/client";

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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <>
      <div>사용자의 이메일은 {data?.fetchUserLoggedIn.email}입니다.</div>
      <div>사용자의 이름은 {data?.fetchUserLoggedIn.name}입니다.</div>
    </>
  );
}
