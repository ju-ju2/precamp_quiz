import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query ($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 25px;
  margin: 0 30px;
  :hover {
    color: green;
  }
`;
const Column = styled.div`
  width: 30%;
`;

export default function InfiniteScrollPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <>
      <Row>
        <Column style={{ fontSize: "18px", fontWeight: "bold" }}>작성자</Column>
        <Column style={{ fontSize: "18px", fontWeight: "bold" }}>게시물</Column>
      </Row>
      <div style={{ height: "500px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoards.map((el) => (
            <Row>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
            </Row>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
