import { gql, useQuery } from "@apollo/client";
import { Modal, Radio } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
// const CREATE_POINT_TRANSACTION_OF_LOADING = gql``;

export default function PaymentLoading() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [value, setValue] = useState(1);
  const onChange = (event) => {
    console.log("radio checked", event.target.value);
    setValue(event.target.value);
  };

  const onClickCharge = () => {
    // const IMP = window.IMP; // 생략 가능
    const { IMP } = window;
    IMP.init("imp75871841"); // 예: imp00000000a
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",   // 주문번호
        name: "충전금액",
        amount: value, // 숫자 타입
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          console.log(rsp);
          Modal.success({ content: "충전성공" });
        } else {
          // 결제 실패 시 로직
          Modal.error({ content: "충전실패" });
        }
      }
    );
  };
  return (
    <>
      <Head>
        {/* <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script> */}
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>

      <Radio.Group onChange={onChange} value={value}>
        <Radio value={100}>100원</Radio>
        <Radio value={200}>200원</Radio>
        <Radio value={300}>300원</Radio>
      </Radio.Group>
      <button onClick={onClickCharge}>충전하기</button>
    </>
  );
}
