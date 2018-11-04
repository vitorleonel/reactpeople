import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #DAE1E7;
    color: #22292F;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
