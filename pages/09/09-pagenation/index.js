import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { orange } from "@material-ui/core/colors";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query typesetting($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid lightGray;
`;
const Column = styled.div`
  width: 30%;
`;
const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PageNumber = styled.div`
  width: 30px;
  font-size: 23px;
  cursor: pointer;
  margin-top: 10px;

  :hover {
    color: orange;
    font-weight: 500;
  }
`;
const ToPre = styled(LeftSquareOutlined)`
  font-size: 30px;
  margin: 5px 10px 0 0;
`;
const ToNext = styled(RightSquareOutlined)`
  font-size: 30px;
  margin: 5px 0 0 10px;
`;

export default function PageNation() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickPageNumber = (event) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  const [startPage, setStartPage] = useState(1);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };
  const onClickPre = () => {
    if (startPage !== 1) {
      setStartPage(startPage - 10);
      refetch({ page: startPage - 10 });
    }
  };

  return (
    <>
      <Row>
        <Column>작성자</Column>
        <Column>제목</Column>
      </Row>
      {data?.fetchBoards.map((el) => (
        <>
          <Row>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        </>
      ))}
      <PageNumberWrapper>
        <ToPre onClick={onClickPre} />
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <PageNumber
                onClick={onClickPageNumber}
                key={index + startPage}
                id={index + startPage}
              >
                {index + startPage}
              </PageNumber>
            )
        )}
        <ToNext onClick={onClickNext} />
      </PageNumberWrapper>
    </>
  );
}
