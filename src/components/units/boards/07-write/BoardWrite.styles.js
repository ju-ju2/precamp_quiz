import styled from "@emotion/styled";

export const Error = styled.div`
  font-size: 10px;
  color: blue;
`;

export const UploadButton = styled.button`
  width: 250px;
  color: white;
  margin-top: 10px;
  background-color: ${(props) => (props.buttonColor ? "blue" : "default")};
`;
