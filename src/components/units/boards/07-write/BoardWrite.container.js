import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_PRODUCT } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [getCreateProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();

  const [seller, setSeller] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");

  const [sellerError, setSellerError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [priceError, setPriceError] = useState("");

  const [buttonColor, setButtonColor] = useState(false);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value) {
      setSellerError("");
    }
    if (event.target.value && title && contents && price) {
      setButtonColor(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (seller && event.target.value && contents && price) {
      setButtonColor(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    if (seller && title && event.target.value && price) {
      setButtonColor(true);
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (event.target.value) {
      setPriceError("");
    }
    if (seller && title && contents && event.target.value) {
      setButtonColor(true);
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
      router.push(`/07/boards/${result.data.createProduct._id}`);
    }
  };

  return (
    <BoardWriteUI
      onChangeSeller={onChangeSeller}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onClickUploadItem={onClickUploadItem}
      sellerError={sellerError}
      titleError={titleError}
      contentsError={contentsError}
      priceError={priceError}
      buttonColor={buttonColor}
    />
  );
}
