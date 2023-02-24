import { Error } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      판매자: <input type="text" onChange={props.onChangeSeller}></input>
      <br />
      <Error>{props.sellerError}</Error>
      상품명: <input type="text" onChange={props.onChangeTitle}></input>
      <br />
      <Error>{props.titleError}</Error>
      상품내용: <input type="text" onChange={props.onChangeContents}></input>
      <br />
      <Error>{props.contentsError}</Error>
      상품가격: <input type="text" onChange={props.onChangePrice}></input>
      <br />
      <Error>{props.priceError}</Error>
      <button onClick={props.onClickUploadItem}>상품등록</button>
    </>
  );
}
