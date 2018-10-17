import React from 'react';
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
      <div className="w-16 h-16 bg-white p-3 rounded-full shadow fixed pin-t pin-r mt-4 mr-4 fixed">
        {
          this.state.user
          ? <User />
          : <GitHubAuth authHandler={this.authHandler} />
        }
      </div>
    )
  }

}

export default SignIn;
