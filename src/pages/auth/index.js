import React, { Component } from 'react';

import api from '../../services/api';

export default class Auth extends Component {

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
