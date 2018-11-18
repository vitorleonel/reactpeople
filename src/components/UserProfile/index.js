import React, { Component } from 'react';

import { Container } from './styles';

export default class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return <Container>
      <img src={user.photo} alt={user.name} />

      <div className="info">
        <span className="info__name">{user.name || user.username}</span>
        <span className="info__email">{user.email || 'not have e-mail'}</span>
      </div>
    </Container>;
  }
}
