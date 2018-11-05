import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import MainMap from '../MainMap';
import SignIn from '../SignIn';
import { GlobalStyle, Wrapper } from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyle />
      <MainMap />
      <SignIn />
    </Wrapper>
  </ThemeProvider>
);

export default App;
