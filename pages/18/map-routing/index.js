import Link from "next/link";
import { useRouter } from "next/router";

export default function MapRoutingPage() {
  //   const router = useRouter();
  //   const onClickMoveToMap = () => {
  //     router.push("./map-routed");
  //   };
  return (
    <>
      {/* <button onClick={onClickMoveToMap}>지도로 이동하기</button> */}
      <Link href="./map-routed">
        <a>지도로 이동하기</a>
      </Link>
    </>
  );
}
