import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
`;

export default function BodyWrapper(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
