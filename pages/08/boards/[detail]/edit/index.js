import Component08 from "@/src/components/units/boards/08/newEdit.container";
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

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.detail),
    },
  });

  return <Component08 isEdit={true} data={data} />;
}
