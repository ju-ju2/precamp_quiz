import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.error({ content: "로그인 후 이용가능한 페이지입니다" });
      router.push("/");
    }
  }, []);
}
