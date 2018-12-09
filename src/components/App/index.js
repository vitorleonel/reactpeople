import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle, Wrapper } from "./styles";

import MainMap from "../MainMap";
import UserMenu from "../UserMenu";

import AuthPage from "../../pages/auth";
import EditLocationPage from "../../pages/edit-location";

const App = () => (
  <Wrapper>
    <GlobalStyle />

    <BrowserRouter>
      <React.Fragment>
        <UserMenu />
        <MainMap />

        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route
            path="/profile/edit-your-location"
            component={EditLocationPage}
          />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Wrapper>
);

export default App;
