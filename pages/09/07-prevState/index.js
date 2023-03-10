import { useState } from "react";

export default function PrevState() {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount((PrevState) => PrevState + 1);
    setCount((PrevState) => PrevState + 1);
    setCount((PrevState) => PrevState + 1);
  };
  return (
    <>
      <div>
        <button onClick={countPlus}>카운트올리기</button>
        <div>{count}</div>
      </div>
    </>
  );
}
