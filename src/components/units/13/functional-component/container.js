import Presenter from "./presenter";

export default function Container() {
  return (
    <div>
      {/* <Presenter child="민수" age={13} /> */}
      {Presenter({ child: "철수", age: 15 })}
    </div>
  );
}
