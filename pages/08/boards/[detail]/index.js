import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query typeSetting($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function MakeBoard() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.detail),
    },
  });

  const onClickEdit = () => {
    router.push(`/08/boards/${data?.fetchBoard.number}/edit`);
  };

  // console.log(data);

  return (
    <>
      <div>{data?.fetchBoard.number}번 게시물 페이지</div>
      작성자: {data?.fetchBoard.writer}
      <br />
      제목 : {data?.fetchBoard.title}
      <br />
      내용 : {data?.fetchBoard.contents}
      <br />
      <button onClick={onClickEdit}>수정하기</button>
    </>
  );
}
