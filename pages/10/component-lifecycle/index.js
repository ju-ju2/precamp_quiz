import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifeCycle() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);
  const [isMove, setIsMove] = useState(false);
  const [message, setMessage] = useState("Rendered!!");
  const onClickToChange = () => {
    setIsChange(true);
  };
  useEffect(() => {
    const changeMessage = () => {
      if (isChange) {
        alert("changed!!");
        setMessage("Changed!!");
      }
    };
    changeMessage();
    console.log("실행");
  }, [isChange]);

  useEffect(() => {
    const ChangePage = () => {
      if (isMove) {
        alert("Bye");
        // router.push("/");
      }
    };
    ChangePage();
  }, [isMove]);

  const onClickToMove = () => {
    setIsMove(true);
    router.push("/");
  };

  return (
    <>
      <div>경고메세지: {message}</div>
      <button onClick={onClickToChange}>변경</button>
      <button onClick={onClickToMove}>이동</button>
    </>
  );
}
