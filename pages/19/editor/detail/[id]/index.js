import { gql, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function EditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <>
      <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.title}</div>
      {/* 보안에 문제가 생길 수 있는 코드 */}
      {/* <div dangerouslySetInnerHTML={{
        __html: data?.fetchBoard.contents
      }}></div> */}
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        />
      )}
      {/* 브자우저에서만 랜더링 되도록 조건을 걸고 보안 라이브러리 적용 */}
    </>
  );
}
