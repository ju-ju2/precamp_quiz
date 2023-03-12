import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 400px;
  background-color: pink;
`;

export default function Banner(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
