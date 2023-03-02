import { Rate } from "antd";
import { useState } from "react";

export default function RateStar() {
  const [value, setValue] = useState();

  return (
    <>
      <Rate onChange={setValue} />
      <div>{value ? `${value}점` : ""}</div>
    </>
  );
}
