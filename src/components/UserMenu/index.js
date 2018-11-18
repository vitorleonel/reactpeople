import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

import SignIn from '../SignIn';
import UserProfile from '../UserProfile';
import Menu from '../Menu';

class UserMenu extends Component {
  componentDidMount() {
    this.checkAuthHandler();
  }

  checkAuthHandler = () => {
    const auth = window.localStorage.getItem('@reactpeople:auth');

    if(auth)
      this.props.setAuth(JSON.parse(auth));
  }

  render() {
    return <Container>
      { this.props.user ? <UserProfile user={this.props.user} /> : <SignIn /> }

      { this.props.user ? <Menu /> : null }
    </Container>;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  setAuth: data => dispatch({ type: 'SET_AUTH', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);


