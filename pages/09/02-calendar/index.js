import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

export default function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <>
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={dayjs("2015/01/01", dateFormat)}
          format={dateFormat}
          onChange={(event) => {
            setYear(event.$y);
            setMonth(event.$M + 1);
            setDay(event.$D);
            console.log(event);
          }}
        />
      </Space>
      <div>
        {year && month && day
          ? `날짜선택완료 : ${year} / ${String(month).padStart(
              2,
              "0"
            )} / ${day}`
          : ""}
        {/* {year && month && day ? {{year}/{String(month).padStart(2, "0")}/{day}} : ""} */}
      </div>
    </>
  );
}
