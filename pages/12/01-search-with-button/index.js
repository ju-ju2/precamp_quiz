import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query typesetting($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  width: 20%;
`;
export default function SearchKeywordPage() {
  const [startNum, setStartNum] = useState(1);
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickNum = (event) => {
    // setPage(event.target.id);
    refetch({ page: Number(event.target.id) });
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onClickButton = () => {
    refetch({ search });
  };
  return (
    <>
      검색어: <input onChange={onChangeSearch} />
      <button onClick={onClickButton}>검색하기</button>
      <Row style={{ color: "orange" }}>
        <Column>제목</Column>
        <Column>내용</Column>
      </Row>
      {data?.fetchBoards.map((el, index) => (
        <Row key={index}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <Row style={{ fontWeight: "bold", marginTop: "20px" }}>
        {new Array(10).fill(1).map((el, index) => (
          <div
            key={index}
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={onClickNum}
            id={startNum + index}
          >
            {index + 1}
          </div>
        ))}
      </Row>
    </>
  );
}
