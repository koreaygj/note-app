import styled from "styled-components";

export const Container = styled.div<{ noteColor: string }>`
  .ql-editor {
    height: 250px;
    background-color: ${({ noteColor }) => noteColor};
  }
`;
