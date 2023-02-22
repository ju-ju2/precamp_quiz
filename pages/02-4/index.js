import { useState } from "react";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);

    // 인풋창에 글이 적히면 오류메시지가 사라지는 로직
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
    if (event.target.value !== "") {
      setCheckPasswordError("");
    }
  };

  const onClickButton = () => {
    if (!email || !email.includes("@")) {
      setEmailError("정확한 이메일을 적어주세요");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (password !== checkPassword) {
      setCheckPasswordError("비밀번호가 일치하지 않습니다.");
    }
    if (email && password && checkPassword && password === checkPassword) {
      alert("회원가입을 축하합니다.");
    }
  };

  return (
    <>
      <div>
        Email : <input onChange={onChangeEmail}></input>
      </div>
      <div>{emailError}</div>
      <div>
        Password : <input type="password" onChange={onChangePassword}></input>
      </div>
      <div>{passwordError}</div>

      <div>
        CheckPassword :{" "}
        <input type="password" onChange={onChangeCheckPassword}></input>
      </div>
      <div>{checkPasswordError}</div>

      <div>
        <button onClick={onClickButton}>가입하기</button>
      </div>
    </>
  );
}
