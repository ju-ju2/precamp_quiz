import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      seller
      name
      detail
      price
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

export default function ProductsList() {
  const { data } = useQuery(FETCH_PRODUCTS);

  return (
    <>
      {data?.fetchProducts.map((el) => (
        <Row>
          <Column>
            <input type="checkbox"></input>
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>
            <button>삭제하기</button>
          </Column>
        </Row>
      ))}
    </>
  );
}
