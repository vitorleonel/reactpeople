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
      </div>

      <ul className={'user-menu' + (this.state.menuOpened ? ' opened' : '')}>
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
