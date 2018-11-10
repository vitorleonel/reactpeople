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
    const response = await api.post('/auth', { code });

    console.log(response);

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
