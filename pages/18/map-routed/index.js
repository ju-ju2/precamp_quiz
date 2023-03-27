import Head from "next/head";
import { useEffect } from "react";

export default function MapRoutedPage() {
  useEffect(() => {
    // JSX문법에서 스크립트 태그를 만들어주는 과정
    // 리턴의 결과가 화면에 먼저 그려지고 useEffect를 통해 데이터를 후에 받아오기 위함
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9f7ec2c230c4669c85bacfe30e89b7e3";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
