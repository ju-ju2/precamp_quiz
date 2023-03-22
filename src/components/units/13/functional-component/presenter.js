export default function Presenter(props) {
  return (
    <>
      <div>{props.child}</div>
      <div>{props.age}</div>
      <div>
        {props.child}는 {props.age}살 입니다.
      </div>
    </>
  );
}
