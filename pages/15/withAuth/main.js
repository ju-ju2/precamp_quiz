import { withAuth } from "@/src/components/commons/hofs/withAuth";

function MainPage() {
  return (
    <>
      <div>메인페이지</div>
    </>
  );
}

export default withAuth(MainPage);
