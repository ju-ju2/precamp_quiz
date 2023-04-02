import { preLoadImages } from "@/src/commons/libraries/preLoadImages";
import { useRouter } from "next/router";
import { useEffect } from "react";
const PRELOAD_IMAGES = [
  "https://images.unsplash.com/photo-1680013993151-696d40f1e0d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

export default function PreLoad() {
  const router = useRouter();
  const onClickButton = () => {
    router.push("./image-moved");
  };
  useEffect(() => {
    preLoadImages(PRELOAD_IMAGES);
  }, []);
  return <button onClick={onClickButton}>이미지 보기</button>;
}
