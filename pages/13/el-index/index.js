export default function Map() {
  return (
    <>
      {/* {["철수", "유리", "훈이", "맹구"].map((el, index) => (
        <div>
          {el}은{index + 1}번째 칸에 들어있습니다.
        </div>
      ))} */}
      {["철수", "유리", "훈이", "맹구"].map((name, number) => (
        <div>
          {name}은{number + 1}번째 칸에 들어있습니다.
        </div>
      ))}
    </>
  );
}
