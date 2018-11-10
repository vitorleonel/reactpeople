import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './styles';

import MainMap from '../MainMap';
import SignIn from '../SignIn';

import AuthPage from '../../pages/auth';

const App = () => (
  <Wrapper>
    <GlobalStyle />

    <BrowserRouter>
      <React.Fragment>
        <MainMap />
        <SignIn />

        <Switch>
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Wrapper>
);

export default App;
