import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';

import User from './user';
import GitHubAuth from './github';

class SignIn extends React.Component {
  render() {
    return (
      <Container>
        {
          this.props.auth
          ? <User />
          : <GitHubAuth />
        }
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SignIn);
