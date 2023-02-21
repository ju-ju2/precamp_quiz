import {
  MyInfoIcon,
  MyInfoName,
  MyInfoNameWrapper,
  MyInfoPic,
  MyInfoText,
  MyInfoWrapper,
  NoticeBasic,
  NoticeWrapper,
  SearchImg,
  SearchWrapper,
  Wrapper,
  NoticePoint,
  QuestionWrapper,
  QuestionList,
  QuestionNum,
  Question,
  QuestionIcon,
  HeadWrapper,
  BodyWrapper,
  FooterWrapper,
  NaviWrapper,
  NaviIcon,
  NaviName,
} from "@/styles/emotion";

export default function MyPage() {
  return (
    <Wrapper>
      <HeadWrapper>
        <SearchWrapper>
          <SearchImg src="/img/search.png"></SearchImg>
        </SearchWrapper>
        <MyInfoWrapper>
          <MyInfoText>마이</MyInfoText>
          <MyInfoNameWrapper>
            <MyInfoPic src="/img/myInfoPic.png"></MyInfoPic>
            <MyInfoName>임정아</MyInfoName>
            <MyInfoIcon src="/img/toRight.png"></MyInfoIcon>
          </MyInfoNameWrapper>
        </MyInfoWrapper>
        <NoticeWrapper>
          <NoticeBasic>공지사항</NoticeBasic>
          <NoticeBasic>이벤트</NoticeBasic>
          <NoticePoint>FAQ</NoticePoint>
          <NoticeBasic>Q&A</NoticeBasic>
        </NoticeWrapper>
      </HeadWrapper>
      <BodyWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.01</QuestionNum>
            <Question>리뷰 작성은 어떻게 하나요?</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.02</QuestionNum>
            <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.03</QuestionNum>
            <Question>아이디/비밀번호를 잊어버렸어요</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.04</QuestionNum>
            <Question>회원탈퇴를 하고싶어요</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.05</QuestionNum>
            <Question>출발지 설정은 어떻게 하나요?</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
        <QuestionWrapper>
          <QuestionList>
            <QuestionNum>Q.06</QuestionNum>
            <Question>비밀번호를 변경하고 싶어요</Question>
          </QuestionList>
          <QuestionIcon src="/img/toBottom.png"></QuestionIcon>
        </QuestionWrapper>
      </BodyWrapper>
      <FooterWrapper>
        <NaviWrapper>
          <NaviIcon src="/img/home.png"></NaviIcon>
          <NaviName>홈</NaviName>
        </NaviWrapper>
        <NaviWrapper>
          <NaviIcon src="/img/location.png"></NaviIcon>
          <NaviName>잇츠로드</NaviName>
        </NaviWrapper>
        <NaviWrapper>
          <NaviIcon src="/img/mypick.png"></NaviIcon>
          <NaviName>마이찜</NaviName>
        </NaviWrapper>
        <NaviWrapper>
          <NaviIcon src="/img/mypage.png"></NaviIcon>
          <NaviName>마이</NaviName>
        </NaviWrapper>
      </FooterWrapper>
    </Wrapper>
  );
}
