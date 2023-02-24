import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query typeSetting($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export default function ItemUploaded() {
  const router = useRouter();
  console.log(router.query.boardNum);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.boardNum,
    },
  });
  console.log(data);

  return (
    <>
      <div>제목 : {data ? data.fetchProduct.name : "Loading..."}</div>
      <div>판매자 : {data ? data.fetchProduct.seller : "Loading..."}</div>
      <div>내용 : {data ? data.fetchProduct.detail : "Loading..."}</div>
      <div>가격 : {data ? data.fetchProduct.price : "Loading..."}</div>
    </>
  );
}
