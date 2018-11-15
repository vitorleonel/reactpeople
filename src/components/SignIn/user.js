import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component {
  state = {
    menuOpened: false,
  };

  toggleMenuHandler = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  logoutHandler = () => {
    window.localStorage.removeItem('@reactpeople:auth');

    this.props.unsetAuth();
  }

  render() {
    const { user } = this.props;

    return <React.Fragment>
      <div className="user" onClick={() => this.toggleMenuHandler()}>
        <img src={user.photo} alt={user.name} />

        <div className="user-info">
          <span className="user-info__name">{user.namea || user.username}</span>
          <span className="user-info__email">{user.emaila || 'not have e-mail'}</span>
        </div>
      </div>

      <ul className={'menu' + (this.state.menuOpened ? ' opened' : '')}>
        <li>
          <Link to="/profile/edit-your-location" onClick={() => this.toggleMenuHandler()}>Edit your location</Link>
        </li>
        <li>
          <Link to="/" onClick={() => this.logoutHandler()}>Logout</Link>
        </li>
      </ul>
    </React.Fragment>
  }
}
