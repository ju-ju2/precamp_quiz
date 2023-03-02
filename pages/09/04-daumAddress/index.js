import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function DaumAddress() {
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleComplete = (address) => {
    //  마우스 위에 올려보면 매개변수가 뭐가 들어가는지 , 그 타입은 무엇인지 나온다.
    console.log(address);
    setAddress(address.address);
    setZipCode(address.zonecode);
  };

  const [isChoice, setIsChoice] = useState(true);

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      <div>주소 : {address}</div>
      <div>우편번호 : {zipCode}</div>
    </>
  );
}
