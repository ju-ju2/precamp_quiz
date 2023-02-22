import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Wrapper = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/eatsLoadBackground.png");
  padding: 80px 50px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 120px 0;
`;
const Logo = styled.img`
  width: 63px;
  height: 82px;
  margin-bottom: 50px;
`;

const LogoText = styled.div`
  font-size: 60px;
  color: white;
  font-weight: 700;
`;

const InputBox = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0;
`;

const Email = styled.input`
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
`;
const Password = styled.input`
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
`;

const Error = styled.div`
  font-size: 16px;
  color: #ff1b6d;
  margin: 10px 0;
`;

const LoginButton = styled.button`
  width: 540px;
  height: 76px;
  //   background: #ff1b6d;
  //   opacity: 0.6;
  background-color: rgba(255, 27, 109, 0.6);
  border-radius: 38px;
  border: none;
  cursor: pointer;
`;

const LoginTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: white;
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  margin: 30px;
`;

const Signup = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding: 15px;
`;
const KakaoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #fae100;
  background: none;
  border-radius: 38px;
  width: 540px;
  height: 76px;
`;

const KakaoLogo = styled.img`
  width: 32px;
  height: 30px;
`;

const KakaoLoginText = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #ffe100;
  margin-left: 30px;
`;

export default function eatsLoad() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
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

  const onClickLogin = () => {
    if (!email || !email.includes("@")) {
      setEmailError("이메일 주소를 다시 확인해주세요");
    }
    if (!password || password.length < 8) {
      setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
    if (email.includes("@") && password.length >= 8) {
      alert("로그인완료");
    }
  };

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="/img/eatsLoadLocation.png"></Logo>
          <LogoText>잇츠로드</LogoText>
        </LogoWrapper>
        <InputBox>
          <Email type="text" onChange={onChangeEmail}></Email>
          <Error>{emailError}</Error>
        </InputBox>
        <InputBox>
          <Password type="password" onChange={onChangePassword}></Password>
          <Error>{passwordError}</Error>
        </InputBox>
        <LoginButton onClick={onClickLogin}>
          <LoginTitle>로그인</LoginTitle>
        </LoginButton>
        <SignupWrapper>
          <Signup>이메일 찾기</Signup>
          <Signup>|</Signup>
          <Signup>비밀번호 찾기</Signup>
          <Signup>|</Signup>
          <Signup>회원가입</Signup>
        </SignupWrapper>
        <KakaoWrapper>
          <KakaoLogo src="/img/kakaoLogo.png"></KakaoLogo>
          <KakaoLoginText>카카오톡으로 로그인</KakaoLoginText>
        </KakaoWrapper>
      </Wrapper>
    </Container>
  );
}
