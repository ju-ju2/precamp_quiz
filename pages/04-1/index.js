import axios from "axios";

export default function RestApiPage() {
  const onClickGetApi = async () => {
    const usersData = await axios.get("https://koreanjson.com/users");
    const myUserData = usersData.data;

    for (let i = 0; i < myUserData.length; i++) {
      console.log(myUserData[i].name);
    }

    console.log(usersData.data[0].name);
    console.log(myUserData.length);
  };

  return (
    <>
      <button onClick={onClickGetApi}>REST-API 요청하기</button>
    </>
  );
}
