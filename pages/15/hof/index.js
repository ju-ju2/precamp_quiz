export default function HofPage() {
  const onClickButton = (num) => () => {
    console.log(num);
  };
  return (
    <>
      <button onClick={onClickButton(123)}>123숫자넘기기</button>
    </>
  );
}
