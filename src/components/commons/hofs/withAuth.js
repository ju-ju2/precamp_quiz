import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({ content: "로그인 후 이용 가능한 페이지입니다." });
      router.push("./login");
    }
  }, []);

  return <Component {...props} />;
};
