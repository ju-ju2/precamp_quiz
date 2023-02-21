import { useState } from "react";

export default function Hello() {
  //   const countPlus = () => {
  //     let count = Number(document.getElementById("count").innerText);
  //     document.getElementById("count").innerText = count + 1;
  //   };

  const [count, setCount] = useState(0);

  const onClickCountPlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <div id="count">0</div>
      <button onClick={countPlus}>카운트 증가</button> */}
      <div>{count}</div>
      <button onClick={onClickCountPlus}>카운트 증가</button>
    </>
  );
}
