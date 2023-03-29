import Head from "next/head";
import { useState } from "react";

export default function CallbackFriend() {
  const [contents, setContents] = useState([""]);
  const onClickCallback = () => {
    const callback = new XMLHttpRequest();
    callback.open("get", `http://numbersapi.com/random?min=1&max=200`);
    callback.send();
    callback.addEventListener("load", function (res) {
      const num = res.target.response.split(" ")[0];

      const callback2 = new XMLHttpRequest();
      callback2.open("get", `https://koreanjson.com/posts/${num}`);
      callback2.send();
      callback2.addEventListener("load", function (res) {
        const userId = JSON.parse(res.target.response).UserId;

        const callback3 = new XMLHttpRequest();
        callback3.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        callback3.send();
        callback3.addEventListener("load", (res) => {
          console.log(res);
          setContents(JSON.parse(res.target.response));
        });
      });
    });
  };
  const onClickPromise = () => {
    const promise1 = axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log(res);
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res.data);
        setContents(res.data);
      });
  };
  const onClickAsyncAwait = async () => {
    const result1 = await axios.get(
      `http://numbersapi.com/random?min=1&max=200`
    );
    const num = result1.data.split(" ")[0];
    const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = result2.data.UserId;
    const result3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    console.log(result3.data);
    setContents(result3.data);
  };
  return (
    <>
      <Head>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </Head>
      결과: <button onClick={onClickCallback}>callback</button>
      결과: <button onClick={onClickPromise}>promise</button>
      결과: <button onClick={onClickAsyncAwait}>async/await</button>
      <div>
        {contents.map((el) => (
          <>
            <div>{el.title}</div>
          </>
        ))}
      </div>
    </>
  );
}
