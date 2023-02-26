import { Error } from "@/styles/emotion";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
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
  const router = useRouter();

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
      try {
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
        router.push(`/05/boards/${result.data.createProduct._id}`);
      } catch (error) {
        alert(error.message);
      }
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

// import { gql, useMutation } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useState } from "react";

// const CREATE_PRODUCT = gql`
//   mutation typeSetting(
//     $seller: String
//     $createProductInput: CreateProductInput!
//   ) {
//     createProduct(seller: $seller, createProductInput: $createProductInput) {
//       _id
//       number
//       message
//     }
//   }
// `;

// export default function Test() {
//   const [seller, setSeller] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setSContents] = useState("");
//   const [price, setPrice] = useState("");

//   const [errorSeller, setErrorSeller] = useState("");
//   const [errorTitle, setErrorTitle] = useState("");
//   const [errorContents, setErrorContents] = useState("");
//   const [errorPrice, setErrorPrice] = useState("");

//   const [myCreateProduct] = useMutation(CREATE_PRODUCT);
//   const router = useRouter();

//   const onClickSeller = (event) => {
//     setSeller(event.target.value);
//     if (event.target.value !== "") {
//       setErrorSeller("");
//     }
//   };
//   const onClickTitle = (event) => {
//     setTitle(event.target.value);
//     if (event.target.value !== "") {
//       setErrorTitle("");
//     }
//   };
//   const onClickContents = (event) => {
//     setSContents(event.target.value);
//     if (event.target.value !== "") {
//       setErrorContents("");
//     }
//   };
//   const onClickPrice = (event) => {
//     setPrice(event.target.value);
//     if (event.target.value !== "") {
//       setErrorPrice("");
//     }
//   };

//   const onClickUpload = async () => {
//     if (!seller) {
//       setErrorSeller("판매자를 등록하세요");
//     }
//     if (!title) {
//       setErrorTitle("판매자를 등록하세요");
//     }
//     if (!contents) {
//       setErrorContents("판매자를 등록하세요");
//     }
//     if (!price) {
//       setErrorPrice("판매자를 등록하세요");
//     }
//     if (setSeller && title && contents && price) {
//       const result = await myCreateProduct({
//         variables: {
//           seller: seller,
//           createProductInput: {
//             name: title,
//             detail: contents,
//             price: Number(price),
//           },
//         },
//       });
//       alert(result.data.createProduct.message);

//       router.push(`/05/boards/${result.data.createProduct._id}`);
//     }
//   };

//   return (
//     <>
//       판매자 : <input type="text" onChange={onClickSeller}></input>
//       <div>{errorSeller}</div>
//       제목 : <input type="text" onChange={onClickTitle}></input>
//       <div>{errorTitle}</div>
//       내용 : <input type="text" onChange={onClickContents}></input>
//       <div>{errorContents}</div>
//       가격 : <input type="text" onChange={onClickPrice}></input>
//       <div>{errorPrice}</div>
//       <button onClick={onClickUpload}>상품등록</button>
//     </>
//   );
// }
