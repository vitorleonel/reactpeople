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
          <span className="user-info__name">{user.name || user.username}</span>
          <span className="user-info__email">{user.email || 'not have e-mail'}</span>
        </div>
      </div>

      <nav className={'menu' + (this.state.menuOpened ? ' opened' : '')}>
        <Link to="/profile/edit-your-location" onClick={() => this.toggleMenuHandler()}>
          <i aria-hidden="true" className="icon material-icons">pin_drop</i>
          <span>Edit your location</span>
        </Link>

        <Link to="/" onClick={() => this.logoutHandler()}>
          <i aria-hidden="true" className="icon material-icons">logout</i>
          <span>Logout</span>
        </Link>
      </nav>
    </React.Fragment>
  }
}
