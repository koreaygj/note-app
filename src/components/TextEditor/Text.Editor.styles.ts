import styled from "styled-components";

export const Container = styled.div<{ noteColor: string }>`
  .ql-editor {
    height: 300px;
    background-color: ${({ noteColor }) => noteColor};
  }
`;
