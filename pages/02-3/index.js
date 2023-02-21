import { useState } from "react";

export default function makeNum() {
  //   const onClickNum = () => {
  //     document.getElementById("num").innerText = String(
  //       Math.floor(Math.random() * 1000000)
  //     ).padStart(6, "0");
  //   };

  const [randomNum, SetRandomNum] = useState("000000");

  const onClickNum = () => {
    SetRandomNum(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  };

  return (
    <>
      {/* <div id="num">000000</div>
      <button onClick={onClickNum}>인증번호전송</button> */}

      <div>{randomNum}</div>
      <button onClick={onClickNum}>인증번호전송</button>
    </>
  );
}
