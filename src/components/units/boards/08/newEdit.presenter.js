export default function ComponentUI08(props) {
  return (
    <>
      <div>
        등록 및 수정페이지 퀴즈시간 {props.isEdit ? "<수정>" : "<등록>"}
      </div>
      작성자: <input type="text" onChange={props.onChangeWriter}></input>
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle}></input>
      <br />
      내용 : <input type="text" onChange={props.onChangeContents}></input>
      <br />
      <button onClick={props.isEdit ? props.onClickEdit : props.onClickUpload}>
        {props.isEdit ? "수정하기" : "등록하기"}
      </button>
    </>
  );
}
