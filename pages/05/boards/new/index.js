import { Error } from "@/styles/emotion";
import { useState } from "react";

export default function ItemUpload() {
  const [seller, setSeller] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");

  const [sellerError, setSellerError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [priceError, setPriceError] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value) {
      setSellerError("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (event.target.value) {
      setPriceError("");
    }
  };

  const onClickUploadItem = () => {
    if (!seller) {
      setSellerError("판매자를 입력해주세요");
    }
    if (!title) {
      setTitleError("상품명을 입력해주세요");
    }
    if (!contents) {
      setContentsError("상품내용을 입력해주세요");
    }
    if (!price) {
      setPriceError("상품가격을 입력해주세요");
    }
    if (seller && title && contents && price) {
      alert("상품등록이 완료되었습니다");
    }
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller}></input>
      <br />
      <Error>{sellerError}</Error>
      상품명: <input type="text" onChange={onChangeTitle}></input>
      <br />
      <Error>{titleError}</Error>
      상품내용: <input type="text" onChange={onChangeContents}></input>
      <br />
      <Error>{contentsError}</Error>
      상품가격: <input type="text" onChange={onChangePrice}></input>
      <br />
      <Error>{priceError}</Error>
      <button onClick={onClickUploadItem}>상품등록</button>
    </>
  );
}
