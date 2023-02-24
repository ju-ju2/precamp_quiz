import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_PRODUCT } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  console.log(router.query.boardNum);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.boardNum,
    },
  });
  console.log(data);

  return <BoardDetailUI data={data} />;
}
