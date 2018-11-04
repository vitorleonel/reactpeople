import React from 'react';
import { Container } from './styles';


import User from './user';
import GitHubAuth from './github';

class SignIn extends React.Component {

  state = {
    user: null,
  }

  authHandler = response => {
    if(!response.code)
      return;

    this.setState({ user: response.code });
  }

  render() {
    return (
      <Container>
        {
          this.state.user
          ? <User />
          : <GitHubAuth authHandler={this.authHandler} />
        }
      </Container>
    )
  }

}

export default SignIn;
