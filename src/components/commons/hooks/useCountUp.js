import { useState } from "react";

export default function useCountUp() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  return { count, onClickCountUp };
}
