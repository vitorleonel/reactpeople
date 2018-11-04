import React from 'react';
import { GlobalStyle, Wrapper } from './styles';

import SignIn from '../SignIn';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <SignIn />
  </Wrapper>
);

export default App;
