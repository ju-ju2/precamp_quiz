import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUesEffect() {
  const [dogUrl, setDogUrl] = useState("");
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const GetImg = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    GetImg();
  }, [isClick]);

  const onClickBtn = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <>
      <img src={dogUrl}></img>
      <button onClick={onClickBtn}>사진변경</button>
    </>
  );
}
