import { memo } from "react";

function Child() {
  console.log("자식 랜더링 중");
  return (
    <>
      <div>------------</div>
      <div>자식</div>
      <div>------------</div>
    </>
  );
}
export default memo(Child);
