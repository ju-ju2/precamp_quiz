import { useState } from "react";

export default function PrevState() {
  const [state, setState] = useState(0);

  const onClickBtn = () => {
    // setState((prev) => prev + 1);
    setState((before) => before + 1);
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={onClickBtn}>state up!!</button>
    </>
  );
}
