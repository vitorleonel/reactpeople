import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

class AuthPage extends Component {

  componentDidMount() {
    const code = new URLSearchParams(this.props.location.search).get('code');

    if(code)
      this.authHandler(code);
  }

  authHandler = async code => {
    try {
      const { data } = await api.post('/auth', { code });

      window.localStorage.setItem('@reactpeople:access_token', data.access_token);
      window.localStorage.setItem('@reactpeople:user', JSON.stringify(data.user));
    } catch ({ response }) {}

    this.props.history.push('/');
  }

  render() {
    return <React.Fragment />;
  }

}

const mapDispatchToProps = dispatch => ({
  setAuthHandler: data => dispatch(),
});

export default connect(null, mapDispatchToProps)(AuthPage);
