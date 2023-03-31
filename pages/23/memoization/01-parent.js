import { useCallback, useMemo, useState } from "react";
import Child from "./02-child";

export default function Parent() {
  console.log("부모 랜더링 중");

  let num = 0;
  const [count, setCount] = useState(0);

  const onClickNum = useCallback(() => {
    num = num + 1;
    console.log(num);
  }, []);

  const onClickCount = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log(count + 1);
  }, []);

  return (
    <>
      <div>------------</div>
      <div>부모</div>
      <button onClick={onClickNum}>let count 증가 : {num}</button>
      <button onClick={onClickCount}>setState count 증가 : {count}</button>
      <div>------------</div>
      <Child />
    </>
  );
}
