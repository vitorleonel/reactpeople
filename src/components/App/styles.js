import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.colorNeutralLight};
    color: ${props => props.theme.colorNeutralDark};
  }

  .leaflet-bottom {
    padding-bottom: 1rem;
  }

  .leaflet-control-attribution {
    display: none;
  }

  .leaflet-control-zoom.leaflet-control {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
