import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  flex-grow: 1;
  background-color: #ffffff;
  padding: 25px 0px 25px 25px;
  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;
