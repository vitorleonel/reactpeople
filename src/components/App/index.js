import React from 'react';
import { GlobalStyle, Wrapper } from './styles';

import MainMap from '../MainMap';
import SignIn from '../SignIn';

const App = () => (
  <Wrapper>
    <GlobalStyle />

    <MainMap />
    <SignIn />
  </Wrapper>
);

export default App;
