import { useState } from "react";

export default function Hello() {
  //   const onClickChange = () => {
  //     document.getElementById("hello").innerText = "반갑습니다";
  //   };

  const [hello, setHello] = useState("안녕하세요");

  const onClickChange = () => {
    setHello("반갑습니다");
  };
  return (
    <>
      {/* <button id="hello" onClick={onClickChange}>
        안녕하세요
      </button> */}
      <button onClick={onClickChange}>{hello}</button>
    </>
  );
}
