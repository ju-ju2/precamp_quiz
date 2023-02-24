import { Error } from "@/styles/emotion";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation typeSetting(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function ItemUpload() {
  const [getCreateProduct] = useMutation(CREATE_PRODUCT);

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

  const onClickUploadItem = async () => {
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
      const result = await getCreateProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: title,
            detail: contents,
            price: Number(price),
          },
        },
      });
      console.log(result);
      console.log(result.data.createProduct._id);

      alert(result.data.createProduct.message);
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
