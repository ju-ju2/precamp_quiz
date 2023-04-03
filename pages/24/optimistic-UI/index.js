import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query typeSetting($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation typeSetting($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUI() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "642692c9aef9f000281b7e13" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickButton = () => {
    void likeBoard({
      variables: { boardId: "642692c9aef9f000281b7e13" },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "642692c9aef9f000281b7e13" },
          data: {
            fetchBoard: {
              _id: "642692c9aef9f000281b7e13",
              _typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickButton}>좋아요 누르기</button>
    </>
  );
}
