import { Error, UploadButton } from "./BoardWrite.styles";

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
      <UploadButton
        id="uploadButton"
        onClick={props.onClickUploadItem}
        buttonColor={props.buttonColor}
      >
        상품등록
      </UploadButton>
    </>
  );
}
