import { useState } from "react";

export default function MyStarRate() {
  const yellowLink = "../../../img/icon-starYellow.png";
  const grayLink = "../../../img/icon-starGray.png";

  const [rate, setRate] = useState("");

  const reset = () => {
    document.getElementById("star1").src = grayLink;
    document.getElementById("star2").src = grayLink;
    document.getElementById("star3").src = grayLink;
    document.getElementById("star4").src = grayLink;
    document.getElementById("star5").src = grayLink;
  };

  const onClickStar1 = () => {
    reset();
    document.getElementById("star1").src = yellowLink;
    alert("1점");
    setRate("1점");
  };

  const onClickStar2 = () => {
    reset();
    document.getElementById("star1").src = yellowLink;
    document.getElementById("star2").src = yellowLink;
    alert("2점");
    setRate("2점");
  };

  const onClickStar3 = () => {
    reset();
    document.getElementById("star1").src = yellowLink;
    document.getElementById("star2").src = yellowLink;
    document.getElementById("star3").src = yellowLink;
    alert("3점");
    setRate("3점");
  };

  const onClickStar4 = () => {
    reset();
    document.getElementById("star1").src = yellowLink;
    document.getElementById("star2").src = yellowLink;
    document.getElementById("star3").src = yellowLink;
    document.getElementById("star4").src = yellowLink;
    alert("4점");
    setRate("4점");
  };

  const onClickStar5 = () => {
    reset();
    document.getElementById("star1").src = yellowLink;
    document.getElementById("star2").src = yellowLink;
    document.getElementById("star3").src = yellowLink;
    document.getElementById("star4").src = yellowLink;
    document.getElementById("star5").src = yellowLink;
    alert("5점");
    setRate("5점");
  };

  return (
    <>
      <img id="star1" onClick={onClickStar1} src={grayLink}></img>
      <img id="star2" onClick={onClickStar2} src={grayLink}></img>
      <img id="star3" onClick={onClickStar3} src={grayLink}></img>
      <img id="star4" onClick={onClickStar4} src={grayLink}></img>
      <img id="star5" onClick={onClickStar5} src={grayLink}></img>
      <div>{rate}</div>
    </>
  );
}
