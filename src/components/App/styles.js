import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.neutralLight};
    color: ${props => props.theme.neutralDark};
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
