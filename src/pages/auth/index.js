import React, { Component } from 'react';
import queryString from 'query-string';

import api from '../../services/api';

export default class Auth extends Component {

  componentDidMount() {
    const { code } = queryString.parse(this.props.location.search);

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
